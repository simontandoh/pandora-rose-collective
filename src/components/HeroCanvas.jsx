import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { getAdaptiveDpr, usePrefersReducedMotion } from "@/lib/motion";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uDepth;
  uniform float uSheen;
  uniform float uVignette;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
      (c - a) * u.y * (1.0 - u.x) +
      (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv;
    float drift = uTime * 0.03;
    float field = noise(uv * 1.4 + vec2(drift, drift * 0.7));

    vec3 noir = vec3(0.07, 0.02, 0.03);
    vec3 burgundy = vec3(0.22, 0.04, 0.07);
    vec3 base = mix(noir, burgundy, uDepth * 0.7 + field * 0.08);

    float vignette = smoothstep(0.2, 0.95, distance(uv, vec2(0.5)));
    base *= mix(1.0, 1.0 - uVignette * 0.6, vignette);

    float sheenBand = exp(-pow((uv.y - 0.58 + uTime * 0.02), 2.0) * 24.0);
    vec3 gold = vec3(0.66, 0.51, 0.28);
    base += gold * sheenBand * uSheen * 0.3;

    float grain = (random(uv * vec2(900.0, 700.0) + uTime) - 0.5) * 0.015;
    base += grain;

    gl_FragColor = vec4(base, 1.0);
  }
`;

const AtmospherePlane = forwardRef(function AtmospherePlane(_props, ref) {
  const materialRef = useRef();
  const pausedRef = useRef(false);
  const reducedMotion = usePrefersReducedMotion();
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDepth: { value: 0.45 },
      uSheen: { value: 0.06 },
      uVignette: { value: 0.7 },
    }),
    []
  );

  useImperativeHandle(ref, () => ({ uniforms }), [uniforms]);

  useEffect(() => {
    const handleVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useFrame((_state, delta) => {
    if (pausedRef.current || reducedMotion) return;
    uniforms.uTime.value += delta;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
});

export const HeroCanvas = forwardRef(function HeroCanvas(_props, ref) {
  const reducedMotion = usePrefersReducedMotion();
  const dpr = getAdaptiveDpr();

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={dpr}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <OrthographicCamera makeDefault position={[0, 0, 1]} />
        <AtmospherePlane ref={ref} />
      </Canvas>
    </div>
  );
});

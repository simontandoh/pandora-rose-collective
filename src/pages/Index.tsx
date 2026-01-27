import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { usePrefersReducedMotion } from "@/lib/motion";
import type { HeroCanvasHandle } from "@/types/hero-canvas";

const Index = () => {
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroCanvasRef = useRef<HeroCanvasHandle | null>(null);

  useEffect(() => {
    if (reducedMotion) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
    });
    window.__lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (reducedMotion) return undefined;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const hero = document.querySelector("[data-hero]");
      if (hero) {
        const heroItems = hero.querySelectorAll("[data-reveal]");
        gsap.set(heroItems, { y: 18, opacity: 0 });
        gsap
          .timeline({ delay: 0.15 })
          .to(heroItems, {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.08,
          });
      }

      const sections = gsap.utils.toArray<HTMLElement>("[data-section]");
      sections.forEach((section) => {
        const items = section.querySelectorAll("[data-stagger]");
        if (!items.length) return;
        gsap.set(items, { y: 18, opacity: 0 });
        ScrollTrigger.create({
          trigger: section,
          start: "top 72%",
          onEnter: () => {
            gsap.to(items, {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.08,
            });
          },
          once: true,
        });
      });

      const uniforms = heroCanvasRef.current?.uniforms;
      if (uniforms) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#about",
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          })
          .to(uniforms.uDepth, { value: 0.7, ease: "none" }, 0)
          .to(uniforms.uSheen, { value: 0.1, ease: "none" }, 0)
          .to(uniforms.uVignette, { value: 0.85, ease: "none" }, 0);
      }
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={rootRef} className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection canvasRef={heroCanvasRef} />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

/*
Acceptance checks:
- Desktop smooth, no jitter.
- Mobile readable, no heavy GPU load.
- Reduced motion works.
- Loop is seamless and continuous (WebGL drift has no visible seam).
*/

import { Download, Instagram, Play } from "lucide-react";
import type { RefObject } from "react";
import { HeroCanvas } from "@/components/HeroCanvas";
import heroImage from "@/assets/hero-portrait.jpg";
import type { HeroCanvasHandle } from "@/types/hero-canvas";

const stats = [
  { label: "Instagram", value: "186K" },
  { label: "TikTok", value: "300K+" },
  { label: "Campaigns", value: "UGC + Brand" },
];

export function HeroSection({ canvasRef }: { canvasRef: RefObject<HeroCanvasHandle | null> }) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const lenis = window.__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: 0, immediate: false });
      } else {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  };

  return (
    <section
      id="home"
      data-hero
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroCanvas ref={canvasRef} />
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pandora Rose portrait"
          className="w-full h-full object-cover object-[70%_center] opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-hero-veil" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto pl-2 pr-6 md:pl-4 md:pr-10 lg:pl-6 lg:pr-16 w-full pt-32 pb-20 flex justify-start">
        <div className="max-w-lg text-left md:pr-16 lg:pr-24">
          {/* Label */}
          <div className="label-accent mb-6" data-reveal>
            Content Creator & Brand Partner
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-6"
            data-reveal
          >
            Soft luxury.
            <br />
            <span className="text-champagne">Elevated living.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed mb-10"
            data-reveal
          >
            Premium content creation for discerning brands. Authentic storytelling
            that resonates with a global audience seeking refined aesthetics.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 mb-10" data-reveal>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-chip">
                {stat.label === "Instagram" && <Instagram className="w-4 h-4 text-accent" />}
                {stat.label === "TikTok" && <Play className="w-4 h-4 text-accent" />}
                <span className="font-medium text-foreground">{stat.value}</span>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4" data-reveal>
            <button
              onClick={() => scrollToSection("#work")}
              className="btn-primary"
            >
              Work With Me
            </button>
            <a
              href="#"
              className="btn-secondary inline-flex items-center gap-2"
              onClick={(e) => e.preventDefault()}
            >
              <Download className="w-4 h-4" />
              Download Media Kit
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" data-reveal>
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-border" />
        </button>
      </div>
    </section>
  );
}

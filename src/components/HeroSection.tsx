import { Instagram, Play, Download } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

const stats = [
  { label: "Instagram", value: "186K" },
  { label: "TikTok", value: "300K+" },
  { label: "Campaigns", value: "UGC + Brand" },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pandora Rose - Luxury lifestyle and content creator"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="label-accent mb-6 animate-fade-in">
            Content Creator & Brand Partner
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 animate-slide-up">
            Soft luxury.
            <br />
            <span className="text-champagne">Elevated living.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Premium content creation for discerning brands. Authentic storytelling
            that resonates with a global audience seeking refined aesthetics.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => scrollToSection("#services")}
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
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

import heroImage from "@/assets/hero-portrait.jpg";

const proofPoints = [
  "Creator-led presence",
  "AI-assisted editorial output",
  "Brand-safe visual direction",
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      data-hero
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pandora Rose portrait"
          className="h-full w-full object-cover object-[70%_center] opacity-32 md:opacity-42"
        />
      </div>
      <div className="absolute inset-0 bg-hero-veil" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-5 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="max-w-2xl text-left">
          <div className="label-accent mb-6" data-reveal>
            Creator identity / content direction
          </div>

          <h1
            className="mb-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
            data-reveal
          >
            A polished creator presence,
            <br />
            <span className="text-accent">built with control.</span>
          </h1>

          <p
            className="mb-10 max-w-xl text-base leading-8 text-muted-foreground md:text-lg"
            data-reveal
          >
            Pandora Rose is a creator brand for considered identity, AI-assisted
            editorial content, and commercially usable visual systems. Personal
            enough to feel human, restrained enough to hold a premium lane.
          </p>

          <div className="mb-10 flex flex-wrap gap-3" data-reveal>
            {proofPoints.map((point) => (
              <div key={point} className="stat-chip">
                {point}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5" data-reveal>
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary"
            >
              Start an Inquiry
            </button>
            <a
              href="#signature"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#signature");
              }}
              className="btn-ghost"
            >
              View content surface
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" data-reveal>
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-border" />
        </button>
      </div>
    </section>
  );
}

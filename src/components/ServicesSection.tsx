import { ArrowRight, Camera, FileText, Layers } from "lucide-react";
import { Section } from "@/components/Section";

const offers = [
  {
    icon: Camera,
    title: "Creator Content Sprint",
    description: "A contained batch of creator-led stills, scripts, and short-form ideas for testing a point of view.",
    includes: ["Concept direction", "Shot list or AI-assisted visuals", "Caption and post framing"],
    status: "[COPY NEEDED: confirm deliverables and price]",
  },
  {
    icon: FileText,
    title: "Editorial Content System",
    description: "A repeatable content surface for turning personality, taste, and themes into polished weekly output.",
    includes: ["Content pillars", "Visual rules", "Reusable post structures"],
    status: "[COPY NEEDED: confirm scope]",
  },
  {
    icon: Layers,
    title: "Brand Collaboration Stub",
    description: "A future-facing surface for partnerships once proof, cadence, and real audience signals are in place.",
    includes: ["Offer architecture", "Usage notes", "Partnership inquiry path"],
    status: "Future-ready",
  },
];

const process = [
  { step: "01", title: "Define", description: "Clarify audience, lane, and content purpose." },
  { step: "02", title: "Package", description: "Turn the point of view into repeatable surfaces." },
  { step: "03", title: "Publish", description: "Ship consistently without breaking the brand system." },
];

export function ServicesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section id="work" className="bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-accent mb-4" data-stagger>
            Offers
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6" data-stagger>
            Built for future monetisation, without overclaiming today.
          </h2>
          <p className="text-muted-foreground font-sans text-lg" data-stagger>
            These surfaces give Pandora somewhere credible to grow: creator
            output now, commercial offers when the cadence and proof are ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer) => (
            <div key={offer.title} className="service-card group" data-stagger>
              <offer.icon className="w-7 h-7 text-accent mb-6" />
              <h3 className="font-serif text-xl font-medium mb-3">
                {offer.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {offer.description}
              </p>
              <ul className="space-y-2 mb-6">
                {offer.includes.map((item) => (
                  <li key={item} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">-</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">
                  {offer.status}
                </span>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-xs font-medium text-accent hover:text-foreground transition-colors flex items-center gap-1 group-hover:gap-2"
                >
                  Discuss <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12" data-stagger>
          <h3 className="font-sans text-sm font-semibold tracking-wide uppercase mb-8 text-foreground">
            Publishing Rhythm
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-serif font-light text-accent/30 mb-4">
                  {item.step}
                </div>
                <h4 className="font-serif text-lg font-medium mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-1/2 h-px bg-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center" data-stagger>
          <button onClick={() => scrollToSection("#contact")} className="btn-primary">
            Shape the First Offer
          </button>
        </div>
      </div>
    </Section>
  );
}

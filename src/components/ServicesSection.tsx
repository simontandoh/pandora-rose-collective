import { ArrowRight, Camera, Video, Smartphone, Link, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";

const services = [
  {
    icon: Camera,
    title: "UGC Packages",
    description: "Photo + video content bundles tailored to your campaign goals.",
    includes: ["3-10 high-res images", "1-3 edited video clips", "Raw files available"],
    turnaround: "7-10 days",
  },
  {
    icon: Video,
    title: "Instagram Reels",
    description: "Vertical video content optimized for engagement and reach.",
    includes: ["Hook-driven edits", "Trending audio integration", "Caption copy"],
    turnaround: "5-7 days",
  },
  {
    icon: Smartphone,
    title: "TikTok Videos",
    description: "Native-feeling content designed for the platform's algorithm.",
    includes: ["On-trend concepts", "Sound selection", "Performance insights"],
    turnaround: "5-7 days",
  },
  {
    icon: Link,
    title: "Stories + Link Integration",
    description: "Swipe-up ready content with direct conversion tracking.",
    includes: ["3-5 story frames", "CTA optimization", "Link tracking"],
    turnaround: "3-5 days",
  },
  {
    icon: Sparkles,
    title: "Whitelisting / Paid Usage",
    description: "Content licensed for your brand's paid advertising campaigns.",
    includes: ["Extended usage rights", "Ad-ready formats", "Performance data"],
    turnaround: "Custom",
  },
];

const packages = [
  { name: "Starter", description: "Single deliverable", price: "Inquire" },
  { name: "Standard", description: "Multi-platform bundle", price: "Inquire" },
  { name: "Signature", description: "Full campaign partnership", price: "Inquire" },
];

const process = [
  { step: "01", title: "Inquiry", description: "Share your vision and goals" },
  { step: "02", title: "Creative + Approval", description: "Concept development and review" },
  { step: "03", title: "Delivery + Reporting", description: "Final assets and performance data" },
];

export function ServicesSection() {
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
    <Section id="work" className="bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-accent mb-4" data-stagger>
            Work
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6" data-stagger>
            Signature deliverables
          </h2>
          <p className="text-muted-foreground font-sans text-lg" data-stagger>
            Premium content solutions for brands seeking elevated, authentic
            representation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div key={service.title} className="service-card group" data-stagger>
              <service.icon className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-serif text-xl font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.includes.map((item) => (
                  <li key={item} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">-</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">
                  Turnaround: {service.turnaround}
                </span>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-xs font-medium text-accent hover:text-foreground transition-colors flex items-center gap-1 group-hover:gap-2"
                >
                  Request rates <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="bg-background border border-border/50 p-8 md:p-12 mb-16" data-stagger>
          <h3 className="font-serif text-2xl font-medium text-center mb-8">
            Package Tiers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`text-center p-6 ${
                  index === 1
                    ? "bg-card/50 border border-accent/20"
                    : "border border-border/30"
                }`}
              >
                <h4 className="font-serif text-xl font-medium mb-2">
                  {pkg.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {pkg.description}
                </p>
                <span className="label-accent">{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="text-center mb-12" data-stagger>
          <h3 className="font-sans text-sm font-semibold tracking-wide uppercase mb-8 text-foreground">
            The Process
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

        {/* CTA */}
        <div className="text-center" data-stagger>
          <button onClick={() => scrollToSection("#contact")} className="btn-primary">
            Start a Project
          </button>
        </div>
      </div>
    </Section>
  );
}

import { Check, Users, Globe, Clock } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";

const expectations = [
  "Taste-led creative direction",
  "Fast turnaround (7–14 days)",
  "Brand-safe, premium execution",
  "Flexible usage rights options",
];

const demographics = [
  { icon: Users, label: "Primary Age", value: "25–44" },
  { icon: Globe, label: "Top Markets", value: "US, UK, UAE" },
  { icon: Clock, label: "Avg. Watch Time", value: "45 sec" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-card">
              <img
                src={aboutImage}
                alt="Pandora Rose - About"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent detail */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/30" />
          </div>

          {/* Content */}
          <div>
            <div className="label-accent mb-4">About</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Creating moments of quiet luxury
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
              I'm Pandora Rose—a content creator and brand partner specializing in
              elevated lifestyle, beauty, and travel content. My work bridges the
              gap between aspirational aesthetics and authentic storytelling,
              connecting premium brands with an engaged, discerning audience.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              With a refined visual language and commitment to excellence, I help
              brands tell their stories through content that feels effortless yet
              intentional—the hallmark of true luxury.
            </p>

            {/* Expectations */}
            <div className="mb-10">
              <h3 className="font-sans text-sm font-semibold tracking-wide uppercase mb-4 text-foreground">
                What you can expect
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {expectations.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demographics */}
            <div className="card-luxury">
              <h3 className="font-sans text-xs font-semibold tracking-wide uppercase mb-4 text-muted-foreground">
                Audience Insights
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {demographics.map((item) => (
                  <div key={item.label} className="text-center">
                    <item.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium text-foreground">
                      {item.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

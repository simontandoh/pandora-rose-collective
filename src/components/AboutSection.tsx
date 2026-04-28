import { Check } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";
import { Section } from "@/components/Section";

const expectations = [
  "Taste-led creative systems, not disposable posts",
  "AI-assisted output with human editorial control",
  "Commercially safe concepts for future partnerships",
  "Clear surfaces for identity, content, and offers",
];

const principles = [
  { label: "Tone", value: "controlled, personal, commercially aware" },
  { label: "Output", value: "short-form concepts, editorial stills, creator POV" },
  { label: "Future", value: "built to support partnerships and productized offers" },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative" data-stagger>
            <div className="aspect-[3/4] overflow-hidden bg-card border border-border/40">
              <img
                src={aboutImage}
                alt="Pandora Rose editorial portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/30" />
          </div>

          <div>
            <div className="label-accent mb-4" data-stagger>
              About
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6" data-stagger>
              A creator brand with an editorial operating system.
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8" data-stagger>
              Pandora Rose is being shaped as a polished personality brand: a
              controlled place for identity, AI-led content experiments, and
              future commercial work without looking like a template creator page.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10" data-stagger>
              The current audience is intentionally small while the packaging is
              upgraded. The point is to make the brand feel established from day
              one, with enough restraint to grow into offers, collaborations, and
              studio-adjacent opportunities later.
            </p>

            <div className="mb-10" data-stagger>
              <h3 className="font-sans text-sm font-semibold tracking-wide uppercase mb-4 text-foreground">
                Operating principles
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

            <div className="card-luxury" data-stagger>
              <h3 className="font-sans text-xs font-semibold tracking-wide uppercase mb-4 text-muted-foreground">
                Positioning Notes
              </h3>
              <div className="space-y-5">
                {principles.map((item) => (
                  <div key={item.label} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                    <div className="label-accent mb-2">{item.label}</div>
                    <p className="text-sm leading-6 text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

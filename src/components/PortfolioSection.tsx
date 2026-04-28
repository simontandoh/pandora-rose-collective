import { Section } from "@/components/Section";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const contentItems = [
  {
    id: 1,
    image: portfolio1,
    title: "Quiet authority",
    format: "Editorial still + caption system",
    note: "A repeatable visual mood for polished creator positioning.",
  },
  {
    id: 2,
    image: portfolio2,
    title: "AI-assisted styling",
    format: "Prompted visual direction",
    note: "A controlled way to test aesthetic lanes before production.",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Creator POV",
    format: "Short-form script frame",
    note: "Human, specific, and commercially usable without fake polish.",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Studio notes",
    format: "Content pillar",
    note: "The bridge between personal presence and future offers.",
  },
];

export function PortfolioSection() {
  return (
    <Section id="signature" className="bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-accent mb-4" data-stagger>
            Content Surface
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6" data-stagger>
            A clean place for the ongoing Pandora output.
          </h2>
          <p className="text-muted-foreground font-sans text-lg" data-stagger>
            This is not a carousel or a fake portfolio. It is the first structure
            for documenting content pillars, AI-assisted experiments, and creator
            direction as the brand earns proof.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2" data-stagger>
          {contentItems.map((item) => (
            <article
              key={item.id}
              className="grid border border-border bg-card md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="aspect-[4/5] overflow-hidden border-b border-border md:border-b-0 md:border-r">
                <img
                  src={item.image}
                  alt={`${item.title} content reference`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="label-accent mb-4">{item.format}</div>
                  <h3 className="mb-4 font-serif text-2xl font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.note}
                  </p>
                </div>
                <p className="mt-10 border-t border-border pt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  [COPY NEEDED: link to live post when published]
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-border p-6 md:p-8" data-stagger>
          <div className="label-accent mb-4">Editorial Rule</div>
          <p className="max-w-3xl text-lg leading-8 text-foreground">
            Pandora can hint at the broader ALLURA studio model strategically,
            but this brand system stays visually separate: cool ink, mineral
            accents, precise rules, and a more personal editorial voice.
          </p>
        </div>
      </div>
    </Section>
  );
}

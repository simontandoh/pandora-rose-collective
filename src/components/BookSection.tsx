import { Calendar, Mail, Clock } from "lucide-react";

export function BookSection() {
  return (
    <section id="book" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="label-accent mb-4">Book</div>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Book a collaboration call
        </h2>
        <p className="text-muted-foreground font-sans text-lg mb-12 max-w-2xl mx-auto">
          For brand campaigns, UGC packages, and premium partnerships. Let's
          discuss how we can bring your vision to life.
        </p>

        {/* Calendly Embed Placeholder */}
        <div className="bg-background border border-border/50 p-8 md:p-16 mb-8">
          <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
          <h3 className="font-serif text-xl font-medium mb-4">
            Schedule a 15-minute call
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Calendly widget will be embedded here
          </p>
          {/* Placeholder for Calendly inline widget */}
          <div className="aspect-video max-w-xl mx-auto bg-card/50 border border-dashed border-border flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-muted-foreground text-sm mb-4">
                Calendly Inline Widget
              </p>
              <code className="text-xs bg-card px-3 py-2 rounded text-foreground/70">
                calendly.com/pandorarose
              </code>
            </div>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-accent" />
            <span className="font-sans text-sm">Prefer email?</span>
            <a
              href="mailto:rosadorateam@gmail.com"
              className="font-sans text-sm font-medium text-foreground hover:text-accent transition-colors underline underline-offset-4"
            >
              rosadorateam@gmail.com
            </a>
          </div>
          <div className="hidden md:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-sans text-sm">
              48-hour turnaround options available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

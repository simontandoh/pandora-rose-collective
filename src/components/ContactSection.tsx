import { useState } from "react";
import { Send, Check, Calendar, Mail, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section } from "@/components/Section";

const budgetOptions = [
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const deliverableOptions = [
  "UGC Package",
  "Instagram Reels",
  "TikTok Videos",
  "Stories Campaign",
  "Full Partnership",
  "Other",
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    deliverable: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" className="bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="label-accent mb-4" data-stagger>
            Contact
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6" data-stagger>
            Let's create together
          </h2>
          <p className="text-muted-foreground font-sans text-lg" data-stagger>
            Ready to elevate your brand? Share your project details below.
          </p>
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-8"
            data-stagger
          >
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-luxury"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-luxury"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
              >
                Company / Brand
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="input-luxury"
                placeholder="Brand name"
              />
            </div>

            {/* Budget & Deliverable Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
                >
                  Budget Range
                </label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger
                    id="budget"
                    className="input-luxury rounded-full border border-border/60 px-4 py-3 text-left"
                  >
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-border/60 bg-card/95 text-foreground shadow-xl backdrop-blur">
                    {budgetOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="rounded-xl focus:bg-accent/20 focus:text-foreground"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="deliverable"
                  className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
                >
                  Deliverable Type
                </label>
                <Select
                  value={formData.deliverable}
                  onValueChange={(value) =>
                    setFormData({ ...formData, deliverable: value })
                  }
                >
                  <SelectTrigger
                    id="deliverable"
                    className="input-luxury rounded-full border border-border/60 px-4 py-3 text-left"
                  >
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-border/60 bg-card/95 text-foreground shadow-xl backdrop-blur">
                    {deliverableOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="rounded-xl focus:bg-accent/20 focus:text-foreground"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="input-luxury resize-none"
                placeholder="Tell me about your campaign goals, timeline, and any specific requirements..."
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button type="submit" className="btn-primary inline-flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto text-center card-luxury" data-stagger>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-medium mb-4">
              Message received
            </h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. Expect a reply within 1-2 business
              days.
            </p>
          </div>
        )}

        {/* Signature Call */}
        <div className="mt-16" data-stagger>
          <div className="label-accent mb-4 text-center">Signature</div>
          <div className="bg-card/40 border border-border/50 p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <Calendar className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-medium mb-4">
                Book a collaboration call
              </h3>
              <p className="text-muted-foreground font-sans text-base mb-8">
                For brand campaigns, UGC packages, and premium partnerships. Let's
                discuss how we can bring your vision to life.
              </p>
              <div className="aspect-video max-w-xl mx-auto bg-background/40 border border-dashed border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground text-sm mb-4">
                    Calendly Inline Widget
                  </p>
                  <code className="text-xs bg-card px-3 py-2 rounded text-foreground/70">
                    calendly.com/pandorarose
                  </code>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-8">
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
          </div>
        </div>
      </div>
    </Section>
  );
}

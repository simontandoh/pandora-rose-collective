import { useState } from "react";
import { Send, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
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
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="label-accent mb-4">Contact</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Let's create together
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            Ready to elevate your brand? Share your project details below.
          </p>
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-8"
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
          <div className="max-w-md mx-auto text-center card-luxury animate-scale-in">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-medium mb-4">
              Message received
            </h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. Expect a reply within 1–2 business
              days.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { Section } from "@/components/Section";

const budgetOptions = [
  "Exploratory / scope needed",
  "Small content sprint",
  "Ongoing content system",
  "Future partnership",
];

const deliverableOptions = [
  "Creator content sprint",
  "Editorial content system",
  "Partnership inquiry",
  "Studio-adjacent conversation",
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
        <div className="text-center mb-12">
          <div className="label-accent mb-4" data-stagger>
            Contact
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6" data-stagger>
            Start the right conversation.
          </h2>
          <p className="text-muted-foreground font-sans text-lg" data-stagger>
            This form is a front-end intake stub until a live mail workflow is
            connected. Use it to shape the brief, or email directly.
          </p>
        </div>

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-2xl space-y-8 border border-border bg-card p-6 md:p-10"
            data-stagger
          >
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
                  placeholder="you@example.com"
                />
              </div>
            </div>

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
                placeholder="Brand or project name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="input-luxury"
                >
                  <option value="">Select one</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="deliverable"
                  className="block text-xs font-sans font-semibold tracking-wide uppercase mb-2 text-muted-foreground"
                >
                  Deliverable Type
                </label>
                <select
                  id="deliverable"
                  name="deliverable"
                  value={formData.deliverable}
                  onChange={handleChange}
                  className="input-luxury"
                >
                  <option value="">Select one</option>
                  {deliverableOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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
                placeholder="Tell me what needs to exist, who it is for, and what decision you are trying to make."
              />
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="btn-primary">
                Send Intake
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto text-center card-luxury" data-stagger>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-medium mb-4">
              Intake noted
            </h3>
            <p className="text-muted-foreground">
              [COPY NEEDED: connect a real email workflow before launch. For
              now, use the direct email below.]
            </p>
          </div>
        )}

        <div className="mt-16" data-stagger>
          <div className="label-accent mb-4 text-center">Direct</div>
          <div className="bg-card/40 border border-border/50 p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-medium mb-4">Email Pandora</h3>
              <p className="text-muted-foreground font-sans text-base mb-8">
                For early collaborations, content systems, and creator-brand
                positioning conversations.
              </p>
              <a
                href="mailto:rosadorateam@gmail.com"
                className="btn-secondary inline-flex"
              >
                rosadorateam@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

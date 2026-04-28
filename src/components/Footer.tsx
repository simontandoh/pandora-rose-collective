import { ExternalLink, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/pandorarose.co" },
  { icon: ExternalLink, label: "TikTok", href: "https://tiktok.com/@pandorarose" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-5 py-14 text-foreground md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-2xl font-medium tracking-tight"
          >
            Pandora Rose
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
            <a
              href="mailto:rosadorateam@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="h-px bg-border mb-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>(c) {new Date().getFullYear()} Pandora Rose. All rights reserved.</p>
          <p>[COPY NEEDED: privacy and terms links before public launch]</p>
        </div>
      </div>
    </footer>
  );
}

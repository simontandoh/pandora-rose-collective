import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Content", href: "#signature" },
  { label: "Offers", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 border-b border-border py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10 lg:px-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-serif text-xl font-medium tracking-tight text-foreground md:text-2xl"
        >
          Pandora Rose
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="nav-link text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="btn-primary"
          >
            Inquire
          </button>
        </nav>

        <button
          className="md:hidden rounded-full border border-border p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="nav-link text-lg text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary w-full text-center mt-4"
            >
              Inquire
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

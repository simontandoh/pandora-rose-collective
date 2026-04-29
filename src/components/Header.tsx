import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Signature", href: "#signature" },
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
      const lenis = window.__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -10, immediate: false });
      } else {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/40 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const lenis = window.__lenis;
            if (lenis) {
              lenis.scrollTo(0, { immediate: false });
            } else {
              window.scrollTo({ top: 0, behavior: "auto" });
            }
          }}
          className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground"
        >
          Pandora Rose
        </a>

        {/* Desktop Navigation */}
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
            onClick={() => scrollToSection("#work")}
            className="btn-primary"
          >
            Work With Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
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
              onClick={() => scrollToSection("#work")}
              className="btn-primary w-full text-center mt-4"
            >
              Work With Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

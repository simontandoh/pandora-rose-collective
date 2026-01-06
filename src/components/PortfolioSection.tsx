import { useState } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    brand: "Luxury Fragrance House",
    deliverables: "1 Reel + 3 Stories",
    result: "2.3M impressions",
    category: "Beauty",
  },
  {
    id: 2,
    image: portfolio2,
    brand: "Premium Skincare",
    deliverables: "UGC Package (5 videos)",
    result: "180K engagement",
    category: "Beauty",
  },
  {
    id: 3,
    image: portfolio3,
    brand: "Interior Design Studio",
    deliverables: "2 Reels + Lifestyle Photos",
    result: "1.1M reach",
    category: "Lifestyle",
  },
  {
    id: 4,
    image: portfolio4,
    brand: "Designer Accessories",
    deliverables: "TikTok Campaign",
    result: "450K views",
    category: "Fashion",
  },
  {
    id: 5,
    image: portfolio5,
    brand: "Luxury Hotel Group",
    deliverables: "Full Campaign Partnership",
    result: "3.2M reach",
    category: "Travel",
  },
  {
    id: 6,
    image: portfolio6,
    brand: "Wellness Brand",
    deliverables: "Stories + Swipe-up",
    result: "12% CTR",
    category: "Wellness",
  },
];

const brandPartners = [
  "Four Seasons Hotels",
  "Charlotte Tilbury",
  "Mejuri",
  "Goop",
  "The Ritz-Carlton",
  "Aesop",
];

const testimonial = {
  quote:
    "Working with Pandora was an absolute pleasure. Her attention to detail and understanding of our brand aesthetic resulted in content that exceeded our expectations. The engagement metrics speak for themselves.",
  author: "Brand Partnership Manager",
  company: "Luxury Beauty Brand",
};

export function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const openLightbox = (id: number) => setSelectedItem(id);
  const closeLightbox = () => setSelectedItem(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedItem === null) return;
    const currentIndex = portfolioItems.findIndex(
      (item) => item.id === selectedItem
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % portfolioItems.length
        : (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setSelectedItem(portfolioItems[newIndex].id);
  };

  const currentItem = portfolioItems.find((item) => item.id === selectedItem);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-accent mb-4">Portfolio</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Select Collaborations
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            A curated selection of brand partnerships across luxury, beauty, and
            lifestyle categories.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="gallery-item group"
            >
              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-end justify-start p-4 md:p-6">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                  <span className="text-xs font-sans tracking-wider uppercase text-accent">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm md:text-lg text-primary-foreground">
                    {item.brand}
                  </h4>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Brand Partners */}
        <div className="text-center mb-16">
          <h3 className="font-sans text-xs font-semibold tracking-wide uppercase mb-8 text-muted-foreground">
            Trusted by
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {brandPartners.map((brand) => (
              <a
                key={brand}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 text-sm font-sans text-foreground/70 hover:text-foreground transition-colors"
              >
                {brand}
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto card-luxury text-center">
          <Quote className="w-8 h-8 text-accent/30 mx-auto mb-6" />
          <blockquote className="font-serif text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground">
            "{testimonial.quote}"
          </blockquote>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {testimonial.author}
            </span>
            <br />
            {testimonial.company}
          </div>
        </div>

        {/* Lightbox */}
        {selectedItem !== null && currentItem && (
          <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 md:p-12 animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-4 md:left-8 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigateLightbox("next")}
              className="absolute right-4 md:right-8 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
              <img
                src={currentItem.image}
                alt={currentItem.brand}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="text-primary-foreground">
                <span className="label-accent">{currentItem.category}</span>
                <h3 className="font-serif text-3xl font-medium mt-2 mb-4">
                  {currentItem.brand}
                </h3>
                <div className="space-y-4 text-primary-foreground/80">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary-foreground/50">
                      Deliverables
                    </span>
                    <p className="text-lg">{currentItem.deliverables}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary-foreground/50">
                      Results
                    </span>
                    <p className="text-lg">{currentItem.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

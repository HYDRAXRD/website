import { ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import hydraLogo from "@/assets/hydraxrd-logo.png";
import { useMemo } from "react";

const HeroSection = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 8}s`,
        size: `${2 + Math.random() * 4}px`,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    []
  );

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Particle background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 text-center flex flex-col items-center gap-8 py-20">
        {/* Logo */}
        <div className="animate-pulse-glow">
          <img
            src={hydraLogo}
            alt="HydraXRD Logo"
            className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
          />
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-glow leading-tight max-w-4xl">
          HydraXRD: Unite the Radix Meme Revolution
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          The first memecoin battle game bringing together the Radix community through epic meme warfare
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="gap-2 text-base font-semibold box-glow px-8" asChild>
            <a href="https://ociswap.com/resource_rdx1t4kc2yjdcqprwu70tahua3p8uwvjej9q3rktpxdr8p5pmcp4almd6r" target="_blank" rel="noopener noreferrer">
              <ShoppingCart size={20} /> Buy Now
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 text-base font-semibold border-primary/50 hover:bg-primary/10 px-8"
            onClick={() => scrollTo("#roadmap")}
          >
            View Roadmap <ChevronDown size={20} />
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

import { ChevronDown, Flame, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 25% 30%, hsl(var(--primary)/0.10) 0%, transparent 70%),
            radial-gradient(ellipse 60% 45% at 75% 70%, hsl(var(--secondary)/0.08) 0%, transparent 70%)
          `,
        }}
      />

      <div className="container relative z-10 text-center flex flex-col items-center gap-8 py-20">

        {/* Logo — animada via classe CSS (keyframes em index.css) */}
        <div className="hero-logo-anim animate-pulse-glow">
          <img
            src="/favicon.png"
            alt="HYDRA Logo"
            width={224}
            height={224}
            decoding="async"
            loading="eager"
            fetchPriority="high"
            className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Badge */}
        <div className="hero-fade-up flex items-center gap-3" style={{ animationDelay: "0.5s" }}>
          <Flame className="text-destructive animate-bounce" size={28} />
          <span className="font-display text-2xl md:text-4xl font-black bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent animate-shimmer">
            WE ARE HYDRA!
          </span>
          <Zap className="text-accent animate-bounce" size={28} style={{ animationDelay: "0.3s" }} />
        </div>

        {/* Heading */}
        <h1
          className="hero-fade-up font-display text-4xl md:text-6xl lg:text-7xl font-black text-glow leading-tight max-w-4xl"
          style={{ animationDelay: "0.3s" }}
        >
          HYDRA: Unite the Radix Meme Revolution
        </h1>

        {/* Subheading */}
        <p
          className="hero-fade-up text-lg md:text-xl text-muted-foreground max-w-2xl"
          style={{ animationDelay: "0.5s" }}
        >
          The first memecoin battle game bringing together the Radix community through epic meme warfare 🚀
        </p>

        {/* CTAs */}
        <div
          className="hero-fade-up flex flex-col sm:flex-row gap-4 mt-4"
          style={{ animationDelay: "0.7s" }}
        >
          <Button
            size="lg"
            className="gap-2 text-base font-black bg-gradient-to-r from-primary via-accent to-destructive text-primary-foreground shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:scale-[1.08] active:scale-95 transition-transform animate-pulse px-10 text-lg"
            asChild
          >
            <a href="https://hydraxrd.com/swap" target="_blank" rel="noopener noreferrer">
              🐉 Buy Now 🔥
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 text-base font-semibold border-primary/50 hover:bg-primary/10 hover:scale-[1.08] active:scale-95 transition-transform px-8"
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

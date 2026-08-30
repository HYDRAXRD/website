import { ChevronDown, Flame, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  // Ensure all elements become visible after mount, even if CSS animations fail
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay to allow animations to start; if they don't, we force visibility
    const t = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  const forceVisible: React.CSSProperties = visible
    ? { opacity: 1, transform: "none" }
    : {};

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
        <div
          className="animate-pulse-glow"
          style={{
            animation: "heroLogoIn 1.2s cubic-bezier(0.34,1.56,0.64,1) forwards, pulse-glow 2s ease-in-out infinite 1.5s",
            opacity: 0,
            ...forceVisible,
          }}
        >
          <img
            src="/favicon.png"
            alt="HYDRA Logo"
            width={224}
            height={224}
            decoding="async"
            fetchPriority="high"
            className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
          />
        </div>

        <div
          className="flex items-center gap-3"
          style={{ animation: "heroFadeUp 0.8s 0.5s ease-out forwards", opacity: 0, ...forceVisible }}
        >
          <Flame className="text-destructive animate-bounce" size={28} />
          <span className="font-display text-2xl md:text-4xl font-black bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent animate-shimmer">
            WE ARE HYDRA!
          </span>
          <Zap className="text-accent animate-bounce" size={28} style={{ animationDelay: "0.3s" }} />
        </div>

        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-glow leading-tight max-w-4xl"
          style={{ animation: "heroFadeUp 0.8s 0.3s ease-out forwards", opacity: 0, ...forceVisible }}
        >
          HYDRA: Unite the Radix Meme Revolution
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          style={{ animation: "heroFadeUp 0.8s 0.5s ease-out forwards", opacity: 0, ...forceVisible }}
        >
          The first memecoin battle game bringing together the Radix community through epic meme warfare 🚀
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          style={{ animation: "heroFadeUp 0.8s 0.7s ease-out forwards", opacity: 0, ...forceVisible }}
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <style>{`
        @keyframes heroLogoIn {
          from { opacity: 0; transform: scale(0) rotate(-180deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="heroLogoIn"], [style*="heroFadeUp"] {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

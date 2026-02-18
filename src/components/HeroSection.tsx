import { ChevronDown, Flame, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import hydraLogo from "@/assets/hydraxrd-logo.png";
import { useMemo } from "react";

const HeroSection = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 text-center flex flex-col items-center gap-8 py-20">
        {/* Logo */}
        <motion.div
          className="animate-pulse-glow"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.2, bounce: 0.4 }}
        >
          <img
            src={hydraLogo}
            alt="HYDRA Logo"
            className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* WE ARE HYDRA catchphrase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <Flame className="text-destructive animate-bounce" size={28} />
          <span className="font-display text-2xl md:text-4xl font-black bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent animate-shimmer">
            WE ARE HYDRA!
          </span>
          <Zap className="text-accent animate-bounce" size={28} style={{ animationDelay: "0.3s" }} />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-glow leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          HYDRA: Unite the Radix Meme Revolution
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The first memecoin battle game bringing together the Radix community through epic meme warfare 🚀
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="gap-2 text-base font-black bg-gradient-to-r from-primary via-accent to-destructive text-primary-foreground shadow-xl shadow-primary/40 hover:shadow-primary/60 transition-all animate-pulse px-10 text-lg" asChild>
              <a href="https://ociswap.com/resource_rdx1t4kc2yjdcqprwu70tahua3p8uwvjej9q3rktpxdr8p5pmcp4almd6r" target="_blank" rel="noopener noreferrer">
                🐉 Buy Now 🔥
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base font-semibold border-primary/50 hover:bg-primary/10 px-8"
              onClick={() => scrollTo("#roadmap")}
            >
              View Roadmap <ChevronDown size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import hydraLogo from "@/assets/hydraxrd-logo.png";

const navLinks = [
  { label: "HydraSwap", href: "https://hydraxrd.com/swap", external: true },
  { label: "Game", href: "#game" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <motion.button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={hydraLogo} alt="HYDRA" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-bold text-glow">HYDRA</span>
        </motion.button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <motion.button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
            </motion.button>
          ))}
          <motion.div whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="gap-2 font-bold bg-gradient-to-r from-primary via-accent to-destructive text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow animate-pulse" asChild>
              <a href="https://hydraxrd.com/swap" target="_blank" rel="noopener noreferrer">
                🐉 Buy Now 🔥
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            {navLinks.map((l, i) => (
              <motion.button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {l.label}
              </motion.button>
            ))}
            <div className="px-6 py-2">
              <Button size="sm" className="w-full gap-2 font-bold bg-gradient-to-r from-primary via-accent to-destructive text-primary-foreground shadow-lg shadow-primary/30" asChild>
                <a href="https://hydraxrd.com/swap" target="_blank" rel="noopener noreferrer">
                  🐉 Buy Now 🔥
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

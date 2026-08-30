import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import hydraLogo from "@/assets/hydraxrd-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Game", href: "#game" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <img
            src={hydraLogo}
            alt="HYDRA"
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-lg font-bold text-glow">HYDRA</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://hydraxrd.com/blog"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
          >
            Blog
          </a>
          <Button
            size="sm"
            className="gap-2 font-bold bg-gradient-to-r from-primary via-accent to-destructive text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-200 animate-pulse"
            asChild
          >
            <a href="https://hydraxrd.com/swap" target="_blank" rel="noopener noreferrer">
              🐉 Buy Now 🔥
            </a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        {navLinks.map((l) => (
          <button
            key={l.href}
            onClick={() => scrollTo(l.href)}
            className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {l.label}
          </button>
        ))}
        <a
          href="https://hydraxrd.com/blog"
          className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(false)}
        >
          Blog
        </a>
        <div className="px-6 py-4">
          <Button
            size="sm"
            className="w-full gap-2 font-bold bg-gradient-to-r from-primary via-accent to-destructive text-primary-foreground shadow-lg shadow-primary/30"
            asChild
          >
            <a href="https://hydraxrd.com/swap" target="_blank" rel="noopener noreferrer">
              🐉 Buy Now 🔥
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

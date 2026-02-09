import { useState } from "react";
import { Menu, X, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import hydraLogo from "@/assets/hydraxrd-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Game", href: "#game" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Meme Generator", href: "#meme-generator" },
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
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
          <img src={hydraLogo} alt="HydraXRD" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-bold text-glow">HydraXRD</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button size="sm" className="gap-2 box-glow">
            <Wallet size={16} /> Connect Wallet
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl pb-4">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full gap-2">
              <Wallet size={16} /> Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

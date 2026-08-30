import hydraLogo from "@/assets/hydraxrd-logo.webp";
import { ExternalLink } from "lucide-react";

const socialLinks = [
  { label: "X / Twitter", href: "https://x.com/hydraxrd", emoji: "🐦" },
  { label: "Telegram", href: "https://t.me/hydraxrd", emoji: "✈️" },
  { label: "Discord", href: "https://discord.gg/hydraxrd", emoji: "💬" },
  { label: "GitHub", href: "https://github.com/HYDRAXRD", emoji: "🐙" },
];

const resourceLinks = [
  { label: "Blog", href: "https://hydraxrd.com/blog" },
  { label: "Swap", href: "https://hydraxrd.com/swap" },
  { label: "Docs", href: "https://hydraxrd.com/docs" },
  { label: "Whitepaper", href: "https://hydraxrd.com/whitepaper" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-background/80 backdrop-blur-xl py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img
              src={hydraLogo}
              alt="HYDRA"
              width={36}
              height={36}
              loading="lazy"
              decoding="async"
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-lg font-bold text-glow">HYDRA</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            The first memecoin battle game on Radix. Unite the community. Win the war. 🐉
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-sm mb-3 text-foreground">Resources</h4>
          <ul className="flex flex-col gap-2">
            {resourceLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {l.label} <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-sm mb-3 text-foreground">Community</h4>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.emoji} {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          © 2025 HYDRA. Not financial advice. DYOR. 🐉🔥
        </p>
        <p className="text-xs text-muted-foreground">
          Built on{" "}
          <a
            href="https://radixdlt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Radix DLT
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import hydraLogo from "@/assets/hydraxrd-logo.png";
import runsOnRadix from "@/assets/runs-on-radix.webp";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={hydraLogo} alt="HYDRA" className="h-8 w-8 object-contain" />
              <span className="font-display text-lg font-bold">HYDRA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The first memecoin battle game uniting the Radix community through epic meme warfare. WE ARE HYDRA! 🐍
            </p>
          </div>

          {/* Radix Ecosystem */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4">Radix Ecosystem</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.radixdlt.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Radix DLT</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Radix Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Radix Wallet</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Developer Docs</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://x.com/HYDRAXRD" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="https://t.me/hydraxrd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram</a></li>
              <li><a href="https://www.instagram.com/hydraxrd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@hydraxrd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left flex-1">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
              Disclaimer: HYDRA is a community-driven memecoin project. This is not financial advice.
              Cryptocurrency investments carry risk. Always do your own research before investing.
              HYDRA is not affiliated with or endorsed by Radix DLT Ltd.
            </p>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              © {new Date().getFullYear()} HYDRA. All rights reserved.
            </p>
          </div>
          <a href="https://www.radixdlt.com" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <img src={runsOnRadix} alt="Runs on Radix" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

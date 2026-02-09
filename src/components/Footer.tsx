import hydraLogo from "@/assets/hydraxrd-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={hydraLogo} alt="HydraXRD" className="h-8 w-8 object-contain" />
              <span className="font-display text-lg font-bold">HydraXRD</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The first memecoin battle game uniting the Radix community through epic meme warfare.
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

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>community@hydraxrd.com</li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6">
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
            Disclaimer: HydraXRD is a community-driven memecoin project. This is not financial advice.
            Cryptocurrency investments carry risk. Always do your own research before investing.
            HydraXRD is not affiliated with or endorsed by Radix DLT Ltd.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-4">
            © {new Date().getFullYear()} HydraXRD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

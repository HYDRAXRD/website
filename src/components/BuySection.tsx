const BuySection = () => {
  return (
    <section id="buy" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-8">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🐉</span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-glow">
              Buy HYDRA 🔥
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Swap your tokens for HYDRA instantly using the widget below
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/50 box-glow animate-fade-in">
          <iframe
            src="https://hydraxrd.com/swap?to=resource_rdx1t4kc2yjdcqprwu70tahua3p8uwvjej9q3rktpxdr8p5pmcp4almd6r&amount=1000"
            width="467"
            height="750"
            frameBorder="0"
            title="Buy HYDRA"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BuySection;

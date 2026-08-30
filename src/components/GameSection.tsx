import { Swords, ImageIcon, BookOpen, Target, Users } from "lucide-react";

const features = [
  { icon: Swords,     title: "Turn-Based Battles",   description: "Strategic memecoin combat with unique abilities and power-ups" },
  { icon: ImageIcon,  title: "Meme Integration",      description: "Real-time meme trends woven into gameplay mechanics" },
  { icon: BookOpen,   title: "Character Collection",  description: "Collect, upgrade, and customize your meme warriors" },
  { icon: Target,     title: "Strategic Combat",      description: "Deep tactical mechanics that reward skill and strategy" },
  { icon: Users,      title: "Community Content",     description: "Player-created memes and characters voted into the game" },
];

const GameSection = () => {
  return (
    <section id="game" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-glow mb-6">
            Battle Within the Radix Narrative
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An immersive memecoin battle experience where strategy meets meme culture on Radix
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:box-glow hover:scale-[1.04] hover:-translate-y-1.5 transition-all duration-300"
              style={{ animation: `fadeInUp 0.5s ${i * 0.1}s ease-out both` }}
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Battle arena */}
        <div
          className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-12 text-center box-glow"
          style={{ animation: "scaleIn 0.7s ease-out both" }}
        >
          <div className="max-w-lg mx-auto">
            {/* CSS wobble substituindo animate do framer */}
            <Swords
              size={64}
              className="mx-auto text-primary/40 mb-6"
              style={{ animation: "swordWobble 3s ease-in-out infinite" }}
            />

            <h3 className="font-display text-2xl font-bold mb-3 text-glow">Battle Arena</h3>
            <p className="text-muted-foreground mb-8">
              Epic meme battles in live. Prepare your strongest memes for combat in the Radix arena. ⚔️
            </p>

            <a
              href="https://hydraxrd.com/battlearena"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg shadow-lg hover:bg-primary/90 hover:box-glow hover:scale-[1.06] active:scale-[0.97] transition-all duration-200 cursor-pointer"
            >
              <Swords size={20} />
              Play Now
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes swordWobble {
          0%, 100% { transform: rotate(0deg); }
          25%       { transform: rotate(5deg); }
          75%       { transform: rotate(-5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="fadeInUp"], [style*="scaleIn"] { animation: none !important; opacity: 1 !important; }
          [style*="swordWobble"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default GameSection;

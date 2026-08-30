import { Coins, Swords, ArrowUpCircle, Gift, Vote, Lock } from "lucide-react";

const utilities = [
  { icon: Coins,          title: "In-Game Currency",   description: "Buy items, power-ups, and cosmetics" },
  { icon: Swords,         title: "Battle Entry Fees",   description: "Stake tokens to enter competitive battles" },
  { icon: ArrowUpCircle,  title: "Character Upgrades",  description: "Enhance your meme warriors\u2019 abilities" },
  { icon: Gift,           title: "Staking Rewards",     description: "Earn passive rewards by staking HYDRA" },
  { icon: Vote,           title: "Governance Rights",   description: "Vote on game features and community proposals" },
];

const distribution = [
  { name: "RlyFun Liquidity Pool", value: 80, color: "hsl(217, 91%, 60%)" },
  { name: "Ociswap Liquidity",     value: 20, color: "hsl(142, 70%, 50%)" },
];

// SVG donut puro — sem recharts, sem framer-motion
const DonutChart = () => {
  const cx = 80, cy = 80, r = 52, strokeWidth = 26;
  const circ = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg width="160" height="160" viewBox="0 0 160 160" aria-label="Token distribution chart" role="img">
      {distribution.map((d) => {
        const dash = (d.value / 100) * circ;
        const rotate = (offset / 100) * 360 - 90;
        offset += d.value;
        return (
          <circle
            key={d.name}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={d.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dash} ${circ}`}
            strokeDashoffset={0}
            transform={`rotate(${rotate} ${cx} ${cy})`}
            strokeLinecap="butt"
          />
        );
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.5">Total</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="bold">100%</text>
    </svg>
  );
};

const TokenomicsSection = () => (
  <section id="tokenomics" className="py-24 relative">
    <div className="container relative z-10">
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-glow-green mb-6">
          Tokenomics
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The HYDRA token powers every aspect of the ecosystem
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Utilities */}
        <div className="space-y-4">
          <h3 className="font-display text-xl font-bold mb-6">Token Utility</h3>
          {utilities.map((u, i) => (
            <div
              key={u.title}
              className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 hover:border-primary/50 hover:translate-x-2 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <u.icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{u.title}</h4>
                <p className="text-muted-foreground text-xs">{u.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart — SVG puro, CSS scale-in */}
        <div className="animate-scaleIn">
          <h3 className="font-display text-xl font-bold mb-6">Distribution</h3>
          <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <div className="flex justify-center">
              <DonutChart />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">
              {distribution.map((d) => (
                <div key={d.name} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                  {d.name} ({d.value}%)
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-center gap-3 box-glow-green hover:scale-[1.02] transition-transform duration-200">
            <Lock size={20} className="text-accent shrink-0" />
            <div>
              <p className="text-sm font-semibold text-accent">Liquidity Locked</p>
              <p className="text-xs text-muted-foreground">LP tokens locked to ensure community trust and stability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TokenomicsSection;

import { Coins, Swords, ArrowUpCircle, Gift, Vote, Lock } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const utilities = [
  { icon: Coins, title: "In-Game Currency", description: "Buy items, power-ups, and cosmetics" },
  { icon: Swords, title: "Battle Entry Fees", description: "Stake tokens to enter competitive battles" },
  { icon: ArrowUpCircle, title: "Character Upgrades", description: "Enhance your meme warriors' abilities" },
  { icon: Gift, title: "Staking Rewards", description: "Earn passive rewards by staking HYDRA" },
  { icon: Vote, title: "Governance Rights", description: "Vote on game features and community proposals" },
];

const distribution = [
  { name: "RlyFun Liquidity Pool", value: 80, color: "hsl(217, 91%, 60%)" },
  { name: "Ociswap Liquidity", value: 20, color: "hsl(142, 70%, 50%)" },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-glow-green mb-6">
            Tokenomics
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The HYDRA token powers every aspect of the ecosystem
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Utilities */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold mb-6">Token Utility</h3>
            {utilities.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 hover:border-primary/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <u.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{u.title}</h4>
                  <p className="text-muted-foreground text-xs">{u.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-xl font-bold mb-6">Distribution</h3>
            <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={distribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {distribution.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(225, 25%, 10%)",
                      border: "1px solid hsl(225, 20%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 40%, 95%)",
                      fontSize: "13px",
                    }}
                    formatter={(value: number) => [`${value}%`, ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {distribution.map((d) => (
                  <div key={d.name} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                    {d.name} ({d.value}%)
                  </div>
                ))}
              </div>
            </div>

            {/* LP Lock badge */}
            <motion.div
              className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-center gap-3 box-glow-green"
              whileHover={{ scale: 1.02 }}
            >
              <Lock size={20} className="text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold text-accent">Liquidity Locked</p>
                <p className="text-xs text-muted-foreground">LP tokens locked to ensure community trust and stability</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;

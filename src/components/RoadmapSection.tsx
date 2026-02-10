import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    period: "Q1 2026",
    color: "border-primary bg-primary/10 text-primary",
    items: [
      "Community building and initial token launch",
      "Social media meme campaign across Twitter, Telegram, Discord",
      "Partnership discussions with Radix Foundation",
      "Website and branding launch",
      "Early adopter rewards program",
    ],
  },
  {
    phase: "Phase 2",
    title: "Game Development",
    period: "Q2 2026",
    color: "border-secondary bg-secondary/10 text-secondary",
    items: [
      "Game mechanics design and documentation",
      "Character and battle system development",
      "Smart contract development on Radix",
      "Alpha testing with community members",
      "NFT integration planning",
    ],
  },
  {
    phase: "Phase 3",
    title: "Beta Launch",
    period: "Q3 2026",
    color: "border-accent bg-accent/10 text-accent",
    items: [
      "Public beta release",
      "Community tournaments and events",
      "Influencer partnerships and KOL collaborations",
      "Cross-promotion with other Radix projects",
      "Feedback implementation and balancing",
    ],
  },
  {
    phase: "Phase 4",
    title: "Full Release",
    period: "Q4 2026",
    color: "border-neon-orange bg-destructive/10 text-destructive",
    items: [
      "Official game launch",
      "Mobile compatibility",
      "Advanced features: guilds, leaderboards, seasonal events",
      "Ecosystem expansion and new game modes",
      "Long-term sustainability model",
    ],
  },
  {
    phase: "Phase 5",
    title: "Expansion",
    period: "2027",
    color: "border-neon-purple bg-secondary/10 text-secondary",
    items: [
      "New battle arenas and characters",
      "Cross-chain bridge exploration",
      "Esports tournaments with prize pools",
      "Community governance implementation",
      "Continuous content updates and seasonal themes",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-glow mb-6">
            The Path Forward
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our roadmap to building the ultimate memecoin battle game on Radix
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 mt-2"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="ml-12 md:ml-0 md:w-1/2 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:box-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${p.color}`}>
                      {p.phase}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">{p.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

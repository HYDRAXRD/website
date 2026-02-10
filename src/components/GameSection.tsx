import { Swords, ImageIcon, BookOpen, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Swords, title: "Turn-Based Battles", description: "Strategic memecoin combat with unique abilities and power-ups" },
  { icon: ImageIcon, title: "Meme Integration", description: "Real-time meme trends woven into gameplay mechanics" },
  { icon: BookOpen, title: "Character Collection", description: "Collect, upgrade, and customize your meme warriors" },
  { icon: Target, title: "Strategic Combat", description: "Deep tactical mechanics that reward skill and strategy" },
  { icon: Users, title: "Community Content", description: "Player-created memes and characters voted into the game" },
];

const GameSection = () => {
  return (
    <section id="game" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
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
            Battle Within the Radix Narrative
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An immersive memecoin battle experience where strategy meets meme culture on Radix
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -5 }}
              className="group rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:box-glow transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Battle arena mockup */}
        <motion.div
          className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-12 text-center box-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-lg mx-auto">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Swords size={64} className="mx-auto text-primary/40 mb-6" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold mb-3 text-glow">Battle Arena</h3>
            <p className="text-muted-foreground">
              Epic meme battles coming soon. Prepare your strongest memes for combat in the Radix arena. ⚔️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GameSection;

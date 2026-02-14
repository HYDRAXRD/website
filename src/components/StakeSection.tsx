import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const StakeSection = () => {
  return (
    <section id="stake" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="text-accent" size={32} />
            <h2 className="font-display text-3xl md:text-5xl font-black text-glow">
              Stake HYDRA 🐍
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Stake your HYDRA tokens and earn rewards
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-[960px] rounded-2xl overflow-hidden border border-border/50 box-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="staking-widget"
            src="https://radix.defiplaza.net/widget/staking/resource_rdx1t4kc2yjdcqprwu70tahua3p8uwvjej9q3rktpxdr8p5pmcp4almd6r?theme=blue"
            width="100%"
            scrolling="no"
            height="1000"
            style={{ border: 0, margin: "0 auto", display: "block", minWidth: 375, colorScheme: "normal" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StakeSection;

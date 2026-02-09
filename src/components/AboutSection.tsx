import { Heart, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Unity",
    description: "Bringing together every corner of the Radix memecoin community under one banner.",
    color: "text-neon-purple",
    glow: "box-glow-purple",
  },
  {
    icon: Users,
    title: "Community",
    description: "Built by the community, for the community. Every voice matters in the Hydra collective.",
    color: "text-primary",
    glow: "box-glow",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Driving adoption and visibility for Radix through powerful memes and engaging gameplay.",
    color: "text-accent",
    glow: "box-glow-green",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-glow-purple mb-6">
            Integrating, Not Dividing
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            HydraXRD was born to unite the Radix memecoin community during challenging times.
            Our mission is to reignite the memecoin flame on Radix by creating engaging gameplay
            that attracts new users through powerful memes and social media presence. Every strong
            network has strong memes, and we're here to lift Radix out of the mud together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className={`rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center hover:scale-105 transition-transform duration-300 ${v.glow}`}
            >
              <div className={`inline-flex p-4 rounded-xl bg-muted/50 mb-6 ${v.color}`}>
                <v.icon size={32} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

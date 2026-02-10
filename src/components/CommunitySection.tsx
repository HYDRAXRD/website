import { Twitter, MessageCircle, Users, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Twitter, label: "Twitter / X", href: "https://x.com/HYDRAXRD" },
  { icon: MessageCircle, label: "Telegram", href: "https://t.me/hydraxrd" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hydraxrd" },
  { icon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ), label: "TikTok", href: "https://www.tiktok.com/@hydraxrd" },
];

const stats = [
  { value: "1K+", label: "Community Members" },
  { value: "Coming Soon", label: "Battles Completed" },
  { value: "100+", label: "Memes Created" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-glow mb-6">
          Join the Revolution
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          Be part of the movement that's reshaping the Radix memecoin landscape. Connect, battle, and grow with us.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socials.map((s) => (
            <Button
              key={s.label}
              variant="outline"
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary/10 hover:box-glow transition-all px-8"
              asChild
            >
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                <s.icon size={20} /> {s.label}
              </a>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <p className="font-display text-2xl md:text-3xl font-bold text-glow mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

import { Twitter, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Twitter, label: "X", href: "https://x.com/HYDRAXRD" },
  { icon: MessageCircle, label: "Telegram", href: "https://t.me/hydraxrd" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hydraxrd" },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
    label: "TikTok",
    href: "https://www.tiktok.com/@hydraxrd",
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
    label: "YouTube",
    href: "https://www.youtube.com/@HYDRAXRD",
  },
];

const stats = [
  { value: "100+", label: "Community Members" },
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
        <div style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-glow mb-6">
            Join the Revolution 🐉
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Be part of the movement that's reshaping the Radix memecoin landscape. Connect, battle, and grow with us.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s 0.2s ease-out both" }}
        >
          {socials.map((s) => (
            <Button
              key={s.label}
              variant="outline"
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary/10 hover:box-glow hover:scale-[1.08] hover:-translate-y-1 active:scale-95 transition-all px-8"
              asChild
            >
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                <s.icon size={20} /> {s.label}
              </a>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:scale-105 transition-transform duration-200"
              style={{ animation: `scaleIn 0.5s ${i * 0.15}s ease-out both` }}
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-glow mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="fadeInUp"], [style*="scaleIn"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Sparkles,
  Download,
  Share2,
  Shuffle,
  Upload,
  Clock,
  X,
  Image as ImageIcon,
  Type,
} from "lucide-react";

const TEMPLATES = [
  { id: "drake", name: "Drake Hotline Bling", bg: "linear-gradient(135deg, #FFB347, #FF6F61)", layout: "split" },
  { id: "distracted", name: "Distracted Boyfriend", bg: "linear-gradient(135deg, #A770EF, #CF8BF3)", layout: "split" },
  { id: "galaxy", name: "Galaxy Brain", bg: "linear-gradient(135deg, #0F2027, #2C5364)", layout: "stacked" },
  { id: "expanding", name: "Expanding Brain", bg: "linear-gradient(135deg, #4A00E0, #8E2DE2)", layout: "stacked" },
  { id: "buttons", name: "Two Buttons", bg: "linear-gradient(135deg, #F7971E, #FFD200)", layout: "split" },
  { id: "changemymind", name: "Change My Mind", bg: "linear-gradient(135deg, #11998e, #38ef7d)", layout: "single" },
  { id: "radix-hydra", name: "Radix Hydra", bg: "linear-gradient(135deg, #052BBA, #396AFC)", layout: "single" },
  { id: "radix-moon", name: "Radix to the Moon", bg: "linear-gradient(135deg, #0c0c2e, #1a1a6e)", layout: "stacked" },
];

const FONTS = ["Impact", "Arial", "Comic Sans MS", "Courier New"];

const TEXT_COLORS = [
  { name: "White", value: "#FFFFFF" },
  { name: "Black", value: "#000000" },
  { name: "Yellow", value: "#FFD700" },
  { name: "Neon Green", value: "#39FF14" },
  { name: "Radix Blue", value: "#396AFC" },
  { name: "Hot Pink", value: "#FF69B4" },
];

const MAX_TOP = 120;
const MAX_BOTTOM = 120;

interface MemeHistoryItem {
  id: string;
  dataUrl: string;
  template: string;
  topText: string;
  bottomText: string;
  createdAt: number;
}

const MemeGeneratorSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [template, setTemplate] = useState(TEMPLATES[0].id);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [font, setFont] = useState("Impact");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [watermark, setWatermark] = useState(true);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [history, setHistory] = useState<MemeHistoryItem[]>([]);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hydraxrd-meme-history");
      if (saved) setHistory(JSON.parse(saved));
    } catch {}
  }, []);

  const saveHistory = (items: MemeHistoryItem[]) => {
    setHistory(items);
    localStorage.setItem("hydraxrd-meme-history", JSON.stringify(items));
  };

  const selectedTemplate = TEMPLATES.find((t) => t.id === template) || TEMPLATES[0];

  const drawMeme = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 600;
    const H = 600;
    canvas.width = W;
    canvas.height = H;

    // Background
    if (customImage) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        ctx.drawImage(img, 0, 0, W, H);
        drawTexts(ctx, W, H);
      };
      img.src = customImage;
      return;
    }

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, W, H);
    const bg = selectedTemplate.bg;
    const colors = bg.match(/#[0-9A-Fa-f]{6}/g) || ["#000000", "#333333"];
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1] || colors[0]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);

    // Template label
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.font = "bold 28px Orbitron, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(selectedTemplate.name, W / 2, H / 2);

    drawTexts(ctx, W, H);
  }, [topText, bottomText, font, textColor, watermark, customImage, selectedTemplate]);

  const drawTexts = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const fontSize = Math.max(28, Math.min(48, W / (Math.max(topText.length, bottomText.length, 1) * 0.8)));
    ctx.font = `bold ${fontSize}px ${font}`;
    ctx.textAlign = "center";
    ctx.lineWidth = 3;
    ctx.strokeStyle = textColor === "#FFFFFF" ? "#000000" : "#000000";
    ctx.fillStyle = textColor;

    // Top text
    if (topText) {
      const lines = wrapText(ctx, topText, W - 40);
      lines.forEach((line, i) => {
        const y = 50 + i * (fontSize + 6);
        ctx.strokeText(line, W / 2, y);
        ctx.fillText(line, W / 2, y);
      });
    }

    // Bottom text
    if (bottomText) {
      const lines = wrapText(ctx, bottomText, W - 40);
      const startY = H - 20 - (lines.length - 1) * (fontSize + 6);
      lines.forEach((line, i) => {
        const y = startY + i * (fontSize + 6);
        ctx.strokeText(line, W / 2, y);
        ctx.fillText(line, W / 2, y);
      });
    }

    // Watermark
    if (watermark) {
      ctx.font = "12px Arial";
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.strokeStyle = "rgba(0,0,0,0.3)";
      ctx.lineWidth = 1;
      ctx.textAlign = "right";
      const wmText = "#HydraXRD • #Radix";
      ctx.strokeText(wmText, W - 10, H - 10);
      ctx.fillText(wmText, W - 10, H - 10);
    }
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  // Redraw on changes
  useEffect(() => {
    drawMeme();
  }, [drawMeme]);

  const handleGenerate = async () => {
    setGenerating(true);
    // Simulate generation delay
    await new Promise((r) => setTimeout(r, 800));
    drawMeme();

    const canvas = canvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL("image/png");
      const item: MemeHistoryItem = {
        id: Date.now().toString(),
        dataUrl,
        template: selectedTemplate.name,
        topText,
        bottomText,
        createdAt: Date.now(),
      };
      const updated = [item, ...history].slice(0, 5);
      saveHistory(updated);
    }

    setGenerating(false);
    setGenerated(true);
    setTimeout(() => setGenerated(false), 3000);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `hydraxrd-meme-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(
      `${topText ? topText + " " : ""}${bottomText || "Check out my meme!"} #HydraXRD #Radix #Memecoin`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const handleShareTelegram = () => {
    const text = encodeURIComponent(
      `${topText ? topText + " " : ""}${bottomText || "Check out my meme!"} #HydraXRD #Radix`
    );
    window.open(`https://t.me/share/url?url=&text=${text}`, "_blank");
  };

  const handleSurpriseMe = () => {
    const randomTemplate = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
    setTemplate(randomTemplate.id);
    const phrases = [
      ["When Radix moons", "And you bought the dip"],
      ["Me explaining DeFi", "To my grandma"],
      ["Before memecoin season", "After memecoin season"],
      ["Selling at the bottom", "Buying at the top"],
      ["1 $HYDRA = 1 $HYDRA", "This is the way"],
      ["POV: You found HydraXRD", "Life is good now"],
    ];
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    setTopText(random[0]);
    setBottomText(random[1]);
  };

  const handleCustomImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setCustomImage(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const clearCustomImage = () => {
    setCustomImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section id="meme-generator" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-neon-green uppercase tracking-widest">
            Meme Factory
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-glow">
            Create Radix Memes Instantly
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pick a template, add your text, and unleash your meme magic on the Radix community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Controls */}
          <div className="space-y-5 order-2 lg:order-1">
            {/* Template */}
            <div>
              <Label className="text-sm text-muted-foreground mb-1.5 block">Template</Label>
              <Select value={template} onValueChange={(v) => { setTemplate(v); setCustomImage(null); }}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TEMPLATES.map((t) => (
                    <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Top text */}
            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-sm text-muted-foreground">Top Text</Label>
                <span className="text-xs text-muted-foreground">{topText.length}/{MAX_TOP}</span>
              </div>
              <Input
                placeholder="Enter top text…"
                value={topText}
                onChange={(e) => e.target.value.length <= MAX_TOP && setTopText(e.target.value)}
                className="bg-card border-border"
              />
            </div>

            {/* Bottom text */}
            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-sm text-muted-foreground">Bottom Text</Label>
                <span className="text-xs text-muted-foreground">{bottomText.length}/{MAX_BOTTOM}</span>
              </div>
              <Input
                placeholder="Enter bottom text…"
                value={bottomText}
                onChange={(e) => e.target.value.length <= MAX_BOTTOM && setBottomText(e.target.value)}
                className="bg-card border-border"
              />
            </div>

            {/* Font + Color row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm text-muted-foreground mb-1.5 block">Font</Label>
                <Select value={font} onValueChange={setFont}>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {FONTS.map((f) => (
                      <SelectItem key={f} value={f}><span style={{ fontFamily: f }}>{f}</span></SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground mb-1.5 block">Text Color</Label>
                <Select value={textColor} onValueChange={setTextColor}>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TEXT_COLORS.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        <span className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full border border-border inline-block" style={{ background: c.value }} />
                          {c.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Watermark + Upload row */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Switch checked={watermark} onCheckedChange={setWatermark} />
                <Label className="text-sm text-muted-foreground">HydraXRD Watermark</Label>
              </div>
              <div className="flex items-center gap-2">
                {customImage ? (
                  <Button size="sm" variant="outline" onClick={clearCustomImage} className="gap-1">
                    <X size={14} /> Remove Image
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" onClick={() => fileInputRef.current?.click()} className="gap-1">
                    <Upload size={14} /> Upload Image
                  </Button>
                )}
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleCustomImage} />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={handleGenerate}
                disabled={generating}
                className="flex-1 gap-2 box-glow font-semibold text-base py-5"
              >
                {generating ? (
                  <span className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                ) : (
                  <Sparkles size={18} />
                )}
                {generating ? "Generating…" : "Generate Meme"}
              </Button>
              <Button size="icon" variant="outline" onClick={handleSurpriseMe} title="Surprise Me">
                <Shuffle size={18} />
              </Button>
            </div>

            {generated && (
              <p className="text-neon-green text-sm font-medium animate-pulse">
                ✨ Meme created! Download or share it below.
              </p>
            )}

            {/* Download + share */}
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" onClick={handleDownload} className="gap-2 flex-1">
                <Download size={16} /> Download PNG
              </Button>
              <Button variant="outline" onClick={handleShareTwitter} className="gap-2 flex-1">
                <Share2 size={16} /> Share to Twitter
              </Button>
              <Button variant="outline" onClick={handleShareTelegram} className="gap-2 flex-1">
                <Share2 size={16} /> Share to Telegram
              </Button>
            </div>
          </div>

          {/* Preview */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden border border-border box-glow-purple bg-card p-2 w-full max-w-[620px]">
              <canvas
                ref={canvasRef}
                className="w-full h-auto rounded-lg"
                style={{ imageRendering: "auto" }}
              />
            </div>

            {/* History */}
            {history.length > 0 && (
              <div className="mt-8 w-full max-w-[620px]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-muted-foreground" />
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Recent Memes</span>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {history.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTopText(item.topText);
                        setBottomText(item.bottomText);
                        const t = TEMPLATES.find((t) => t.name === item.template);
                        if (t) setTemplate(t.id);
                      }}
                      className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
                    >
                      <img src={item.dataUrl} alt="meme" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGeneratorSection;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GameSection from "@/components/GameSection";
import RoadmapSection from "@/components/RoadmapSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import BuySection from "@/components/BuySection";
import StakeSection from "@/components/StakeSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GameSection />
      <RoadmapSection />
      <TokenomicsSection />
      <BuySection />
      <StakeSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

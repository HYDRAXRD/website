import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollToTop from "@/components/ScrollToTop";

// Below-the-fold sections loaded lazily
const AboutSection      = lazy(() => import("@/components/AboutSection"));
const GameSection       = lazy(() => import("@/components/GameSection"));
const RoadmapSection    = lazy(() => import("@/components/RoadmapSection"));
const TokenomicsSection = lazy(() => import("@/components/TokenomicsSection"));
const BuySection        = lazy(() => import("@/components/BuySection"));
const StakeSection      = lazy(() => import("@/components/StakeSection"));
const CommunitySection  = lazy(() => import("@/components/CommunitySection"));
const Footer            = lazy(() => import("@/components/Footer"));

// Minimal skeleton shown while lazy sections load
const SectionSkeleton = () => (
  <div className="w-full py-24 animate-pulse">
    <div className="max-w-4xl mx-auto px-4 space-y-4">
      <div className="h-8 bg-white/5 rounded-lg w-1/3" />
      <div className="h-4 bg-white/5 rounded w-2/3" />
      <div className="h-4 bg-white/5 rounded w-1/2" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Critical above-the-fold — loaded immediately */}
      <Navbar />
      <HeroSection />

      {/* Below-the-fold — lazy loaded as user scrolls */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <GameSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <RoadmapSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TokenomicsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <BuySection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <StakeSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CommunitySection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>

      <ScrollToTop />
    </div>
  );
};

export default Index;

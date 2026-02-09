import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <CTASection />
    </div>
  );
};

export default Index;

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      <div style={{ opacity: introDone ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Header />
        <HeroSection />
        <AboutSection />
        <RoadmapSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

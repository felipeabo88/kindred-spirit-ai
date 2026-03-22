import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProblemSection from "@/components/ProblemSection";
import FrustrationSection from "@/components/FrustrationSection";
import BeliefSection from "@/components/BeliefSection";
import CtaSection from "@/components/CtaSection";
import ResultsSection from "@/components/ResultsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FrustrationSection />
      <HowItWorksSection />
      <ResultsSection />
      <AboutSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <WhatsAppFab />
    </>
  );
};

export default Index;

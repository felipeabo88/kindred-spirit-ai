import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatsAppFab from "@/components/WhatsAppFab";

// Lazy load below-the-fold sections
const ProblemSection = lazy(() => import("@/components/ProblemSection"));
const FrustrationSection = lazy(() => import("@/components/FrustrationSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const ResultsSection = lazy(() => import("@/components/ResultsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CtaSection = lazy(() => import("@/components/CtaSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemSection />
        <FrustrationSection />
        <HowItWorksSection />
        <ResultsSection />
        <AboutSection />
        <CtaSection />
        <FaqSection />
        <Footer />
      </Suspense>
      <WhatsAppFab />
    </>
  );
};

export default Index;

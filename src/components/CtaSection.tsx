import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const CtaSection = () => {
  return (
    <section className="gradient-dark py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="container max-w-3xl text-center space-y-8 relative">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-section-dark-foreground leading-tight">
            A sua jornada de transformação pode começar agora mesmo!
          </h2>
          <p className="text-lg text-section-dark-foreground/70 mt-6 leading-relaxed max-w-xl mx-auto">
            Agendar uma consultoria online é o primeiro passo para recuperar seu movimento e viver sem dor.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <Button variant="cta" size="xl" className="group" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Começar consultoria online
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaSection;

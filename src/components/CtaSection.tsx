import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { ArrowRight, MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const CtaSection = () => {
  return (
    <section className="gradient-cta-warm py-14 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cta-foreground/[0.06] blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cta-foreground/[0.04] blur-3xl" />
      <div className="container max-w-3xl text-center space-y-8 relative">
        <AnimateOnScroll>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-extrabold text-cta-foreground leading-tight uppercase tracking-wide">
            A sua jornada de transformação pode começar agora mesmo!
          </h2>
          <p className="text-base md:text-lg text-cta-foreground/70 mt-5 leading-relaxed max-w-xl mx-auto font-medium">
            Agendar uma reunião é o primeiro passo para recuperar seu joelho e viver sem dor.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <Button variant="whatsapp" size="xl" className="group text-base btn-shine shadow-xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 group-hover:animate-wiggle" />
              Agendar reunião agora
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaSection;

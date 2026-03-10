import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const CtaSection = () => {
  return (
    <section className="gradient-dark py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="container max-w-3xl text-center space-y-10 relative">
        <AnimateOnScroll>
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-section-dark-foreground leading-tight">
            A sua jornada de transformação pode começar agora mesmo!
          </h2>
          <p className="text-lg md:text-xl text-section-dark-foreground/60 mt-7 leading-relaxed max-w-xl mx-auto">
            Agendar uma consultoria online é o primeiro passo para recuperar seu movimento e viver sem dor.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <Button variant="cta" size="xl" className="group text-base" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Começar consultoria online
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-section-dark-foreground/40 text-sm mt-4">
            Sem compromisso • Resposta rápida via WhatsApp
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaSection;

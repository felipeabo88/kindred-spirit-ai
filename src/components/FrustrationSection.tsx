import AnimateOnScroll from "@/components/AnimateOnScroll";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

import fisioterapiaImg from "@/assets/frustrations/fisioterapia.png";
import medicosImg from "@/assets/frustrations/medicos.png";
import pilatesImg from "@/assets/frustrations/pilates.png";
import infiltracoesImg from "@/assets/frustrations/infiltracoes.png";
import suplementosImg from "@/assets/frustrations/suplementos.png";

const frustrations = [
  { label: "Fisioterapia convencional", image: fisioterapiaImg },
  { label: "Médicos especialistas", image: medicosImg },
  { label: "Pilates", image: pilatesImg },
  { label: "Infiltrações", image: infiltracoesImg },
  { label: "Suplementos e remédios milagrosos", image: suplementosImg },
];

const FrustrationSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-destructive/30" />
      <div className="container space-y-12 md:space-y-16">
        <AnimateOnScroll className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-destructive font-body bg-destructive/10 px-4 py-1.5 rounded-full">Frustração comum</span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-tight">
            Talvez você já tenha tentado várias soluções
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-2 leading-relaxed">
            Muitas pessoas passam por essas tentativas antes de encontrar o caminho certo.
          </p>
        </AnimateOnScroll>
        <div className="flex flex-col items-center gap-4 md:gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-4xl">
            {frustrations.slice(0, 3).map(({ label, image }, i) => (
              <AnimateOnScroll key={label} delay={i * 100} animation="animate-scale-in">
                <div className="group flex flex-col items-center gap-3 rounded-2xl bg-background overflow-hidden shadow-card card-interactive text-center cursor-default border border-border hover:border-destructive/30 h-full">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground leading-snug group-hover:text-destructive transition-colors duration-300 px-4 pb-4">{label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-5 w-full max-w-4xl">
            {frustrations.slice(3).map(({ label, image }, i) => (
              <AnimateOnScroll
                key={label}
                delay={(i + 3) * 100}
                animation="animate-scale-in"
                className={i === 0 ? "md:col-start-2 md:col-span-2" : "md:col-start-4 md:col-span-2"}
              >
                <div className="group flex flex-col items-center gap-3 rounded-2xl bg-background overflow-hidden shadow-card card-interactive text-center cursor-default border border-border hover:border-destructive/30 h-full">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground leading-snug group-hover:text-destructive transition-colors duration-300 px-4 pb-4">{label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <AnimateOnScroll delay={200}>
          <div className="rounded-2xl border border-border bg-background p-6 md:p-10 text-center shadow-card hover:shadow-card-hover transition-all duration-500 group/alert max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 group-hover/alert:bg-destructive/15 transition-all duration-300">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Mesmo após tentar várias alternativas, muitas pessoas continuam
              convivendo com a dor porque{" "}
              <strong className="text-foreground">a causa real do problema não foi tratada.</strong>
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={300} className="text-center">
          <Button variant="cta" size="xl" className="group text-base btn-shine" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero saber a verdadeira causa
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FrustrationSection;

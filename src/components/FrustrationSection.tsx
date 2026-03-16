import AnimateOnScroll from "@/components/AnimateOnScroll";
import { X, AlertCircle } from "lucide-react";

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
    <section className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-destructive/[0.03] blur-3xl" />
      <div className="container max-w-4xl space-y-14">
        <AnimateOnScroll className="text-center space-y-5">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Frustração comum</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Talvez você já tenha tentado várias soluções
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100} className="flex flex-wrap justify-center gap-6">
          {frustrations.map(({ label, image }, i) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 group/pill cursor-default"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-destructive/5 border border-destructive/15 flex items-center justify-center p-3 group-hover/pill:scale-110 group-hover/pill:border-destructive/40 transition-all duration-300">
                <img src={image} alt={label} className="w-full h-full object-contain" />
              </div>
              <span className="inline-flex items-center gap-2.5 rounded-full border-2 border-destructive/20 bg-destructive/5 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-destructive/50 hover:bg-destructive/10 transition-all duration-300 group-hover/pill:scale-105 group-hover/pill:-translate-y-0.5">
                <X className="h-4 w-4 text-destructive group-hover/pill:rotate-90 transition-transform duration-300" />
                {label}
              </span>
            </div>
          ))}
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="rounded-3xl border border-border bg-background p-10 md:p-12 text-center shadow-card hover:shadow-card-hover transition-all duration-500 group/alert hover:-translate-y-1">
            <div className="flex justify-center mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 group-hover/alert:bg-destructive/15 group-hover/alert:scale-110 transition-all duration-300">
                <AlertCircle className="h-7 w-7 text-destructive group-hover/alert:animate-wiggle" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Mesmo após tentar várias alternativas, muitas pessoas continuam
              convivendo com a dor porque{" "}
              <strong className="text-foreground">a causa real do problema não foi tratada.</strong>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FrustrationSection;

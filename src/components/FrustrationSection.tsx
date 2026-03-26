import AnimateOnScroll from "@/components/AnimateOnScroll";
import { AlertCircle } from "lucide-react";

import fisioterapiaImg from "@/assets/frustrations/fisioterapia.png";
import medicosImg from "@/assets/frustrations/medicos.png";
import pilatesImg from "@/assets/frustrations/pilates.png";
import infiltracoesImg from "@/assets/frustrations/infiltracoes.png";
import suplementosImg from "@/assets/frustrations/suplementos.png";

const frustrations = [
  { label: "Fisioterapia convencional", image: fisioterapiaImg, desc: "Sessões repetitivas que tratam apenas os sintomas, sem resolver a causa real da dor." },
  { label: "Médicos especialistas", image: medicosImg, desc: "Consultas que muitas vezes resultam apenas em medicamentos ou indicação cirúrgica." },
  { label: "Pilates", image: pilatesImg, desc: "Exercícios genéricos que não são direcionados para o seu problema específico." },
  { label: "Infiltrações", image: infiltracoesImg, desc: "Alívio temporário que mascara a dor sem tratar a origem do problema." },
  { label: "Suplementos e remédios milagrosos", image: suplementosImg, desc: "Promessas sem comprovação que não resolvem a causa da sua dor no joelho." },
];

const FrustrationSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-destructive/40" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-destructive/[0.03] blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-destructive/[0.05] blur-3xl" />
      <div className="container space-y-12 md:space-y-20">
        <AnimateOnScroll className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-destructive font-body bg-destructive/10 px-4 py-1.5 rounded-full">Frustração comum</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Talvez você já tenha tentado várias soluções
          </h2>
          <p className="text-muted-foreground text-lg mt-3 leading-relaxed">
            Muitas pessoas passam por essas tentativas antes de encontrar o caminho certo.
          </p>
        </AnimateOnScroll>
        <div className="flex flex-col items-center gap-4 md:gap-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 w-full max-w-4xl">
            {frustrations.slice(0, 3).map(({ label, image }, i) => (
              <AnimateOnScroll key={label} delay={i * 100} animation="animate-scale-in">
                <div className="group flex flex-col items-center gap-4 rounded-3xl bg-background overflow-hidden shadow-card card-interactive text-center cursor-default border border-border hover:border-destructive/30 h-full">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground leading-snug group-hover:text-destructive transition-colors duration-300 px-5 pb-5">{label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-7 w-full max-w-2xl">
            {frustrations.slice(3).map(({ label, image }, i) => (
              <AnimateOnScroll key={label} delay={(i + 3) * 100} animation="animate-scale-in">
                <div className="group flex flex-col items-center gap-4 rounded-3xl bg-background overflow-hidden shadow-card card-interactive text-center cursor-default border border-border hover:border-destructive/30 h-full">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground leading-snug group-hover:text-destructive transition-colors duration-300 px-5 pb-5">{label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <AnimateOnScroll delay={200}>
          <div className="rounded-3xl border border-border bg-background p-6 md:p-12 text-center shadow-card hover:shadow-card-hover transition-all duration-500 group/alert hover:-translate-y-1 max-w-3xl mx-auto">
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

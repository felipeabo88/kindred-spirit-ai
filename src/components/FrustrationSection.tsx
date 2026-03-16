import AnimateOnScroll from "@/components/AnimateOnScroll";
import { X, AlertCircle } from "lucide-react";

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
    <section className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-destructive/40" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-destructive/[0.03] blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-destructive/[0.05] blur-3xl" />
      <div className="container space-y-20">
        <AnimateOnScroll className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-destructive font-body bg-destructive/10 px-4 py-1.5 rounded-full">Frustração comum</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Talvez você já tenha tentado várias soluções
          </h2>
          <p className="text-muted-foreground text-lg mt-3 leading-relaxed">
            Muitas pessoas passam por essas tentativas antes de encontrar o caminho certo.
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7">
          {frustrations.map(({ label, image, desc }, i) => (
            <AnimateOnScroll key={label} delay={i * 150} animation="animate-slide-up">
              <div className="group relative rounded-3xl bg-background p-8 md:p-9 space-y-6 shadow-card card-interactive h-full border border-border hover:border-destructive/30">
                <span className="absolute top-5 right-6 text-7xl font-extrabold text-destructive/[0.05] font-heading select-none group-hover:text-destructive/[0.1] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 shadow-sm group-hover:scale-110 group-hover:rotate-3 group-hover:bg-destructive/15 transition-all duration-500 p-3">
                  <img src={image} alt={label} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading leading-snug group-hover:text-destructive transition-colors duration-300 flex items-center gap-2">
                  <X className="h-4 w-4 text-destructive shrink-0 group-hover:rotate-90 transition-transform duration-300" />
                  {label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-destructive/60 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll delay={200}>
          <div className="rounded-3xl border border-border bg-background p-10 md:p-12 text-center shadow-card hover:shadow-card-hover transition-all duration-500 group/alert hover:-translate-y-1 max-w-3xl mx-auto">
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

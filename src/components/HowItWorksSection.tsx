import { Video, ClipboardList, CalendarCheck, TrendingUp } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  { icon: Video, num: "1", title: "Avaliação online do movimento", desc: "Por vídeo, analisamos seus padrões de movimento e identificamos a origem da dor." },
  { icon: ClipboardList, num: "2", title: "Plano de exercícios personalizado", desc: "Você recebe um programa completo de exercícios feito para o seu caso." },
  { icon: CalendarCheck, num: "3", title: "Acompanhamento semanal", desc: "Reuniões semanais online para ajustar exercícios e monitorar progresso." },
  { icon: TrendingUp, num: "4", title: "Progressão segura até voltar às atividades", desc: "Evolução gradual para que você retome sua rotina com segurança." },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-section-alt py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="container max-w-4xl space-y-14 relative">
        <AnimateOnScroll className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Passo a passo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Como funciona a consultoria
          </h2>
        </AnimateOnScroll>
        <div className="space-y-5 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-7 top-0 bottom-0 w-0.5 gradient-primary opacity-20 rounded-full hidden md:block" />
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <AnimateOnScroll key={num} delay={i * 100}>
              <div className="flex items-start gap-5 md:gap-7 rounded-2xl bg-background p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl gradient-primary text-cta-foreground font-bold text-xl shadow-cta relative z-10">
                  {num}
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

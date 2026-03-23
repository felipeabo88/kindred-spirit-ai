import { Video, ClipboardList, CalendarCheck, TrendingUp, MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const steps = [
  { icon: Video, num: "01", title: "Avaliação online do movimento", desc: "Por vídeo, analisamos seus padrões de movimento e identificamos a origem da dor." },
  { icon: ClipboardList, num: "02", title: "Plano de exercícios personalizado", desc: "Você recebe um programa completo de exercícios feito para o seu caso." },
  { icon: CalendarCheck, num: "03", title: "Acompanhamento semanal", desc: "Reuniões semanais online para ajustar exercícios e monitorar progresso." },
  { icon: TrendingUp, num: "04", title: "Progressão segura", desc: "Evolução gradual para que você retome sua rotina com segurança." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-section-alt py-16 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container max-w-4xl space-y-20 relative">
        <AnimateOnScroll className="text-center space-y-5">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Passo a passo</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Como funciona a consultoria online?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cuide da sua saúde no conforto da sua casa, sem deslocamentos. O processo é simples:
          </p>
        </AnimateOnScroll>
        <div className="space-y-7 relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-9 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent hidden md:block" />
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <AnimateOnScroll key={num} delay={i * 160} animation="animate-slide-up">
              <div className="group flex items-start gap-7 md:gap-9 rounded-3xl bg-background p-8 md:p-10 shadow-card card-interactive relative border border-border hover:border-primary/20">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl gradient-primary text-cta-foreground font-bold text-lg shadow-cta relative z-10 font-body group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-cta-hover transition-all duration-500">
                  {num}
                </div>
                <div className="space-y-2.5 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground font-heading group-hover:text-primary transition-colors duration-300">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                {/* Hover indicator */}
                <div className="absolute top-1/2 -translate-y-1/2 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <Icon className="h-8 w-8 text-primary/20" />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center">
          <div className="rounded-3xl gradient-primary p-10 md:p-14 text-center space-y-6 shadow-elegant relative overflow-hidden group hover:shadow-cta-hover transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-cta-foreground/[0.05] blur-3xl group-hover:w-80 group-hover:h-80 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-cta-foreground/[0.03] blur-3xl" />
            <p className="text-cta-foreground text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto relative z-10">
              Durante todo o processo você terá um profissional dedicado! Disponibilidade via WhatsApp para dúvidas e motivação.
            </p>
            <Button variant="whatsapp" size="xl" className="group/btn relative z-10 btn-shine" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 group-hover/btn:animate-wiggle" />
                Agendar consultoria agora
              </a>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorksSection;

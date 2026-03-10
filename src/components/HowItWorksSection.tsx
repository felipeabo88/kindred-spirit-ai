import { Video, ClipboardList, CalendarCheck, TrendingUp, MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const steps = [
  { icon: Video, num: "01", title: "Avaliação online do movimento", desc: "Por vídeo, analisamos seus padrões de movimento e identificamos a origem da dor." },
  { icon: ClipboardList, num: "02", title: "Plano de exercícios personalizado", desc: "Você recebe um programa completo de exercícios feito para o seu caso." },
  { icon: CalendarCheck, num: "03", title: "Acompanhamento semanal", desc: "Reuniões semanais online para ajustar exercícios e monitorar progresso." },
  { icon: TrendingUp, num: "04", title: "Progressão segura até voltar às atividades", desc: "Evolução gradual para que você retome sua rotina com segurança." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-section-alt py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="container max-w-4xl space-y-16 relative">
        <AnimateOnScroll className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary font-body">Passo a passo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Como funciona a consultoria online?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Imagine a conveniência de cuidar da sua saúde no conforto da sua casa, sem deslocamentos. O processo é simples:
          </p>
        </AnimateOnScroll>
        <div className="space-y-6 relative">
          {/* Vertical line */}
          <div className="absolute left-7 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <AnimateOnScroll key={num} delay={i * 120}>
              <div className="flex items-start gap-6 md:gap-8 rounded-3xl bg-background p-7 md:p-9 shadow-card hover:shadow-card-hover transition-all duration-300 relative border border-border hover:border-primary/20">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl gradient-primary text-cta-foreground font-bold text-lg shadow-cta relative z-10 font-body">
                  {num}
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground font-heading">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center">
          <div className="rounded-3xl gradient-primary p-8 md:p-10 text-center space-y-4">
            <p className="text-cta-foreground text-lg font-medium leading-relaxed max-w-xl mx-auto">
              Durante todo o processo você terá um profissional para chamar de seu! Disponibilidade via WhatsApp para dúvidas e manutenção da motivação.
            </p>
            <Button variant="whatsapp" size="xl" className="group" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
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

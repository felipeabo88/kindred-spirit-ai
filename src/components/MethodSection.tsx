import { Button } from "@/components/ui/button";
import { Search, Settings, Dumbbell, ArrowUpRight, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  { icon: Search, title: "Avaliação de movimento", desc: "Análise completa dos seus padrões de movimento e identificação da causa da dor.", color: "from-primary to-primary" },
  { icon: Settings, title: "Correção biomecânica", desc: "Ajustes posturais e de movimento para aliviar a sobrecarga no joelho.", color: "from-primary to-primary" },
  { icon: Dumbbell, title: "Fortalecimento específico", desc: "Exercícios direcionados para estabilizar e fortalecer a articulação.", color: "from-primary to-primary" },
  { icon: ArrowUpRight, title: "Retorno ao movimento", desc: "Progressão segura até você voltar às atividades que ama.", color: "from-primary to-primary" },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container space-y-20">
        <AnimateOnScroll className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Nosso método</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Método de recuperação do joelho
          </h2>
          <p className="text-muted-foreground text-lg mt-3 leading-relaxed">
            Minha missão é te ajudar a recuperar seu movimento respeitando esses 4 pilares:
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 120} animation="animate-scale-in">
              <div className="group relative rounded-3xl bg-background p-8 md:p-9 space-y-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-3 h-full border border-border hover:border-primary/30">
                <span className="absolute top-5 right-6 text-7xl font-extrabold text-primary/[0.05] font-heading select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-cta group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-cta-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading leading-snug">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center pt-4">
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

export default MethodSection;

import { Button } from "@/components/ui/button";
import { Search, Settings, Dumbbell, ArrowUpRight, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  { icon: Search, title: "Avaliação de movimento", desc: "Análise completa dos seus padrões de movimento e identificação da causa da dor." },
  { icon: Settings, title: "Correção biomecânica", desc: "Ajustes posturais e de movimento para aliviar a sobrecarga no joelho." },
  { icon: Dumbbell, title: "Fortalecimento específico", desc: "Exercícios direcionados para estabilizar e fortalecer a articulação." },
  { icon: ArrowUpRight, title: "Retorno ao movimento", desc: "Progressão segura até você voltar às atividades que ama." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="bg-background py-20 md:py-28 relative">
      <div className="container space-y-14">
        <AnimateOnScroll className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Nosso método</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Método de recuperação do joelho
          </h2>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 100} animation="animate-fade-in">
              <div className="group relative rounded-2xl bg-section-alt p-7 space-y-5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full border border-transparent hover:border-primary/20">
                <span className="absolute top-5 right-5 text-5xl font-extrabold text-primary/[0.07]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-cta">
                  <Icon className="h-6 w-6 text-cta-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center">
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

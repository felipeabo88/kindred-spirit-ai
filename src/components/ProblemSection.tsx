import { Button } from "@/components/ui/button";
import { Footprints, AlertTriangle, Activity, Ban, XCircle, TrendingDown } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const symptoms = [
  { icon: TrendingDown, label: "Dor ao subir escadas" },
  { icon: Footprints, label: "Formigamento ou dor que desce para o pé" },
  { icon: AlertTriangle, label: "Medo de se movimentar" },
  { icon: Activity, label: "Dificuldade para correr" },
  { icon: Ban, label: "Limitação nas atividades do dia a dia" },
  { icon: XCircle, label: "Não conseguir se movimentar como antes" },
];

const ProblemSection = () => {
  return (
    <section className="bg-background py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-destructive/[0.03] blur-3xl" />
      <div className="container space-y-16">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto space-y-5">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Identifique seu problema</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Você sente dor no joelho quando:
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {symptoms.map(({ icon: Icon, label }, i) => (
            <AnimateOnScroll key={label} delay={i * 100} animation="animate-scale-in">
              <div className="group flex flex-col items-center gap-5 rounded-3xl bg-section-alt p-7 md:p-10 shadow-card card-interactive text-center cursor-default border border-border hover:border-primary/20 h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light group-hover:gradient-primary transition-all duration-500 group-hover:shadow-cta group-hover:scale-110 group-hover:-rotate-3">
                  <Icon className="h-7 w-7 text-primary group-hover:text-cta-foreground transition-colors duration-300" />
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">{label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center space-y-7 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Muitas pessoas começam a evitar movimentos por causa da dor e aos
            poucos perdem a confiança no próprio joelho.
          </p>
          <Button variant="ctaOutline" size="lg" className="btn-shine" asChild>
            <a href="#metodo">Descobrir como funciona</a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;

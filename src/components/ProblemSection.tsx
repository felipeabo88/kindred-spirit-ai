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
    <section className="bg-section-alt py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
      <div className="container space-y-12">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Identifique seu problema</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Você sente dor no joelho quando:
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {symptoms.map(({ icon: Icon, label }, i) => (
            <AnimateOnScroll key={label} delay={i * 80} animation="animate-scale-in">
              <div className="group flex flex-col items-center gap-4 rounded-2xl bg-background p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center cursor-default hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light group-hover:gradient-primary transition-all duration-300">
                  <Icon className="h-7 w-7 text-primary group-hover:text-cta-foreground transition-colors duration-300" />
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground leading-snug">{label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Muitas pessoas começam a evitar movimentos por causa da dor e aos
            poucos perdem a confiança no próprio joelho.
          </p>
          <Button variant="ctaOutline" size="lg" asChild>
            <a href="#metodo">Descobrir como funciona</a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;

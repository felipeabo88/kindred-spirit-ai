import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const myths = [
  "Parar de treinar",
  "Evitar movimentos",
  "Depender de remédios",
  "Considerar cirurgia",
];

const truths = [
  "Correção de padrões de movimento",
  "Fortalecimento específico",
  "Progressão segura de exercícios",
];

const BeliefSection = () => {
  return (
    <section <section className="bg-background py-12 md:py-20 relative overflow-hidden">>
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="container max-w-4xl space-y-16">
        <AnimateOnScroll className="text-center space-y-5 max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Mude sua perspectiva</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            A dor no joelho nem sempre significa que você precisa parar de se
            movimentar
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-7">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="group/myths space-y-7 rounded-3xl bg-section-alt p-9 md:p-10 shadow-card h-full border border-destructive/10 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 group-hover/myths:bg-destructive/15 group-hover/myths:scale-110 transition-all duration-300">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-bold text-xl text-foreground font-heading">Crenças comuns</h3>
              </div>
              <ul className="space-y-5">
                {myths.map((m) => (
                  <li key={m} className="flex items-center gap-3.5 text-muted-foreground group/item hover:translate-x-1 transition-transform duration-300 cursor-default">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 group-hover/item:bg-destructive/20 transition-colors duration-300">
                      <XCircle className="h-4 w-4 text-destructive" />
                    </span>
                    <span className="line-through text-base">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-right">
            <div className="group/truths space-y-7 rounded-3xl p-9 md:p-10 gradient-primary text-cta-foreground h-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-cta-foreground/[0.05] blur-3xl group-hover/truths:w-64 group-hover/truths:h-64 transition-all duration-700" />
              <div className="flex items-center gap-3.5 relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-foreground/20 group-hover/truths:bg-cta-foreground/30 group-hover/truths:scale-110 transition-all duration-300">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl font-heading">O caminho correto</h3>
              </div>
              <ul className="space-y-5 relative z-10">
                {truths.map((t) => (
                  <li key={t} className="flex items-center gap-3.5 group/item hover:translate-x-1 transition-transform duration-300 cursor-default">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cta-foreground/20 group-hover/item:bg-cta-foreground/30 transition-colors duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-base">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;

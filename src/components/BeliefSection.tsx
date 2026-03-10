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
    <section className="bg-background py-24 md:py-32">
      <div className="container max-w-4xl space-y-14">
        <AnimateOnScroll className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary font-body">Mude sua perspectiva</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            A dor no joelho nem sempre significa que você precisa parar de se
            movimentar
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="space-y-6 rounded-3xl bg-section-alt p-9 shadow-card h-full border border-destructive/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-bold text-xl text-foreground font-heading">Crenças comuns</h3>
              </div>
              <ul className="space-y-4">
                {myths.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10">
                      <XCircle className="h-4 w-4 text-destructive" />
                    </span>
                    <span className="line-through">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-right">
            <div className="space-y-6 rounded-3xl p-9 gradient-primary text-cta-foreground h-full shadow-cta">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cta-foreground/20">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-xl font-heading">O caminho correto</h3>
              </div>
              <ul className="space-y-4">
                {truths.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cta-foreground/20">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{t}</span>
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

import { XCircle, CheckCircle } from "lucide-react";

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
    <section className="bg-section-alt py-16 md:py-24">
      <div className="container max-w-4xl space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          A dor no joelho nem sempre significa que você precisa parar de se
          movimentar
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 rounded-xl bg-background p-6 shadow-sm">
            <h3 className="font-bold text-lg text-foreground">Crenças comuns</h3>
            <ul className="space-y-3">
              {myths.map((m) => (
                <li key={m} className="flex items-center gap-3 text-muted-foreground">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-xl bg-primary/5 p-6 border-2 border-primary/20">
            <h3 className="font-bold text-lg text-foreground">O caminho correto</h3>
            <ul className="space-y-3">
              {truths.map((t) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;

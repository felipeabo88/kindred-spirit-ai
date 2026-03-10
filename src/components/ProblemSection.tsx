import { Button } from "@/components/ui/button";
import { ArrowDown, Footprints, AlertTriangle, Activity, Ban, Frown, XCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const symptoms = [
  { icon: ArrowDown, label: "Dor ao subir escadas" },
  { icon: Footprints, label: "Formigamento ou dor que desce para o pé" },
  { icon: AlertTriangle, label: "Medo de se movimentar" },
  { icon: Activity, label: "Dificuldade para correr" },
  { icon: Ban, label: "Limitação nas atividades do dia a dia" },
  { icon: XCircle, label: "Não conseguir se movimentar como antes" },
];

const ProblemSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-24">
      <div className="container space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Você sente dor no joelho quando:
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {symptoms.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl bg-background p-6 shadow-sm text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg">
            Muitas pessoas começam a evitar movimentos por causa da dor e aos
            poucos perdem a confiança no próprio joelho.
          </p>
          <Button variant="ctaOutline" size="lg" asChild>
            <a href="#metodo">Descobrir como funciona</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

import { Button } from "@/components/ui/button";
import { Search, Settings, Dumbbell, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const steps = [
  { icon: Search, title: "Avaliação de movimento", desc: "Análise completa dos seus padrões de movimento e identificação da causa da dor." },
  { icon: Settings, title: "Correção biomecânica", desc: "Ajustes posturais e de movimento para aliviar a sobrecarga no joelho." },
  { icon: Dumbbell, title: "Fortalecimento específico", desc: "Exercícios direcionados para estabilizar e fortalecer a articulação." },
  { icon: ArrowUpRight, title: "Retorno ao movimento", desc: "Progressão segura até você voltar às atividades que ama." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="bg-background py-16 md:py-24">
      <div className="container space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Método de recuperação do joelho
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative rounded-xl bg-section-alt p-6 space-y-4"
            >
              <span className="absolute top-4 right-4 text-4xl font-extrabold text-primary/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="cta" size="xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Começar consultoria online
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;

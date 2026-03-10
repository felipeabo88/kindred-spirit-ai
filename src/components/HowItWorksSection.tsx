import { Video, ClipboardList, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  { icon: Video, num: "1", title: "Avaliação online do movimento", desc: "Por vídeo, analisamos seus padrões de movimento e identificamos a origem da dor." },
  { icon: ClipboardList, num: "2", title: "Plano de exercícios personalizado", desc: "Você recebe um programa completo de exercícios feito para o seu caso." },
  { icon: CalendarCheck, num: "3", title: "Acompanhamento semanal", desc: "Reuniões semanais online para ajustar exercícios e monitorar progresso." },
  { icon: TrendingUp, num: "4", title: "Progressão segura até voltar às atividades", desc: "Evolução gradual para que você retome sua rotina com segurança." },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-24">
      <div className="container max-w-4xl space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Como funciona a consultoria
        </h2>
        <div className="space-y-6">
          {steps.map(({ icon: Icon, num, title, desc }) => (
            <div key={num} className="flex items-start gap-5 rounded-xl bg-background p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                {num}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

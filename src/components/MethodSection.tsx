import { Button } from "@/components/ui/button";
import { TrendingDown, Footprints, AlertTriangle, Activity, Ban, XCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const symptoms = [
  { icon: TrendingDown, title: "Dor ao subir escadas", desc: "Sentir dor ao subir ou descer escadas é um dos sinais mais comuns de sobrecarga no joelho." },
  { icon: Footprints, title: "Formigamento ou dor no pé", desc: "Dor que desce para o pé pode indicar compensações musculares que afetam toda a cadeia." },
  { icon: AlertTriangle, title: "Medo de se movimentar", desc: "O receio de sentir dor faz muitas pessoas evitarem atividades que antes eram simples." },
  { icon: Activity, title: "Dificuldade para correr", desc: "A corrida se torna um desafio quando o joelho não responde como deveria." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container space-y-20">
        <AnimateOnScroll className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Identifique seu problema</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Você sente dor no joelho quando:
          </h2>
          <p className="text-muted-foreground text-lg mt-3 leading-relaxed">
            Reconheça os sinais que indicam que seu joelho precisa de atenção especializada.
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {symptoms.map(({ icon: Icon, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 150} animation="animate-slide-up">
              <div className="group relative rounded-3xl bg-background p-8 md:p-9 space-y-6 shadow-card card-interactive h-full border border-border hover:border-primary/30">
                <span className="absolute top-5 right-6 text-7xl font-extrabold text-primary/[0.05] font-heading select-none group-hover:text-primary/[0.1] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-cta group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-cta-hover transition-all duration-500">
                  <Icon className="h-7 w-7 text-cta-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading leading-snug group-hover:text-primary transition-colors duration-300">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 gradient-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center pt-4">
          <Button variant="cta" size="xl" className="group btn-shine" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero resolver minha dor
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default MethodSection;

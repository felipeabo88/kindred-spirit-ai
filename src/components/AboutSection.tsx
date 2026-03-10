import professionalImg from "@/assets/professional.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { Award, Users, Clock, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Alunos recuperados" },
  { icon: Award, value: "+8", label: "Anos de experiência" },
  { icon: Clock, value: "100%", label: "Atendimento online" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      <div className="container max-w-6xl relative">
        <div className="grid md:grid-cols-[380px_1fr] gap-14 items-center">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-secondary/60 -rotate-2" />
              <div className="absolute -inset-4 rounded-[2rem] gradient-primary opacity-[0.08] rotate-1" />
              <img
                src={professionalImg}
                alt="Foto do profissional especialista em movimento"
                className="relative rounded-3xl shadow-2xl w-full max-w-[380px] mx-auto object-cover aspect-[3/4] z-10"
                loading="lazy"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-right" className="space-y-7">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary font-body">Quem sou</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Sobre o profissional
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou especialista em treinamento baseado em <strong className="text-foreground">movimento humano</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ajudo pessoas com dor no joelho a recuperar mobilidade, força e
              confiança para voltar às suas atividades físicas através de uma{" "}
              <strong className="text-foreground">consultoria online personalizada</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha verdadeira motivação é ser um agente da transformação na vida dos meus alunos. Quero impactá-los positivamente e guiá-los na busca por uma vida sem dor e com movimento.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-5 rounded-2xl bg-section-alt shadow-card border border-border">
                  <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-foreground font-heading">{value}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{label}</p>
                </div>
              ))}
            </div>
            <Button variant="cta" size="lg" className="group mt-2" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar consultoria online
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

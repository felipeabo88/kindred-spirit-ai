import { Button } from "@/components/ui/button";
import { CheckCircle, Video, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-knee.jpg";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const benefits = [
  "Avaliação de movimento",
  "Exercícios personalizados",
  "Acompanhamento profissional online",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <AnimateOnScroll animation="animate-fade-in-left" className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2 text-sm font-bold text-cta-foreground shadow-cta">
              <Video className="h-4 w-4" />
              Consultoria 100% Online
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground">
              Recupere a confiança no seu movimento e volte a usar seu joelho{" "}
              <span className="text-gradient">sem dor</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Consultoria online especializada em dor no joelho para quem quer
              voltar a se movimentar sem depender de remédios ou cirurgia.
            </p>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full gradient-primary">
                    <CheckCircle className="h-4 w-4 text-cta-foreground" />
                  </span>
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <Button variant="cta" size="xl" className="group" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Começar consultoria online
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground pl-1">
                📍 Atendimento online para qualquer cidade.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-10 blur-2xl" />
            <img
              src={heroImg}
              alt="Profissional avaliando movimento do joelho de um aluno"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              loading="eager"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-6 rounded-2xl bg-background shadow-card p-4 flex items-center gap-3 animate-float">
              <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary">
                <CheckCircle className="h-5 w-5 text-cta-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">+500 alunos</p>
                <p className="text-xs text-muted-foreground">recuperados</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

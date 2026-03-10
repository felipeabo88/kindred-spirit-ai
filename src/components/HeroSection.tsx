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
    <section id="inicio" className="relative overflow-hidden gradient-hero pt-28 md:pt-36">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-3xl" />

      <div className="container relative pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          <AnimateOnScroll animation="animate-fade-in-left" className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary">
              <Video className="h-4 w-4" />
              Consultoria 100% Online
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight text-foreground">
              Recupere a confiança no seu movimento e volte a usar seu joelho{" "}
              <span className="text-gradient italic">sem dor</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Consultoria online especializada em dor no joelho para quem quer
              voltar a se movimentar sem depender de remédios ou cirurgia.
            </p>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full gradient-primary shrink-0">
                    <CheckCircle className="h-4 w-4 text-cta-foreground" />
                  </span>
                  <span className="font-medium text-base">{b}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-2">
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
            {/* Decorative shape behind image */}
            <div className="absolute -inset-6 rounded-[2rem] bg-secondary/50 -rotate-3 hidden lg:block" />
            <div className="absolute -inset-6 rounded-[2rem] gradient-primary opacity-[0.07] rotate-2 hidden lg:block" />
            <img
              src={heroImg}
              alt="Profissional avaliando movimento do joelho de um aluno"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] z-10"
              loading="eager"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-3 md:-left-6 rounded-2xl bg-background shadow-card-hover p-4 flex items-center gap-3 animate-float z-20">
              <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-primary">
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

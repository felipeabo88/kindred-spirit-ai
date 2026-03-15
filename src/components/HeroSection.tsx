import { Button } from "@/components/ui/button";
import { CheckCircle, Video, ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-knee.jpg";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const benefits = [
  "Avaliação completa de movimento",
  "Exercícios 100% personalizados",
  "Acompanhamento profissional online",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden gradient-hero pt-28 md:pt-40 pb-20 md:pb-32">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/40 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <AnimateOnScroll animation="animate-fade-in-left" className="space-y-10">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/15 transition-colors duration-300 cursor-default">
              <Video className="h-4 w-4 animate-bounce-subtle" />
              Consultoria 100% Online
              <Sparkles className="h-3.5 w-3.5 animate-pulse-soft" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold leading-[1.06] tracking-tight text-foreground">
              Volte a se movimentar com liberdade,{" "}
              <span className="text-gradient-animated italic">sem dor no joelho.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Conheça minha consultoria online especializada, desenvolvida para ajudar você a recuperar o movimento e reduzir a dor sem depender de remédios ou cirurgia.
            </p>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={b} className="flex items-center gap-3.5 text-foreground group/benefit cursor-default">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full gradient-primary shrink-0 shadow-cta group-hover/benefit:scale-110 group-hover/benefit:shadow-cta-hover transition-all duration-300">
                    <CheckCircle className="h-4 w-4 text-cta-foreground" />
                  </span>
                  <span className="font-semibold text-base group-hover/benefit:text-primary transition-colors duration-300">{b}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-4 pt-2">
              <Button variant="cta" size="xl" className="group text-base btn-shine animate-glow-pulse" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Começar consultoria online
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground pl-1 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                Atendimento online para qualquer cidade do Brasil
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" className="relative">
            {/* Decorative shapes behind image */}
            <div className="absolute -inset-8 rounded-[2.5rem] bg-secondary/50 -rotate-3 hidden lg:block transition-transform duration-700" />
            <div className="absolute -inset-8 rounded-[2.5rem] gradient-primary opacity-[0.08] rotate-2 hidden lg:block" />
            <img
              src={heroImg}
              alt="Profissional avaliando movimento do joelho de um aluno"
              className="relative rounded-3xl shadow-elegant w-full object-cover aspect-[4/3] z-10 hover:scale-[1.02] transition-transform duration-700"
              loading="eager"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 rounded-2xl bg-background shadow-card-hover p-5 flex items-center gap-4 animate-float z-20 border border-border hover:shadow-elegant transition-shadow duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary shadow-cta">
                <CheckCircle className="h-5 w-5 text-cta-foreground" />
              </div>
              <div>
                <p className="text-base font-extrabold text-foreground">+500 alunos</p>
                <p className="text-sm text-muted-foreground">recuperados</p>
              </div>
            </div>
            {/* Second floating badge */}
            <div className="absolute -top-3 -right-3 md:-right-6 rounded-2xl bg-background shadow-card-hover px-5 py-3 animate-float z-20 border border-border hover:shadow-elegant transition-shadow duration-300" style={{ animationDelay: "1.5s" }}>
              <p className="text-sm font-bold text-primary">⭐ 4.9/5</p>
              <p className="text-xs text-muted-foreground">avaliações</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

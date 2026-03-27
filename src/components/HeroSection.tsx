import { Button } from "@/components/ui/button";
import { Video, ArrowRight, Sparkles, ScanSearch, Dumbbell, MessageCircle, type LucideIcon } from "lucide-react";
import heroImg from "@/assets/hero-knee.jpg";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const benefits: { text: string; icon: LucideIcon }[] = [
  { text: "Avaliação completa do movimento para identificar a causa da dor", icon: ScanSearch },
  { text: "Exercícios personalizados para você", icon: Dumbbell },
  { text: "Suporte profissional online pelo WhatsApp", icon: MessageCircle },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden gradient-hero pt-28 md:pt-44 pb-16 md:pb-32">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/40 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <AnimateOnScroll animation="animate-fade-in-left" className="space-y-8">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/20">
              <Video className="h-4 w-4 animate-bounce-subtle" />
              Consultoria 100% Online
              <Sparkles className="h-3.5 w-3.5 animate-pulse-soft" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-foreground">
              Volte a se movimentar com liberdade,{" "}
              <span className="text-gradient-animated italic">sem dor no joelho.</span>
            </h1>
            <div className="space-y-3 max-w-lg">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Se você já tentou de tudo e ainda não conseguiu melhorar dessas dores, conheça minha <strong className="text-foreground font-semibold">consultoria online especializada</strong>.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Um método focado em ajudar você a voltar a se movimentar <strong className="text-foreground font-semibold">sem depender de remédios ou cirurgia</strong>.
              </p>
            </div>
            <ul className="space-y-3.5">
              {benefits.map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center gap-3 text-foreground group/benefit cursor-default">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full gradient-primary shrink-0 shadow-cta group-hover/benefit:scale-110 transition-all duration-300">
                    <Icon className="h-4 w-4 text-cta-foreground" />
                  </span>
                  <span className="font-medium text-sm sm:text-base group-hover/benefit:text-primary transition-colors duration-300">{text}</span>
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <Button variant="cta" size="xl" className="group text-base btn-shine animate-glow-pulse" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Quero voltar a me movimentar
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-secondary/50 -rotate-3 hidden lg:block" />
            <div className="absolute -inset-6 rounded-[2.5rem] gradient-primary opacity-[0.08] rotate-2 hidden lg:block" />
            <img
              src={heroImg}
              alt="Profissional avaliando movimento do joelho de um aluno"
              className="relative rounded-3xl shadow-elegant w-full object-cover aspect-[4/3] z-10 hover:scale-[1.02] transition-transform duration-700"
              loading="eager"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

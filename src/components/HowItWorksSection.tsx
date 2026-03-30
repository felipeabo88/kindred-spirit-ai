import { MessageCircle, Video, ClipboardList, Users, TrendingUp } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import step01 from "@/assets/steps/step-01.png";
import step02 from "@/assets/steps/step-02.png";
import step03 from "@/assets/steps/step-03.png";
import step04 from "@/assets/steps/step-04.png";

const steps = [
  {
    num: "01",
    title: "Avaliação online do movimento",
    desc: "Por vídeo, analisamos seus padrões de movimento e identificamos a origem da dor.",
    img: step01,
    icon: Video,
    accent: "from-primary to-primary-glow",
  },
  {
    num: "02",
    title: "Plano de exercícios personalizado",
    desc: "Você recebe um programa completo de exercícios feito para o seu caso.",
    img: step02,
    icon: ClipboardList,
    accent: "from-primary-glow to-primary",
  },
  {
    num: "03",
    title: "Acompanhamento semanal",
    desc: "Reuniões semanais online para ajustar exercícios e monitorar progresso.",
    img: step03,
    icon: Users,
    accent: "from-primary to-primary-glow",
  },
  {
    num: "04",
    title: "Progressão segura",
    desc: "Evolução gradual para que você retome sua rotina com segurança.",
    img: step04,
    icon: TrendingUp,
    accent: "from-primary-glow to-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" <section id="como-funciona" className="bg-section-alt py-12 md:py-20 relative overflow-hidden">>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl animate-pulse-soft" />
      <div className="container max-w-4xl space-y-12 md:space-y-16 relative">
        <AnimateOnScroll className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-tight tracking-wide">
            Como funciona a minha mentoria online
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cuide da sua saúde em qualquer lugar de acordo com a sua rotina. O processo é simples:
          </p>
        </AnimateOnScroll>

        <div className="space-y-5 relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 md:left-9 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent hidden md:block" />

          {steps.map(({ num, title, desc, img, icon: Icon, accent }, i) => (
            <AnimateOnScroll key={num} delay={i * 140} animation="animate-slide-up">
              <div className="group flex items-start gap-4 md:gap-6 rounded-2xl bg-background p-5 md:p-7 shadow-card card-interactive relative border border-border hover:border-primary/20 overflow-hidden transition-all duration-300">
                {/* Step number badge with icon */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0 relative z-10">
                  <div className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-cta-foreground font-bold text-base shadow-cta font-body group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {num}
                  </div>
                  <Icon className="h-5 w-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />
                </div>

                {/* Text content */}
                <div className="space-y-1.5 pt-0.5 flex-1 relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors duration-300 leading-snug">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-[0.938rem]">
                    {desc}
                  </p>
                </div>

                {/* Illustration */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <img src={img} alt={title} loading="lazy" width={80} height={80} className="w-full h-full object-contain drop-shadow-md" />
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center">
          <div className="rounded-2xl gradient-primary p-7 md:p-12 text-center space-y-5 shadow-elegant relative overflow-hidden group hover:shadow-cta-hover transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-cta-foreground/[0.05] blur-3xl group-hover:w-80 group-hover:h-80 transition-all duration-700" />
            <p className="text-cta-foreground text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto relative z-10">
              Durante todo o processo você terá um profissional dedicado!
            </p>
            <Button variant="whatsapp" size="xl" className="group/btn relative z-10 btn-shine" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 group-hover/btn:animate-wiggle" />
                Quero saber mais
              </a>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorksSection;

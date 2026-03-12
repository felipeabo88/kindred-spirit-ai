import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Tinha dor no joelho há 3 anos e já tinha tentado de tudo. Com a consultoria online, em 2 meses voltei a correr sem dor. Recomendo demais!",
    avatar: "CM",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Ana P.",
    text: "Achei que seria impossível me recuperar sem ir presencialmente, mas o acompanhamento online foi incrível. Hoje subo escadas sem pensar duas vezes.",
    avatar: "AP",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Roberto S.",
    text: "A consultoria me deu confiança para voltar a treinar. O método é muito claro e os exercícios são progressivos. Resultado real!",
    avatar: "RS",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Fernanda L.",
    text: "Depois de uma cirurgia no joelho, encontrei o Felipe e foi a melhor decisão. Profissional atencioso, com método sério. Estou 100% recuperada!",
    avatar: "FL",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "João V.",
    text: "Excelente profissional! Me ajudou a entender minha dor e tratar de forma progressiva. Hoje treino pesado sem nenhum desconforto.",
    avatar: "JV",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Mariana C.",
    text: "O atendimento online superou minhas expectativas. Felipe é extremamente dedicado e competente. Meus joelhos nunca estiveram tão bem!",
    avatar: "MC",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
  },
];

const ResultsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section id="depoimentos" className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl" />

      <div className="container space-y-12">
        {/* Header */}
        <AnimateOnScroll className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">
            Prova social
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Depoimentos
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja o que nossos alunos dizem sobre a transformação que viveram.
          </p>
        </AnimateOnScroll>

        {/* Avatar strip */}
        <AnimateOnScroll className="flex justify-center items-center gap-[-8px]">
          <div className="flex -space-x-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="relative h-14 w-14 md:h-16 md:w-16 rounded-full border-[3px] border-background shadow-card overflow-hidden transition-transform duration-300 hover:scale-110 hover:z-10"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <span className="ml-4 text-sm text-muted-foreground font-medium">
            +{testimonials.length} alunos transformados
          </span>
        </AnimateOnScroll>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={prev}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <AnimateOnScroll delay={i * 100} animation="animate-slide-up">
                    <div className="group/card rounded-2xl bg-background p-7 md:p-8 space-y-5 shadow-card card-interactive h-full border border-border hover:border-primary/20 transition-all duration-300">
                      <Quote className="h-7 w-7 text-primary/10 group-hover/card:text-primary/20 transition-colors duration-300" />
                      <p className="text-foreground leading-relaxed text-[15px]">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-3 pt-3 border-t border-border group-hover/card:border-primary/15 transition-colors duration-300">
                        <div className="h-11 w-11 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                          <img
                            src={t.photo}
                            alt={t.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">Aluno(a)</p>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 pt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

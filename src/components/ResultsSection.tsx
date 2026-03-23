import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import client1 from "@/assets/clients/client-1.png";
import client2 from "@/assets/clients/client-2.png";
import client3 from "@/assets/clients/client-3.png";
import client4 from "@/assets/clients/client-4.png";
import client5 from "@/assets/clients/client-5.png";
import client6 from "@/assets/clients/client-6.png";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Tinha dor no joelho há 3 anos e já tinha tentado de tudo. Com a consultoria online, em 2 meses voltei a correr sem dor. Recomendo demais!",
    photo: client1,
    stars: 5,
  },
  {
    name: "Ana P.",
    text: "Achei que seria impossível me recuperar sem ir presencialmente, mas o acompanhamento online foi incrível. Hoje subo escadas sem pensar duas vezes.",
    photo: client2,
    stars: 5,
  },
  {
    name: "Roberto S.",
    text: "A consultoria me deu confiança para voltar a treinar. O método é muito claro e os exercícios são progressivos. Resultado real!",
    photo: client3,
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text: "Depois de uma cirurgia no joelho, encontrei o Felipe e foi a melhor decisão. Profissional atencioso, com método sério. Estou 100% recuperada!",
    photo: client4,
    stars: 5,
  },
  {
    name: "João V.",
    text: "Excelente profissional! Me ajudou a entender minha dor e tratar de forma progressiva. Hoje treino pesado sem nenhum desconforto.",
    photo: client5,
    stars: 5,
  },
  {
    name: "Mariana C.",
    text: "O atendimento online superou minhas expectativas. Felipe é extremamente dedicado e competente. Meus joelhos nunca estiveram tão bem!",
    photo: client6,
    stars: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ResultsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section id="depoimentos" className="bg-section-alt py-16 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl" />

      <div className="container space-y-14">
        {/* Header */}
        <AnimateOnScroll className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">
            Depoimentos reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Pessoas que recuperaram o{" "}
            <span className="text-gradient">movimento do joelho</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de quem deixou a dor para trás e voltou a viver com liberdade.
          </p>
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
                  <AnimateOnScroll delay={i * 120} animation="animate-slide-up">
                    <div className="group/card rounded-2xl bg-background p-7 md:p-8 space-y-5 shadow-card card-interactive h-full border border-border hover:border-primary/20 transition-all duration-300">
                      <StarRating count={t.stars} />

                      <p className="text-foreground leading-relaxed text-[15px] min-h-[80px]">
                        "{t.text}"
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-border group-hover/card:border-primary/15 transition-colors duration-300">
                        <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 shadow-sm">
                          <img
                            src={t.photo}
                            alt={t.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm">{t.name}</p>
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

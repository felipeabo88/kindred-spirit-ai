import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const rawTestimonials = [
  {
    name: "Carlos M.",
    text: "Tinha dor no joelho há 3 anos e já tinha tentado de tudo. Com a consultoria online, em 2 meses voltei a correr sem dor. Recomendo demais!",
    stars: 5,
    timeAgo: "2 meses atrás",
    avatar: "CM",
  },
  {
    name: "Ana P.",
    text: "Achei que seria impossível me recuperar sem ir presencialmente, mas o acompanhamento online foi incrível. Hoje subo escadas sem pensar duas vezes.",
    stars: 5,
    timeAgo: "1 mês atrás",
    avatar: "AP",
  },
  {
    name: "Roberto S.",
    text: "A consultoria me deu confiança para voltar a treinar. O método é muito claro e os exercícios são progressivos. Resultado real!",
    stars: 5,
    timeAgo: "3 semanas atrás",
    avatar: "RS",
  },
  {
    name: "Fernanda L.",
    text: "Depois de uma cirurgia no joelho, encontrei o Felipe e foi a melhor decisão. Profissional atencioso, com método sério. Estou 100% recuperada!",
    stars: 5,
    timeAgo: "1 mês atrás",
    avatar: "FL",
  },
  {
    name: "João V.",
    text: "Excelente profissional! Me ajudou a entender minha dor e tratar de forma progressiva. Hoje treino pesado sem nenhum desconforto.",
    stars: 5,
    timeAgo: "2 semanas atrás",
    avatar: "JV",
  },
  {
    name: "Mariana C.",
    text: "O atendimento online superou minhas expectativas. Felipe é extremamente dedicado e competente. Meus joelhos nunca estiveram tão bem!",
    stars: 5,
    timeAgo: "3 meses atrás",
    avatar: "MC",
  },
];

// Sort: 5-star first, then by text length (longer = more detailed = featured)
const FEATURED_MIN_LENGTH = 100;
const testimonials = [...rawTestimonials]
  .sort((a, b) => {
    if (b.stars !== a.stars) return b.stars - a.stars;
    return b.text.length - a.text.length;
  })
  .map((t) => ({ ...t, featured: t.stars === 5 && t.text.length >= FEATURED_MIN_LENGTH }));

const GOOGLE_LOGO = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-label="Google">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

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

  const avgRating = (testimonials.reduce((a, t) => a + t.stars, 0) / testimonials.length).toFixed(1);

  return (
    <section id="depoimentos" className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl" />

      <div className="container space-y-16">
        {/* Header */}
        <AnimateOnScroll className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">
            Avaliações reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            O que nossos clientes dizem
          </h2>
          {/* Google summary badge */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex items-center gap-2 bg-background rounded-full px-5 py-2.5 shadow-card border border-border">
              {GOOGLE_LOGO}
              <span className="font-bold text-foreground text-lg">{avgRating}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-1">({testimonials.length} avaliações)</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation buttons */}
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

          {/* Cards container */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <AnimateOnScroll delay={i * 100} animation="animate-slide-up">
                    <div className="group/card rounded-2xl bg-background p-7 md:p-8 space-y-5 shadow-card card-interactive h-full relative border border-border hover:border-primary/20">
                      {/* Google icon */}
                      <div className="absolute top-6 right-6 opacity-60 group-hover/card:opacity-100 transition-opacity duration-300">
                        {GOOGLE_LOGO}
                      </div>
                      {/* Quote */}
                      <Quote className="h-8 w-8 text-primary/10 group-hover/card:text-primary/20 transition-colors duration-300" />
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.stars }).map((_, j) => (
                          <Star
                            key={j}
                            className="h-4.5 w-4.5 fill-[#FBBC05] text-[#FBBC05] group-hover/card:scale-110 transition-transform duration-300"
                            style={{ transitionDelay: `${j * 40}ms` }}
                          />
                        ))}
                      </div>
                      {/* Text */}
                      <p className="text-foreground leading-relaxed text-[15px] line-clamp-5">
                        "{t.text}"
                      </p>
                      {/* Author */}
                      <div className="flex items-center gap-3 pt-3 border-t border-border group-hover/card:border-primary/15 transition-colors duration-300">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                          {t.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.timeAgo}</p>
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

        {/* CTA to Google */}
        <AnimateOnScroll className="text-center">
          <a
            href="https://www.google.com/search?q=felipe+augusto+treino+personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
          >
            {GOOGLE_LOGO}
            Ver todas as avaliações no Google
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ResultsSection;

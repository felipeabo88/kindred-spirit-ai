import { Star, Quote } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Tinha dor no joelho há 3 anos e já tinha tentado de tudo. Com a consultoria online, em 2 meses voltei a correr sem dor. Recomendo demais!",
    stars: 5,
    role: "Corredor amador",
  },
  {
    name: "Ana P.",
    text: "Achei que seria impossível me recuperar sem ir presencialmente, mas o acompanhamento online foi incrível. Hoje subo escadas sem pensar duas vezes.",
    stars: 5,
    role: "Professora",
  },
  {
    name: "Roberto S.",
    text: "A consultoria me deu confiança para voltar a treinar. O método é muito claro e os exercícios são progressivos. Resultado real!",
    stars: 5,
    role: "Praticante de musculação",
  },
];

const ResultsSection = () => {
  return (
    <section id="depoimentos" className="bg-section-alt py-24 md:py-32">
      <div className="container space-y-16">
        <AnimateOnScroll className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary font-body">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Pessoas que recuperaram seus joelhos
          </h2>
          <p className="text-lg text-muted-foreground">
            Melhor do que eu falar sobre mim — veja o que estão falando:
          </p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 120}>
              <div className="rounded-3xl bg-background p-8 space-y-5 shadow-card hover:shadow-card-hover transition-all duration-300 h-full relative border border-border hover:border-primary/20">
                <Quote className="absolute top-7 right-7 h-10 w-10 text-primary/[0.08]" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic text-[15px]">"{t.text}"</p>
                <div className="pt-3 border-t border-border">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

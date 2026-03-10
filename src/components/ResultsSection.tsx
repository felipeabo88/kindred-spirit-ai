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
    <section className="bg-background py-20 md:py-28">
      <div className="container space-y-14">
        <AnimateOnScroll className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Resultados reais</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Pessoas que recuperaram seus joelhos
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 100}>
              <div className="rounded-2xl bg-section-alt p-7 space-y-5 shadow-card hover:shadow-card-hover transition-all duration-300 h-full relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="pt-2 border-t border-border">
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

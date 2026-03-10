import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Tinha dor no joelho há 3 anos e já tinha tentado de tudo. Com a consultoria online, em 2 meses voltei a correr sem dor. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Ana P.",
    text: "Achei que seria impossível me recuperar sem ir presencialmente, mas o acompanhamento online foi incrível. Hoje subo escadas sem pensar duas vezes.",
    stars: 5,
  },
  {
    name: "Roberto S.",
    text: "A consultoria me deu confiança para voltar a treinar. O método é muito claro e os exercícios são progressivos. Resultado real!",
    stars: 5,
  },
];

const ResultsSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Pessoas que recuperaram seus joelhos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl bg-section-alt p-6 space-y-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{t.text}"</p>
              <p className="font-bold text-sm text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

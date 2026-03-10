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
    <section id="depoimentos" className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="container space-y-20">
        <AnimateOnScroll className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Pessoas que recuperaram seus joelhos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Melhor do que eu falar sobre mim — veja o que estão falando:
          </p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 120}>
              <div className="rounded-3xl bg-background p-9 space-y-6 shadow-card hover:shadow-card-hover transition-all duration-400 h-full relative border border-border hover:border-primary/20 hover:-translate-y-2">
                <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/[0.07]" />
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic text-[15px]">"{t.text}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground text-base">{t.name}</p>
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

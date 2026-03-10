import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const faqs = [
  {
    q: "Funciona mesmo sendo online?",
    a: "Sim! A consultoria online permite avaliar seu movimento por vídeo, prescrever exercícios personalizados e acompanhar sua evolução semanalmente. Muitos dos meus melhores resultados vieram de atendimentos 100% online.",
  },
  {
    q: "Posso começar mesmo com dor?",
    a: "Sim. O programa começa com exercícios leves e seguros, respeitando o nível de dor atual. A progressão é gradual e monitorada.",
  },
  {
    q: "Quanto tempo para melhorar?",
    a: "Os primeiros resultados costumam aparecer nas primeiras semanas. O tempo total depende do caso, mas em média de 8 a 12 semanas há uma melhora significativa.",
  },
  {
    q: "Preciso ir à academia?",
    a: "Não necessariamente. Os exercícios podem ser adaptados para fazer em casa com pouco ou nenhum equipamento. Se tiver acesso a academia, aproveitamos os recursos disponíveis.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-3xl space-y-12">
        <AnimateOnScroll className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Dúvidas</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl bg-section-alt px-6 border-none shadow-card data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FaqSection;

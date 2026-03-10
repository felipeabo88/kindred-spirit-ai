import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="bg-background py-16 md:py-24">
      <div className="container max-w-3xl space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl bg-section-alt px-6 border-none"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { MessageCircle } from "lucide-react";

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
    <section id="duvidas" className="bg-background py-24 md:py-32">
      <div className="container max-w-3xl space-y-14">
        <AnimateOnScroll className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary font-body">Dúvidas</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Dúvidas frequentes
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl bg-section-alt px-7 border border-border data-[state=open]:shadow-card-hover data-[state=open]:border-primary/20 transition-all"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-foreground hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-[15px]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200} className="text-center space-y-3">
          <p className="text-muted-foreground text-lg">Ainda tem dúvidas?</p>
          <Button variant="cta" size="lg" asChild className="gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Fale conosco pelo WhatsApp
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FaqSection;

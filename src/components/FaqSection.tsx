import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { MessageCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Funciona mesmo sendo online?",
    a: "Sim. A consultoria online permite avaliar seu movimento por vídeo, identificar padrões que podem estar contribuindo para a dor e prescrever exercícios personalizados para o seu caso. O acompanhamento é feito de forma próxima e individual, com ajustes conforme sua evolução.",
  },
  {
    q: "Posso começar mesmo sentindo dor?",
    a: "Sim. O programa começa com exercícios seguros e adaptados ao seu nível atual de dor e a sua realidade. A progressão é gradual, respeitando os limites do seu corpo e priorizando movimentos que ajudam na recuperação.",
  },
  {
    q: "Quanto tempo leva para começar a melhorar?",
    a: "Muitas pessoas já percebem mudanças nas primeiras semanas. O tempo varia de acordo com cada caso, mas em média entre 2 e 12 semanas é possível observar uma melhora significativa na dor e no movimento.",
  },
  {
    q: "Preciso ir à academia?",
    a: "Não necessariamente. Os exercícios podem ser adaptados para serem feitos em casa com pouco ou nenhum equipamento. Caso você tenha acesso a academia, podemos aproveitar melhor os recursos disponíveis.",
  },
  {
    q: "E se eu já tentei outros tratamentos e não resolveu?",
    a: "Isso é mais comum do que parece. Muitas vezes a dor persiste porque a causa real do problema não foi identificada. O foco da consultoria é justamente avaliar o movimento para entender o que está contribuindo para a dor e trabalhar na correção disso.",
  },
  {
    q: "Como funciona o acompanhamento?",
    a: "Após iniciar a consultoria, você passa por uma série de avaliações para entender melhor seu movimento e identificar possíveis causas das dores ou limitações.\n\nCom base nessas avaliações, você recebe um plano de exercícios personalizado por meio de um aplicativo, totalmente adaptado ao seu caso.\n\nO acompanhamento é contínuo, com ajustes conforme sua evolução e suporte direto para esclarecer dúvidas ao longo do processo.",
  },
  {
    q: "Esse método serve para o meu caso?",
    a: "Cada pessoa tem uma história e um nível de dor diferente. Por isso o processo começa com uma avaliação do movimento para entender o seu caso específico e definir os exercícios mais adequados para você.",
  },
  {
    q: "A consultoria é apenas para quem tem dor no joelho?",
    a: "Não. Embora muitas pessoas procurem a consultoria por causa de dores no joelho, também acompanho alunos que desejam outros objetivos, como emagrecimento, ganho de massa muscular, melhora da performance ou condicionamento físico.",
  },
  {
    q: "Depois que eu melhorar da dor, posso treinar para outros objetivos?",
    a: "Sim. O objetivo da consultoria é justamente ajudar você a recuperar o movimento e criar uma base segura para evoluir no treinamento. Depois que a dor deixa de ser um problema, é possível direcionar os treinos para objetivos como performance, estética ou condicionamento físico.",
  },
];

const FaqSection = () => {
  return (
    <section id="duvidas" className="bg-background py-16 md:py-36 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="container max-w-3xl space-y-16">
        <AnimateOnScroll className="text-center space-y-5">
          
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Dúvidas frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ainda tem dúvidas sobre como funciona a consultoria?<br />
            Veja algumas respostas para as perguntas mais comuns.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl bg-section-alt px-8 border border-border data-[state=open]:shadow-card-hover data-[state=open]:border-primary/20 transition-all duration-500 hover:border-primary/10 hover:-translate-y-0.5 group/faq"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-foreground hover:no-underline py-7 gap-4">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 group-hover/faq:rotate-12 transition-transform duration-300" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-7 text-[15px] pl-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200} className="text-center space-y-4">
          <p className="text-muted-foreground text-lg">Se ainda tiver alguma dúvida, clique no botão abaixo e fale diretamente comigo.</p>
          <Button variant="cta" size="lg" asChild className="gap-2 btn-shine group">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 group-hover:animate-wiggle" />
              Tire sua dúvida pessoalmente comigo
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FaqSection;

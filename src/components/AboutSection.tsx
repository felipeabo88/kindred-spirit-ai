import aboutPhoto1 from "@/assets/about/foto05.png";
import aboutPhoto2 from "@/assets/about/judo.jpg";
import aboutPhoto3 from "@/assets/about/tocha.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { X, AlertCircle, ArrowRight, Stethoscope, Pill, Dumbbell as PilatesIcon, Syringe } from "lucide-react";

const attempts = [
  { icon: Stethoscope, text: "Médicos especialistas" },
  { icon: PilatesIcon, text: "Fisioterapia convencional" },
  { icon: PilatesIcon, text: "Pilates" },
  { icon: Syringe, text: "Infiltrações" },
  { icon: Pill, text: "Suplementos como colágeno" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-24 md:py-36 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl animate-pulse-soft" />
      <div className="container max-w-6xl relative">
        <div className="grid md:grid-cols-[400px_1fr] gap-16 items-start">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="relative md:sticky md:top-28 flex flex-col gap-4">
                <img src={aboutPhoto1} alt="Pessoa com dor no joelho" className="rounded-2xl shadow-card w-full max-w-[400px] mx-auto object-cover" loading="lazy" />
                <img src={aboutPhoto2} alt="Tentativas de tratamento" className="rounded-2xl shadow-card w-full max-w-[400px] mx-auto object-cover" loading="lazy" />
                <img src={aboutPhoto3} alt="Superação da dor" className="rounded-2xl shadow-card w-full max-w-[400px] mx-auto object-cover" loading="lazy" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" className="space-y-6">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">
              Frustração comum
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight font-heading">
              Talvez você já tenha tentado de tudo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              Muitas pessoas passam por uma verdadeira{" "}
              <strong className="text-foreground font-semibold">jornada de frustração</strong> antes de encontrar a solução certa.
            </p>

            {/* Attempted solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              {attempts.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-section-alt border border-border group hover:border-destructive/30 transition-all duration-300"
                >
                  <X className="h-4 w-4 text-destructive shrink-0 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-sm text-foreground font-medium leading-snug">{text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-[0.938rem] text-muted-foreground leading-[1.8] font-body">
              <p>
                Você já foi ao médico, fez exames, tentou fisioterapia, pilates, infiltrações e até suplementos como colágeno — mas a{" "}
                <strong className="text-foreground font-semibold">dor continua voltando</strong>.
              </p>
              <p>
                Isso acontece porque a maioria dos tratamentos trata apenas os{" "}
                <strong className="text-foreground font-semibold">sintomas</strong>, sem investigar a verdadeira causa do problema.
              </p>
              <p>
                Enquanto a raiz da dor não for identificada e corrigida, o ciclo de frustração se repete.
              </p>
              <p>
                Você merece um acompanhamento que vá além do alívio temporário e te devolva a{" "}
                <strong className="text-foreground font-semibold">confiança no seu próprio movimento</strong>.
              </p>
            </div>

            {/* Alert card */}
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>A causa real do problema não foi tratada.</strong> Por isso a dor persiste mesmo após várias tentativas.
              </p>
            </div>

            <Button variant="cta" size="lg" className="group mt-3 btn-shine" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero uma abordagem diferente
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

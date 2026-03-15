import aboutPhoto1 from "@/assets/about/foto05.png";
import aboutPhoto2 from "@/assets/about/judo.jpg";
import aboutPhoto3 from "@/assets/about/tocha.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { Award, Users, Clock, ArrowRight, Heart, GraduationCap, Globe, Dumbbell } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Alunos recuperados" },
  { icon: Award, value: "+8", label: "Anos de experiência" },
  { icon: Clock, value: "100%", label: "Atendimento online" },
];

const credentials = [
  { icon: GraduationCap, text: "Graduado em Educação Física — UFRN" },
  { icon: Award, text: "Pós-graduação em Fisiologia do Exercício" },
  { icon: Dumbbell, text: "Certificação internacional NKT" },
  { icon: Globe, text: "Alunos em 5+ países pelo mundo" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-24 md:py-36 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl animate-pulse-soft" />
      <div className="container max-w-6xl relative">
        <div className="grid md:grid-cols-[400px_1fr] gap-16 items-start">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="relative group/img md:sticky md:top-28">
              <div className="absolute -inset-5 rounded-[2rem] bg-secondary/60 -rotate-2 group-hover/img:-rotate-3 transition-transform duration-700" />
              <div className="absolute -inset-5 rounded-[2rem] gradient-primary opacity-[0.08] rotate-1 group-hover/img:rotate-2 transition-transform duration-700" />
              <img
                src={professionalImg}
                alt="Felipe Augusto — Especialista em reabilitação e movimento humano"
                className="relative rounded-3xl shadow-elegant w-full max-w-[400px] mx-auto object-cover aspect-[3/4] z-10 group-hover/img:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="relative z-10 mt-6 flex flex-col gap-4">
                <img src={aboutPhoto1} alt="Felipe Augusto" className="rounded-2xl shadow-card w-full max-w-[400px] mx-auto object-cover" loading="lazy" />
                <img src={aboutPhoto2} alt="Felipe Augusto no judô" className="rounded-2xl shadow-card w-full max-w-[400px] mx-auto object-cover" loading="lazy" />
                <img src={aboutPhoto3} alt="Felipe Augusto carregando a tocha olímpica Rio 2016" className="rounded-2xl shadow-card w-full max-w-[400px] mx-auto object-cover" loading="lazy" />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" className="space-y-6">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">
              Quem sou
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight font-heading">
              Felipe Augusto
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              Profissional de Educação Física, faixa preta de judô e especialista em{" "}
              <strong className="text-foreground font-semibold">reabilitação e movimento humano</strong>.
            </p>

            {/* Credentials highlight strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              {credentials.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-section-alt border border-border"
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium leading-snug">{text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-[0.938rem] text-muted-foreground leading-[1.8] font-body">
              <p>
                Me chamo Felipe Augusto, sou Profissional de Educação Física, faixa preta de judô e especialista em{" "}
                <strong className="text-foreground font-semibold">reabilitação e movimento humano</strong>.
              </p>
              <p>
                Sou graduado em Educação Física pela UFRN, com pós-graduação em Fisiologia do Exercício, atualmente estudante de Fisioterapia e certificado internacionalmente em{" "}
                <strong className="text-foreground font-semibold">NeuroKinetic Therapy (NKT)</strong>.
              </p>
              <p>
                Fui atleta de judô por 14 anos, conquistando diversos títulos e alcançando a faixa preta na modalidade.
              </p>
              <p>
                Hoje ajudo pessoas com dores e limitações de movimento, especialmente no joelho, a recuperarem mobilidade e confiança no movimento.
              </p>
              <p>
                Através da <strong className="text-foreground font-semibold">consultoria online</strong>, acompanho alunos de diversas regiões do Brasil e também de países como Estados Unidos, Alemanha, Holanda, Japão e Argentina.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="group/stat text-center p-5 rounded-2xl bg-section-alt shadow-card border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 cursor-default">
                  <Icon className="h-5 w-5 text-primary mx-auto mb-2.5 group-hover/stat:scale-125 group-hover/stat:rotate-6 transition-all duration-300" />
                  <p className="text-2xl md:text-3xl font-extrabold text-foreground font-heading">{value}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-1.5">{label}</p>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="group mt-3 btn-shine" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar consultoria online
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

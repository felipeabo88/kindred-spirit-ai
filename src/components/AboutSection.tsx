import aboutPhoto1 from "@/assets/about/foto05.png";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { ArrowRight, GraduationCap, Award, Globe } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Graduado em Educação Física — UFRN" },
  { icon: Award, label: "Pós-graduação em Fisiologia do Exercício" },
  { icon: Award, label: "Certificação internacional NKT" },
  { icon: Globe, label: "Alunos em 5+ países pelo mundo" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-16 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      <div className="container max-w-5xl relative">
        <div className="grid md:grid-cols-[320px_1fr] gap-10 md:gap-14 items-start">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="relative md:sticky md:top-28 flex flex-col gap-4">
              <div className="relative w-full max-w-[400px] mx-auto">
                <div className="absolute -inset-3 rounded-[2rem] bg-primary/8 blur-xl" />
                <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
                  <img
                    src={aboutPhoto1}
                    alt="Felipe Augusto - Profissional de Educação Física"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" className="space-y-6">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">
              Sobre
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-tight font-heading">
              Felipe Augusto
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Me chamo Felipe Augusto, sou Profissional de Educação Física, faixa preta de judô e especialista em reabilitação e movimento humano.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {credentials.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-section-alt border border-border"
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium leading-snug">{label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-base text-muted-foreground leading-[1.85] font-body">
              <p>
                Sou graduado em Educação Física pela UFRN, com pós-graduação em Fisiologia do Exercício, atualmente estudante de Fisioterapia e certificado internacionalmente em <strong className="text-foreground font-semibold">NeuroKinetic Therapy (NKT)</strong>.
              </p>
              <p>
                Fui atleta de judô por <strong className="text-foreground font-semibold">14 anos</strong>, conquistando diversos títulos e alcançando a faixa preta na modalidade.
              </p>
              <p>
                Hoje ajudo pessoas com dores e limitações de movimento, especialmente no joelho, a recuperarem <strong className="text-foreground font-semibold">mobilidade e confiança no movimento</strong>.
              </p>
              <p>
                Através da consultoria online, acompanho alunos de diversas regiões do Brasil e também de países como <strong className="text-foreground font-semibold">Estados Unidos, Alemanha, Holanda, Japão e Argentina</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button variant="cta" size="lg" className="group btn-shine" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Fale comigo
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Button>
              <Button variant="cta" size="lg" className="group btn-shine" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Quero ter resultado igual a essas pessoas
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

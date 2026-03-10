import professionalImg from "@/assets/professional.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Alunos" },
  { icon: Award, value: "+8", label: "Anos de experiência" },
  { icon: Clock, value: "100%", label: "Online" },
];

const AboutSection = () => {
  return (
    <section className="bg-section-alt py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container max-w-5xl relative">
        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl gradient-primary opacity-10 blur-xl" />
              <img
                src={professionalImg}
                alt="Foto do profissional especialista em movimento"
                className="relative rounded-3xl shadow-2xl w-full max-w-[320px] mx-auto object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-right" className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Quem sou</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre o profissional
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou especialista em treinamento baseado em movimento humano.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ajudo pessoas com dor no joelho a recuperar mobilidade, força e
              confiança para voltar às suas atividades físicas através de uma{" "}
              <strong className="text-foreground">consultoria online personalizada</strong>.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-background shadow-card">
                  <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-xl font-extrabold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

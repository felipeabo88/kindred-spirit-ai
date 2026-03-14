import professionalImg from "@/assets/professional.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import { Award, Users, Clock, ArrowRight, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Alunos recuperados" },
  { icon: Award, value: "+8", label: "Anos de experiência" },
  { icon: Clock, value: "100%", label: "Atendimento online" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-24 md:py-36 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl animate-pulse-soft" />
      <div className="container max-w-6xl relative">
        <div className="grid md:grid-cols-[400px_1fr] gap-16 items-center">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="relative group/img">
              <div className="absolute -inset-5 rounded-[2rem] bg-secondary/60 -rotate-2 group-hover/img:-rotate-3 transition-transform duration-700" />
              <div className="absolute -inset-5 rounded-[2rem] gradient-primary opacity-[0.08] rotate-1 group-hover/img:rotate-2 transition-transform duration-700" />
              <img
                src={professionalImg}
                alt="Foto do profissional especialista em movimento"
                className="relative rounded-3xl shadow-elegant w-full max-w-[400px] mx-auto object-cover aspect-[3/4] z-10 group-hover/img:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              {/* Floating motivation badge */}
              <div className="absolute -bottom-4 -right-4 md:-right-8 rounded-2xl bg-background shadow-card-hover p-4 flex items-center gap-3 animate-float z-20 border border-border hover:shadow-elegant transition-shadow duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary">
                  <Heart className="h-5 w-5 text-cta-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Paixão por</p>
                  <p className="text-xs text-muted-foreground">transformar vidas</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-right" className="space-y-8">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Quem sou</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
              Sobre o profissional
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Me chamo <strong className="text-foreground">Felipe Augusto</strong>, sou Profissional de Educação Física, faixa preta de judô e especialista em <strong className="text-foreground">reabilitação e movimento humano</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Graduado em Educação Física pela Universidade Federal do Rio Grande do Norte (UFRN), com pós-graduação em Fisiologia do Exercício, atualmente também sou estudante de Fisioterapia e possuo certificação internacional em <strong className="text-foreground">NeuroKinetic Therapy (NKT) – Level 1</strong>, um método avançado de avaliação e correção de padrões de movimento.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha trajetória no movimento começou no esporte. Fui atleta de judô por 14 anos, período em que conquistei diversos títulos em competições pelo Brasil e alcancei a faixa preta na modalidade, experiência que consolidou minha compreensão sobre desempenho físico, prevenção de lesões e recuperação funcional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ao longo da minha carreira, busquei constante aperfeiçoamento em áreas relacionadas ao movimento humano, reabilitação e treinamento físico, participando de cursos e formações em diferentes regiões do país.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje meu trabalho é dedicado a ajudar pessoas que convivem com dores e limitações de movimento, especialmente relacionadas ao joelho, a recuperarem a mobilidade, a confiança no corpo e a liberdade de se movimentar novamente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Através da <strong className="text-foreground">consultoria online</strong>, já acompanhei alunos por videoconferência em diferentes países, incluindo Estados Unidos, Alemanha, Holanda, Japão e Argentina, auxiliando pessoas ao redor do mundo a retomarem suas atividades com mais segurança e qualidade de vida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meu foco é sempre identificar a verdadeira causa das dores e disfunções de movimento, aplicando estratégias específicas de correção e fortalecimento para promover uma recuperação segura e duradoura.
            </p>
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

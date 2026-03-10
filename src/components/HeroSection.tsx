import { Button } from "@/components/ui/button";
import { CheckCircle, Video } from "lucide-react";
import heroImg from "@/assets/hero-knee.jpg";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const benefits = [
  "Avaliação de movimento",
  "Exercícios personalizados",
  "Acompanhamento profissional online",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <Video className="h-4 w-4" />
              Consultoria 100% Online
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
              Recupere a confiança no seu movimento e volte a usar seu joelho{" "}
              <span className="text-primary">sem dor</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Consultoria online especializada em dor no joelho para quem quer
              voltar a se movimentar sem depender de remédios ou cirurgia.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <Button variant="cta" size="xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Começar consultoria online
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Atendimento online para qualquer cidade.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Profissional avaliando movimento do joelho de um aluno"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

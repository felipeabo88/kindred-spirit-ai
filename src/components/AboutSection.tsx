import professionalImg from "@/assets/professional.jpg";

const AboutSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
          <img
            src={professionalImg}
            alt="Foto do profissional especialista em movimento"
            className="rounded-2xl shadow-lg w-full max-w-[280px] mx-auto object-cover aspect-square"
            loading="lazy"
          />
          <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const frustrations = [
  "Fisioterapia",
  "Médicos especialistas",
  "Pilates",
  "Infiltrações",
  "Suplementos como colágeno",
];

const FrustrationSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container max-w-3xl space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Talvez você já tenha tentado várias soluções
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {frustrations.map((f) => (
            <span
              key={f}
              className="rounded-full border border-border bg-section-alt px-5 py-2.5 text-sm font-medium text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Mesmo após tentar várias alternativas, muitas pessoas continuam
          convivendo com a dor porque{" "}
          <strong className="text-foreground">a causa real do problema não foi tratada.</strong>
        </p>
      </div>
    </section>
  );
};

export default FrustrationSection;

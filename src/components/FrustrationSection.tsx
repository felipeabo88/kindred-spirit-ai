import AnimateOnScroll from "@/components/AnimateOnScroll";
import { X } from "lucide-react";

const frustrations = [
  "Fisioterapia",
  "Médicos especialistas",
  "Pilates",
  "Infiltrações",
  "Suplementos como colágeno",
];

const FrustrationSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-3xl space-y-10">
        <AnimateOnScroll className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Frustração comum</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Talvez você já tenha tentado várias soluções
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100} className="flex flex-wrap justify-center gap-3">
          {frustrations.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-full border-2 border-destructive/20 bg-destructive/5 px-5 py-3 text-sm font-semibold text-foreground"
            >
              <X className="h-4 w-4 text-destructive" />
              {f}
            </span>
          ))}
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="rounded-2xl border border-border bg-section-alt p-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mesmo após tentar várias alternativas, muitas pessoas continuam
              convivendo com a dor porque{" "}
              <strong className="text-foreground">a causa real do problema não foi tratada.</strong>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FrustrationSection;

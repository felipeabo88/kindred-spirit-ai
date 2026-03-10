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
    <section className="bg-section-alt py-24 md:py-32">
      <div className="container max-w-3xl space-y-12">
        <AnimateOnScroll className="text-center space-y-4">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary font-body">Frustração comum</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Talvez você já tenha tentado várias soluções
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100} className="flex flex-wrap justify-center gap-3">
          {frustrations.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-full border-2 border-destructive/20 bg-destructive/5 px-6 py-3.5 text-sm font-semibold text-foreground"
            >
              <X className="h-4 w-4 text-destructive" />
              {f}
            </span>
          ))}
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="rounded-3xl border border-border bg-background p-9 text-center shadow-card">
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

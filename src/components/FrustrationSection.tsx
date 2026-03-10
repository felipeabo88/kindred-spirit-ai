import AnimateOnScroll from "@/components/AnimateOnScroll";
import { X, AlertCircle } from "lucide-react";

const frustrations = [
  "Fisioterapia",
  "Médicos especialistas",
  "Pilates",
  "Infiltrações",
  "Suplementos como colágeno",
];

const FrustrationSection = () => {
  return (
    <section className="bg-section-alt py-24 md:py-36 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-destructive/[0.03] blur-3xl" />
      <div className="container max-w-3xl space-y-14">
        <AnimateOnScroll className="text-center space-y-5">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary font-body bg-primary/10 px-4 py-1.5 rounded-full">Frustração comum</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            Talvez você já tenha tentado várias soluções
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100} className="flex flex-wrap justify-center gap-4">
          {frustrations.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-destructive/20 bg-destructive/5 px-7 py-4 text-sm font-semibold text-foreground hover:border-destructive/40 hover:bg-destructive/10 transition-all duration-300"
            >
              <X className="h-4 w-4 text-destructive" />
              {f}
            </span>
          ))}
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="rounded-3xl border border-border bg-background p-10 md:p-12 text-center shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex justify-center mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10">
                <AlertCircle className="h-7 w-7 text-destructive" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
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

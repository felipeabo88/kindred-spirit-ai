import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import stairsImg from "@/assets/problems/stairs.png";
import morningBedImg from "@/assets/problems/morning-bed.png";
import sittingImg from "@/assets/problems/sitting.png";
import squatImg from "@/assets/problems/squat.png";
import runningImg from "@/assets/problems/running.png";
import limitationImg from "@/assets/problems/limitation.png";

const symptoms = [
  { image: stairsImg, label: "Dor ao subir escadas" },
  { image: morningBedImg, label: "Dor ao levantar da cama pela manhã" },
  { image: sittingImg, label: "Dor ao levantar depois de ficar muito tempo sentado" },
  { image: squatImg, label: "Dor ao agachar ou levantar de uma cadeira" },
  { image: runningImg, label: "Dificuldade para caminhar ou correr por mais tempo" },
  { image: limitationImg, label: "Sensação de que seu corpo não se movimenta como antes" },
];

const ProblemSection = () => {
  return (
    <section className="bg-background py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-destructive/[0.03] blur-3xl" />
      <div className="container space-y-16">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto space-y-5">
          
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight">
            A sua dor no joelho aparece em situações como estas?
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {symptoms.map(({ image, label }, i) => (
            <AnimateOnScroll key={label} delay={i * 100} animation="animate-scale-in">
              <div className="group flex flex-col items-center gap-4 rounded-3xl bg-section-alt overflow-hidden shadow-card card-interactive text-center cursor-default border border-border hover:border-primary/20 h-full">
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={image}
                    alt={label}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300 px-5 pb-5">{label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center space-y-7 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Se você se identificou com alguma dessas situações, talvez seu corpo esteja compensando um problema no movimento.
          </p>
          <Button variant="ctaOutline" size="lg" className="btn-shine" asChild>
            <a href="#metodo">Descobrir como funciona</a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;

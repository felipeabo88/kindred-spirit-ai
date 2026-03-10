import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const CtaSection = () => {
  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container max-w-3xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground">
          Você não precisa conviver com dor no joelho
        </h2>
        <p className="text-lg text-section-dark-foreground/80">
          Comece hoje sua consultoria online e recupere seu movimento.
        </p>
        <Button variant="cta" size="xl" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Começar consultoria online
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;

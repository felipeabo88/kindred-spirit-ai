import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre a consultoria online para dor no joelho.";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-cta-foreground shadow-xl hover:bg-[hsl(142,70%,38%)] transition-all duration-300 hover:scale-110 animate-bounce-subtle group"
    >
      <MessageCircle className="h-7 w-7 group-hover:animate-wiggle" />
    </a>
  );
};

export default WhatsAppFab;
export { WHATSAPP_URL };

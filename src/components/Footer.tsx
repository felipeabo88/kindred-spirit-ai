import { MessageCircle, Instagram, Phone, Heart } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="gradient-dark py-14 border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side - Contato */}
          <div className="space-y-5 text-center md:text-left">
            <p className="text-section-dark-foreground font-bold text-sm uppercase tracking-wider">Contato</p>
            <a
              href="tel:+5584991261061"
              className="block text-section-dark-foreground text-2xl md:text-3xl font-bold hover:text-primary transition-colors"
            >
              (84) 99126-1061
            </a>
            <div className="space-y-3">
              <p className="text-section-dark-foreground/70 text-sm">Também no WhatsApp:</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white font-bold rounded-lg px-5 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="h-6 w-6" />
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-xs font-medium uppercase tracking-wide">Fale agora pelo</span>
                  <span className="text-lg font-extrabold uppercase">WhatsApp</span>
                </span>
                <span className="bg-[hsl(0,72%,50%)] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded ml-1">
                  Clique aqui
                </span>
              </a>
            </div>
          </div>

          {/* Right side - Instagram */}
          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
            <p className="text-section-dark-foreground font-bold text-sm uppercase tracking-wider">Me acompanhe no Instagram</p>
            <a
              href="https://instagram.com/felipe_augusto_personal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Felipe Augusto"
              className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary/60 text-primary hover:bg-primary hover:text-cta-foreground transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-section-dark-foreground/10 text-center">
          <p className="text-section-dark-foreground/40 text-xs flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Todos os direitos reservados. Feito com <Heart className="h-3 w-3 text-primary" /> para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

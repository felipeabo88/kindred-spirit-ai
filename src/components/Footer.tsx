import { MessageCircle, Instagram, Mail, Phone } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const Footer = () => {
  return (
    <footer className="gradient-dark py-14 border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-heading text-xl font-bold text-section-dark-foreground">
              Joelho<span className="text-primary">Sem Dor</span>
            </p>
            <p className="text-section-dark-foreground/50 text-sm">
              Consultoria online especializada em dor no joelho.
            </p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-section-dark-foreground/70 text-sm font-medium">Contato</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-section-dark-foreground hover:text-primary transition-colors font-medium">
              <Phone className="h-4 w-4" />
              (00) 00000-0000
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:contato@exemplo.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-section-dark-foreground/10 text-center">
          <p className="text-section-dark-foreground/40 text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

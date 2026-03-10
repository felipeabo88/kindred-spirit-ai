import { MessageCircle, Instagram, Mail } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const Footer = () => {
  return (
    <footer className="gradient-dark py-12 border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-section-dark-foreground font-bold font-heading">
              Consultoria Online — Joelho
            </p>
            <p className="text-section-dark-foreground/50 text-sm">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:contato@exemplo.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

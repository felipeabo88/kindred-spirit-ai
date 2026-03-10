import { MessageCircle, Instagram, Mail } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const Footer = () => {
  return (
    <footer className="bg-section-dark py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-section-dark-foreground/60 text-sm">
            © {new Date().getFullYear()} Consultoria Online — Recuperação do Joelho
          </p>
          <div className="flex items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-section-dark-foreground/60 hover:text-primary transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-section-dark-foreground/60 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:contato@exemplo.com"
              aria-label="Email"
              className="text-section-dark-foreground/60 hover:text-primary transition-colors"
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

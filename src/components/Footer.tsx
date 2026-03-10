import { MessageCircle, Instagram, Mail, Phone, Heart } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";

const Footer = () => {
  return (
    <footer className="gradient-dark py-16 border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="space-y-3 text-center md:text-left">
            <p className="font-heading text-2xl font-bold text-section-dark-foreground">
              Joelho<span className="text-primary">Sem Dor</span>
            </p>
            <p className="text-section-dark-foreground/50 text-sm leading-relaxed">
              Consultoria online especializada em dor no joelho.
            </p>
          </div>
          <div className="text-center space-y-3">
            <p className="text-section-dark-foreground/70 text-sm font-semibold uppercase tracking-wider">Contato</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-section-dark-foreground hover:text-primary transition-colors font-medium">
              <Phone className="h-4 w-4" />
              (00) 00000-0000
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-3">
            {[
              { href: WHATSAPP_URL, icon: MessageCircle, label: "WhatsApp" },
              { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
              { href: "mailto:contato@exemplo.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-7 border-t border-section-dark-foreground/10 text-center">
          <p className="text-section-dark-foreground/40 text-sm flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Todos os direitos reservados. Feito com <Heart className="h-3.5 w-3.5 text-primary" /> para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

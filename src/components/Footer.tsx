import { MessageCircle, Instagram, Mail, Phone, Heart } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="gradient-dark py-14 border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2 text-center md:text-left">
            <img src={logo} alt="Felipe Augusto" className="h-10 w-auto mx-auto md:mx-0 brightness-0 invert opacity-90" />
            <p className="text-section-dark-foreground/50 text-sm leading-relaxed">
              Consultoria online especializada em dor no joelho.
            </p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-section-dark-foreground/70 text-xs font-semibold uppercase tracking-wider">Contato</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-section-dark-foreground hover:text-primary transition-colors font-medium text-sm">
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
                className="flex h-11 w-11 items-center justify-center rounded-full bg-section-dark-foreground/10 text-section-dark-foreground/60 hover:bg-primary hover:text-cta-foreground transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
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

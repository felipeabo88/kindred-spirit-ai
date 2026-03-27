import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppFab";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-nav py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <img src={logo} alt="Felipe Augusto" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="sm" asChild className="btn-shine">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Agendar agora
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground py-2 hover:text-primary hover:translate-x-2 transition-all duration-300"
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="lg" asChild className="mt-2 btn-shine">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              Agendar agora
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

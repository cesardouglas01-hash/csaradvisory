import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoCsar from "@/assets/logo-csar.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Método", href: "#metodo" },
    { label: "Elos", href: "#elos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logoCsar} alt="CSAR Advisory" className="h-16 w-auto" />
          <span className="text-gold font-heading text-xl tracking-wider">Advisory</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/70 hover:text-gold transition-colors text-sm tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="gradient-gold text-primary-foreground font-semibold px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Fale Comigo
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/70 hover:text-gold transition-colors text-sm tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="block mt-2 gradient-gold text-primary-foreground font-semibold px-6 py-3 rounded-lg text-sm text-center"
          >
            Fale Comigo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

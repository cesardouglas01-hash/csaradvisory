import logoCsar from "@/assets/logo-csar.png";
import { useInView } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <footer ref={ref} className="bg-dark border-t border-border py-12 px-4">
      <div className={`container mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <img src={logoCsar} alt="CSAR" className="h-12 w-auto mx-auto mb-4" />
        <p className="font-heading text-gold text-xl mb-2">CSAR <span className="text-gold-light">Advisory</span></p>
        <p className="text-muted-foreground text-sm mb-4">
          Conselho estratégico para empresários que buscam crescimento estruturado.
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.4)] to-transparent mx-auto mb-4" />
        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} CSAR Advisory. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

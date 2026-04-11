import { Link2, Users, Globe } from "lucide-react";
import { useInView } from "@/hooks/useScrollAnimation";

const ProjetoElos = () => {
  const { ref, visible } = useInView(0.15);

  return (
    <section ref={ref} id="elos" className="bg-dark py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.04)_0%,transparent_60%)]" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <p className={`text-gold-light uppercase tracking-[0.25em] text-xs mb-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>Exclusivo</p>
        <h2 className={`font-heading text-3xl md:text-5xl text-foreground mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Elos <span className="text-gold">Club</span>
        </h2>
        <p className={`text-muted-foreground max-w-2xl mx-auto mb-12 text-lg transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          Uma rede exclusiva de conexões estratégicas entre empresários, investidores e operadores.
          Elos conecta quem tem capital a quem tem operação — e quem tem visão a quem tem execução.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { icon: Link2, title: "Conexões qualificadas", desc: "Networking de alto nível com curadoria." },
            { icon: Users, title: "Comunidade seleta", desc: "Acesso restrito a empresários validados." },
            { icon: Globe, title: "Alcance global", desc: "Operações e parcerias internacionais." },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`border border-border rounded-xl p-8 hover:border-[hsl(var(--gold)/0.4)] transition-all bg-card/30 hover:bg-card/60 hover:shadow-[0_0_30px_hsl(var(--gold)/0.06)] duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <item.icon className="text-gold mx-auto mb-4" size={32} />
              <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetoElos;

import { Target, TrendingUp, Shield, Lightbulb } from "lucide-react";
import { useInView } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Target, title: "Direção clara", desc: "Um plano estratégico sob medida, não um modelo genérico de consultoria." },
  { icon: TrendingUp, title: "Crescimento estruturado", desc: "Escalar com método, previsibilidade e controle financeiro." },
  { icon: Shield, title: "Proteção patrimonial", desc: "Blindagem de ativos e estratégias para preservar o que você construiu." },
  { icon: Lightbulb, title: "Visão de mercado", desc: "Acesso a inteligência que só quem opera no topo possui." },
];

const PropostaValor = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section ref={ref} className="bg-cream py-20 px-4">
      <div className="container mx-auto text-center">
        <p className={`text-gold uppercase tracking-widest text-sm mb-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-6"}`}>Proposta de valor</p>
        <h2 className={`font-heading text-3xl md:text-4xl text-cream-fg mb-4 max-w-2xl mx-auto transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Advisory não é consultoria. É <span className="text-gold">parceria estratégica.</span>
        </h2>
        <p className={`text-secondary-foreground/70 mb-12 max-w-xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          Enquanto consultorias entregam relatórios, o advisory entrega direção, decisões e resultados.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`bg-background/50 border border-border rounded-xl p-6 hover:border-[hsl(var(--gold)/0.4)] hover:shadow-[0_8px_30px_hsl(var(--gold)/0.08)] transition-all duration-700 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <item.icon className="text-gold mx-auto mb-4" size={32} />
              <h3 className="font-heading text-lg text-cream-fg mb-2">{item.title}</h3>
              <p className="text-secondary-foreground/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropostaValor;

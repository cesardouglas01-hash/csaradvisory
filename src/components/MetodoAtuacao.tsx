import { Search, Compass, Eye, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Search, num: "01", title: "Diagnóstico", desc: "Análise profunda do negócio, mercado e oportunidades ocultas." },
  { icon: Compass, num: "02", title: "Direcionamento", desc: "Plano estratégico personalizado com metas claras e prazos definidos." },
  { icon: Eye, num: "03", title: "Acompanhamento", desc: "Reuniões periódicas para ajuste de rota e aceleração de resultados." },
  { icon: Rocket, num: "04", title: "Implementação", desc: "Execução assistida com suporte em negociações e operações-chave." },
];

const MetodoAtuacao = () => {
  const { ref, visible } = useInView(0.15);

  return (
    <section ref={ref} id="metodo" className="bg-cream py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className={`text-gold uppercase tracking-[0.25em] text-xs mb-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>Método</p>
          <h2 className={`font-heading text-3xl md:text-4xl text-cream-fg transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Como funciona o <span className="text-gold">Advisory</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full border-2 border-[hsl(var(--gold)/0.4)] flex items-center justify-center mx-auto mb-4 hover:border-[hsl(var(--gold))] hover:shadow-[0_0_20px_hsl(var(--gold)/0.15)] transition-all duration-300">
                <s.icon className="text-gold" size={24} />
              </div>
              <p className="text-gold font-heading text-sm mb-1">{s.num}</p>
              <h3 className="font-heading text-xl text-cream-fg mb-2">{s.title}</h3>
              <p className="text-secondary-foreground/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodoAtuacao;

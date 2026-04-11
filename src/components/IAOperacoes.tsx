import { Bot, Brain, Zap } from "lucide-react";
import { useInView } from "@/hooks/useScrollAnimation";

const IAOperacoes = () => {
  const { ref, visible } = useInView(0.15);

  return (
    <section ref={ref} className="bg-dark py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className={`text-gold-light uppercase tracking-[0.25em] text-xs mb-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>Diferencial</p>
          <h2 className={`font-heading text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            IA aplicada às <span className="text-gold">operações estratégicas</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
            Utilizamos inteligência artificial para análise de mercado, due diligence acelerada
            e modelagem financeira preditiva — dando velocidade e precisão às decisões.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { icon: Brain, title: "Análise preditiva", desc: "Modelos de IA que antecipam cenários de mercado." },
            { icon: Bot, title: "Due diligence 10x", desc: "Processos automatizados que reduzem semanas a dias." },
            { icon: Zap, title: "Decisões em tempo real", desc: "Dashboards inteligentes para tomada de decisão ágil." },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`border border-border rounded-xl p-6 text-center hover:border-[hsl(var(--gold)/0.4)] hover:shadow-[0_0_30px_hsl(var(--gold)/0.06)] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <item.icon className="text-gold mx-auto mb-4" size={28} />
              <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IAOperacoes;

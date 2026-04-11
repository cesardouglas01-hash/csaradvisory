import { AlertTriangle, TrendingDown, Eye } from "lucide-react";
import { useInView } from "@/hooks/useScrollAnimation";

const points = [
  { icon: TrendingDown, text: "Já investiu em marketing, consultorias e estratégias que não funcionaram?" },
  { icon: AlertTriangle, text: "Sente que o esforço não corresponde ao resultado?" },
  { icon: Eye, text: "O problema não está no esforço — está na falta de visão estratégica." },
];

const QuebraCrenca = () => {
  const { ref, visible } = useInView(0.15);

  return (
    <section ref={ref} className="bg-dark py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-[hsl(var(--card))/30] to-background/0" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          O que está travando o seu negócio <span className="text-gold">não é o que você pensa.</span>
        </h2>
        <p className={`text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Empresários de alto nível não crescem mais rápido porque trabalham mais. Crescem porque
          têm ao lado alguém que já percorreu o caminho e sabe exatamente onde estão os atalhos —
          e os abismos.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className={`bg-card/50 border border-border rounded-xl p-6 hover:border-[hsl(var(--gold)/0.3)] hover:shadow-[0_0_30px_hsl(var(--gold)/0.05)] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              <p.icon className="text-gold mx-auto mb-4" size={28} />
              <p className="text-foreground/80 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuebraCrenca;

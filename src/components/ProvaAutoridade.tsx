import { useInView } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: 400, suffix: "M", prefix: "+", label: "USD negociados em operações de M&A" },
  { value: 50, suffix: "", prefix: "+", label: "Empresas assessoradas estrategicamente" },
  { value: 15, suffix: "", prefix: "+", label: "Anos de experiência no mercado" },
  { value: 3, suffix: "", prefix: "", label: "Continentes de atuação" },
];

function AnimatedNumber({ target, suffix, prefix, active }: { target: number; suffix: string; prefix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return <>{prefix}{active ? count : 0}{suffix}</>;
}

const ProvaAutoridade = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-card via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.04)_0%,transparent_70%)]" />
      <div className="container mx-auto text-center relative z-10">
        <p className={`text-gold-light uppercase tracking-[0.25em] text-xs mb-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>Autoridade</p>
        <h2 className={`font-heading text-3xl md:text-4xl text-foreground mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Números que <span className="text-gold">falam por si.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border border-border rounded-xl p-8 bg-card/40 hover:border-[hsl(var(--gold)/0.3)] hover:shadow-[0_0_40px_hsl(var(--gold)/0.06)] transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${200 + i * 200}ms` }}
            >
              <p className="font-heading text-5xl md:text-6xl text-gold mb-3">
                <AnimatedNumber target={s.value} suffix={s.suffix} prefix={s.prefix} active={visible} />
              </p>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaAutoridade;

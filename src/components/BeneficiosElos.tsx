import { useInView } from "@/hooks/useScrollAnimation";
import elosClubLogo from "@/assets/elos-club-logo.png";

const benefits = [
  { title: "Conexões", bold: "Genuínas" },
  { title: "Expansão", bold: "Profissional" },
  { title: "Parcerias", bold: "Lucrativas" },
  { title: "Clareza de", bold: "Posicionamento" },
  { title: "Crescimento", bold: "Acelerado" },
  { title: "Mentalidade", bold: "de Execução" },
  { title: "Autoconfiança", bold: "Elevada" },
  { title: "Visão global", bold: "de Negócios" },
  { title: "Oportunidades", bold: "Exclusivas" },
  { title: "Planejamento de", bold: "Próximos Passos" },
];

const BeneficiosElos = () => {
  const { ref: sectionRef, visible } = useInView(0.1);
  const { ref: headerRef, visible: headerVisible } = useInView(0.2);

  return (
    <section ref={sectionRef} className="bg-dark py-24 px-4 relative overflow-hidden">
      {/* Luxury ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.06)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(var(--gold)/0.02)] blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gold-light uppercase tracking-[0.3em] text-xs mb-4">Elos Club</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-2">
            <span className="text-gold text-5xl md:text-7xl font-bold">10</span> Benefícios
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto text-base mt-4">
            O que você ganha ao fazer parte da rede mais exclusiva de conexões estratégicas do Brasil.
          </p>
        </div>

        {/* Circular layout - Desktop */}
        <div className="hidden lg:block relative" style={{ height: 520 }}>
          {/* Center photo */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-[hsl(var(--gold)/0.2)] animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-[hsl(var(--gold)/0.08)]" />
              <div className="absolute -inset-12 rounded-full border border-[hsl(var(--gold)/0.04)]" />
              <img
                src={elosClubLogo}
                alt="Elos Club"
                className="w-40 h-40 rounded-full object-contain bg-card/80 p-3 relative z-10 shadow-[0_0_60px_hsl(var(--gold)/0.2)] border-2 border-[hsl(var(--gold)/0.3)]"
              />
            </div>
          </div>

          {/* Benefits positioned in a circle */}
          {benefits.map((b, i) => {
            const angle = (i * 36 - 90) * (Math.PI / 180);
            const rx = 240;
            const ry = 220;
            const x = Math.cos(angle) * rx;
            const y = Math.sin(angle) * ry;

            return (
              <div
                key={i}
                className={`absolute transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{
                  left: `calc(50% + ${x}px - 80px)`,
                  top: `calc(50% + ${y}px - 30px)`,
                  transitionDelay: `${400 + i * 100}ms`,
                  width: 160,
                }}
              >
                <div className="bg-[hsl(0_0%_0%)] backdrop-blur-sm border border-[hsl(var(--gold)/0.3)] rounded-xl px-4 py-3 text-center hover:border-[hsl(var(--gold)/0.6)] hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--gold)/0.15)] transition-all duration-300 cursor-default group">
                  <p className="text-gold font-heading text-xs mb-1 group-hover:text-gold-light transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-foreground text-sm leading-tight">
                    {b.title}{" "}
                    <span className="font-bold text-gold group-hover:text-gold-light transition-colors">
                      {b.bold}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: 2-column grid */}
        <div className="lg:hidden">
          <div className={`flex justify-center mb-10 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-[hsl(var(--gold)/0.3)] animate-pulse" />
              <img
                src={elosClubLogo}
                alt="Elos Club"
                className="w-32 h-32 rounded-full object-contain bg-card/80 p-3 relative z-10 shadow-[0_0_40px_hsl(var(--gold)/0.15)] border-2 border-[hsl(var(--gold)/0.3)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`bg-[hsl(0_0%_0%)] backdrop-blur-sm border border-[hsl(var(--gold)/0.3)] rounded-xl px-4 py-3 text-center hover:border-[hsl(var(--gold)/0.6)] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <p className="text-gold font-heading text-xs mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-foreground text-xs leading-tight">
                  {b.title}{" "}
                  <span className="font-bold text-gold">{b.bold}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          className={`font-heading italic text-gold-light text-center mt-16 text-lg transition-all duration-700 delay-[1500ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          "Sua rede define seu patrimônio."
        </p>
      </div>
    </section>
  );
};

export default BeneficiosElos;

import grupoVillelaLogo from "@/assets/grupo-villela-logo.png";
import { Building2, Rocket, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useScrollAnimation";

const pillars = [
  { icon: BarChart3, title: "Operações Financeiras", desc: "Estruturação de deals, captação e M&A." },
  { icon: Rocket, title: "Expansão Empresarial", desc: "Internacionalização e crescimento acelerado." },
  { icon: Building2, title: "Estruturação Estratégica", desc: "Governança, processos e escalabilidade." },
];

const partners = [
  "Alpha Capital", "Nexus Invest", "Vertex Group", "Orion Partners", "Apex Holdings",
  "Summit Corp", "Prisma Capital", "Atlas Ventures", "Zenith Group", "Vanguard Corp",
  "Meridian", "Quantum Partners", "Stratos Group", "Pinnacle Co",
];

const Ecossistema = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section ref={ref} className="bg-cream py-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <img
          src={grupoVillelaLogo}
          alt="Grupo Villela"
          loading="lazy"
          width={512}
          height={512}
          className={`h-16 w-auto mx-auto mb-6 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        />
        <h2 className={`font-heading text-3xl md:text-4xl text-cream-fg mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Ecossistema <span className="text-gold">Grupo Villela</span>
        </h2>
        <p className={`text-secondary-foreground/70 max-w-xl mx-auto mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          Uma rede estratégica que conecta operações, capital e crescimento.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <p.icon className="text-gold mb-3" size={28} />
              <h3 className="font-heading text-lg text-cream-fg mb-1">{p.title}</h3>
              <p className="text-secondary-foreground/60 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="mx-8 flex-shrink-0 text-secondary-foreground/30 hover:text-secondary-foreground/80 transition-colors font-heading text-xl tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center mt-12">
        <p className={`font-heading italic text-gold-light text-lg transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          "Sozinho você vai rápido. Com a rede certa, você vai longe."
        </p>
      </div>
    </section>
  );
};

export default Ecossistema;

import { useInView } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";
import jessicaCruz from "@/assets/jessica-cruz.png";
import cesarPalco from "@/assets/cesar-palco.jpg";
import cesarSpeaking from "@/assets/cesar-speaking.jpg";

const players = [
  {
    name: "Jessica Cruz",
    role: "CEO & Gestora Estratégica",
    photo: jessicaCruz,
    instagram: "@jessicacruz",
    instaUrl: "https://instagram.com/jessicacruz",
    bio: "Gestora estratégica sob o legado de Pablo Marçal. Jessica lidera operações de alto impacto, conectando visão empresarial a execução de excelência com foco em resultados exponenciais.",
  },
  {
    name: "Clayton Querobin",
    role: "Mentor & Estrategista de Negócios",
    photo: cesarPalco,
    instagram: "@claytonquerobin",
    instaUrl: "https://instagram.com/claytonquerobin",
    bio: "Referência em mentoria estratégica e desenvolvimento de lideranças. Clayton atua no ecossistema de alto desempenho, ajudando empresários a desbloquearem o próximo nível de crescimento.",
  },
  {
    name: "Julia Ottoni",
    role: "Especialista em Posicionamento & Branding",
    photo: cesarSpeaking,
    instagram: "@juliaottoni",
    instaUrl: "https://instagram.com/juliaottoni",
    bio: "Especialista em posicionamento de marca e branding pessoal para líderes de mercado. Julia transforma presença em autoridade e autoridade em conversão.",
  },
];

const TeamPlayers = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section ref={ref} className="bg-dark py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--gold)/0.04)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.2)] to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <p className={`text-gold-light uppercase tracking-[0.3em] text-xs mb-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            Ecossistema
          </p>
          <h2 className={`font-heading text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Players <span className="text-gold">Estratégicos</span>
          </h2>
          <p className={`text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
            Conheça os líderes que operam ao lado de Pablo Marçal no ecossistema de alto desempenho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {players.map((p, i) => (
            <div
              key={p.name}
              className={`group relative bg-card/40 border border-border rounded-2xl overflow-hidden hover:border-[hsl(var(--gold)/0.4)] hover:shadow-[0_0_40px_hsl(var(--gold)/0.08)] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-bg))] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-8 relative z-10">
                <h3 className="font-heading text-xl text-foreground mb-1">{p.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{p.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.bio}</p>
                <a
                  href={p.instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-light hover:text-gold transition-colors text-sm"
                >
                  <Instagram size={16} />
                  {p.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPlayers;

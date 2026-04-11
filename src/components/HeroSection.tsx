import cesarHero from "@/assets/cesar-hero.png";
import cesarBg from "@/assets/cesar-bg.jpg";
import logoCsar from "@/assets/logo-csar.png";
import { useParallax } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, offset } = useParallax(0.15);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${cesarBg})`,
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      {/* Luxury gold line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.4)] to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <img src={logoCsar} alt="CSAR" className="h-24 w-auto mb-8 mx-auto lg:mx-0" />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              Clareza gera direção.
              <br />
              <span className="text-gold">Direção gera crescimento.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg">
              Negócios não quebram por falta de esforço. Quebram por falta de conselho.
            </p>
            <p className="font-heading italic text-gold-light text-base md:text-lg mb-8 max-w-lg">
              "Fé sem estratégia não sustenta crescimento."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-lg text-center hover:opacity-90 transition-opacity text-lg shadow-[0_4px_30px_hsl(var(--gold)/0.3)]"
              >
                Solicitar Diagnóstico Estratégico
              </a>
              <a
                href="https://wa.me/5511940771267"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold text-gold font-semibold px-8 py-4 rounded-lg text-center hover:bg-[hsl(var(--gold)/0.1)] transition-colors"
              >
                Agendar conversa estratégica
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-[hsl(var(--gold)/0.1)] to-transparent rounded-3xl blur-2xl" />
              <img
                src={cesarHero}
                alt="Cesar Douglas — Conselheiro Estratégico"
                width={512}
                height={768}
                className="max-h-[620px] w-auto object-contain drop-shadow-2xl relative z-10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import cesarPos from "@/assets/cesar-posicionamento.jpg";
import { useInView, useParallax } from "@/hooks/useScrollAnimation";

const Posicionamento = () => {
  const { ref, visible } = useInView(0.15);
  const { ref: pRef, offset } = useParallax(0.08);

  return (
    <section ref={pRef} id="sobre" className="bg-dark py-20 px-4">
      <div ref={ref} className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="absolute -inset-3 border border-[hsl(var(--gold)/0.2)] rounded-2xl" />
            <div className="absolute -inset-6 bg-gradient-to-br from-[hsl(var(--gold)/0.05)] to-transparent rounded-2xl blur-xl" />
            <img
              src={cesarPos}
              alt="Cesar Douglas em seu escritório"
              loading="lazy"
              width={640}
              height={800}
              className="rounded-2xl w-full object-cover relative z-10"
              style={{ transform: `translateY(${offset * 0.3}px)` }}
            />
          </div>
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <p className="text-gold-light uppercase tracking-widest text-sm mb-4">Posicionamento</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Conselheiro estratégico para quem <span className="text-gold">não aceita crescer devagar.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cesar Douglas atua como conselheiro estratégico e especialista em M&A, apoiando empresários
              que buscam crescimento estruturado, operações de fusão e aquisição, e direcionamento para
              escalar com inteligência.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com passagens por operações ao lado de líderes como Pablo Marçal e experiência na
              estruturação da Next Apps, Cesar construiu um método próprio que une visão de mercado,
              inteligência financeira e estratégia de longo prazo.
            </p>
            <p className="font-heading italic text-gold-light text-xl">
              "Não existe negócio grande com mentalidade pequena."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posicionamento;

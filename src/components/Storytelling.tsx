import cesarSpeaking from "@/assets/cesar-speaking.jpg";
import { useInView, useParallax } from "@/hooks/useScrollAnimation";

const Storytelling = () => {
  const { ref, visible } = useInView(0.1);
  const { ref: pRef, offset } = useParallax(0.06);

  return (
    <section ref={pRef} className="bg-dark py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className={`lg:col-span-3 transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-gold-light uppercase tracking-[0.25em] text-xs mb-4">A história</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
              De onde veio <span className="text-gold">Cesar Douglas</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                A trajetória de Cesar não começou em uma sala de reuniões. Começou na rua, onde aprendeu
                que negócios são feitos de pessoas, confiança e coragem. Desde cedo, entendeu que o
                verdadeiro crescimento exige mais do que ambição — exige método.
              </p>
              <p>
                Foram anos construindo, errando, reconstruindo. Cada operação, cada negociação, cada crise
                superada forjou uma visão que poucos possuem: a capacidade de olhar para um negócio e
                enxergar, em minutos, o que precisa mudar.
              </p>
              <p>
                Hoje, Cesar dedica sua experiência a empresários que não querem apenas sobreviver — querem
                dominar seus mercados.
              </p>
            </div>
            <p className="font-heading italic text-gold text-xl mt-10">
              "A dor do crescimento é inevitável. A ignorância sobre o caminho, não."
            </p>
          </div>
          <div className={`lg:col-span-2 hidden lg:block transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative">
              <div className="absolute -inset-3 border border-[hsl(var(--gold)/0.15)] rounded-2xl" />
              <div className="absolute -inset-6 bg-gradient-to-t from-[hsl(var(--gold)/0.05)] to-transparent rounded-2xl blur-xl" />
              <img
                src={cesarSpeaking}
                alt="Cesar Douglas no palco"
                loading="lazy"
                className="rounded-2xl w-full object-cover relative z-10"
                style={{ transform: `translateY(${offset * 0.2}px)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;

import { useState, type FormEvent } from "react";
import { useInView } from "@/hooks/useScrollAnimation";

const Indicacoes = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const { ref, visible } = useInView(0.1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá, meu nome é ${form.nome}.\nE-mail: ${form.email}\nTelefone: ${form.telefone}\nMensagem: ${form.mensagem}`
    );
    window.open(`https://wa.me/5511940771267?text=${msg}`, "_blank");
  };

  return (
    <section ref={ref} id="contato" className="bg-dark py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-gold-light uppercase tracking-[0.25em] text-xs mb-4">Contato</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Pronto para dar o <span className="text-gold">próximo passo?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Se você sente que seu negócio precisa de direção estratégica, o primeiro passo é uma
              conversa. Sem compromisso, sem pressão — apenas clareza.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Preencha o formulário ao lado e nossa equipe entrará em contato via WhatsApp para
              agendar seu diagnóstico estratégico.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-wine rounded-xl p-8 space-y-5 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            {[
              { name: "nome" as const, label: "Nome", type: "text", placeholder: "Seu nome completo" },
              { name: "email" as const, label: "E-mail", type: "email", placeholder: "seu@email.com" },
              { name: "telefone" as const, label: "Telefone", type: "tel", placeholder: "(11) 99999-9999" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-foreground/80 text-sm mb-1 block">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-[hsl(var(--gold))] focus:outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="text-foreground/80 text-sm mb-1 block">Mensagem</label>
              <textarea
                rows={3}
                placeholder="Como podemos ajudar?"
                required
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-[hsl(var(--gold))] focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-olive text-foreground font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity shadow-[0_4px_20px_hsl(var(--olive)/0.3)]"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Indicacoes;

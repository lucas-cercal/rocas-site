import { useBreakpoint } from "../../hooks/useBreakpoint";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

const lightSection = {
  bg: "#f6f9fe",
  border: "rgba(24,49,81,.14)",
  cardBg: "#132238",
  cardHover: "#172b45",
  titleEm: "#2d4f78",
  text: "#b7cceb",
  textSoft: "#89a3c7",
  name: "#e7efff",
  role: "#93aed3",
};

const testimonials = [
  {
    quote:
      "Operação impecável. A equipe antecipou cada detalhe da agenda e entregou segurança real com discrição absoluta.",
    name: "Helena",
    role: "Diretora de Family Office",
  },
  {
    quote:
      "Pontualidade, sigilo e padrão executivo em todos os deslocamentos. O nível de serviço é acima do mercado.",
    name: "Ricardo",
    role: "Managing Partner · Private Equity",
  },
  {
    quote:
      "A ROCAS virou parte fixa da nossa logística de conselho. Atendimento silencioso, eficiente e extremamente profissional.",
    name: "Beatriz",
    role: "Conselheira de Multinacional",
  },
];

export default function Feedbacks() {
  const isMobile = useBreakpoint(980);

  return (
    <section
      id="feedbacks"
      style={{
        background: lightSection.bg,
        padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem",
      }}
    >
      <Reveal>
        <div style={{ maxWidth: 640, marginBottom: "2.6rem" }}>
          <SLabel tone="light">Feedbacks</SLabel>
          <STitle tone="light">
            Quem vive o serviço
            <br />
            <em style={{ fontStyle: "italic", color: lightSection.titleEm }}>reconhece a diferença</em>
          </STitle>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {testimonials.map((item) => (
            <article
              key={item.name}
              style={{
                background: lightSection.cardBg,
                border: "1px solid rgba(128,160,206,.24)",
                borderRadius: 14,
                padding: "1.5rem 1.35rem",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow:
                  "0 14px 28px rgba(8,14,24,.22), inset 0 0 0 1px rgba(198,220,255,.08), 0 0 0 1px rgba(112,148,198,.1)",
                transition: "all .25s",
              }}
            >
              <p style={{ fontSize: ".79rem", color: lightSection.text, lineHeight: 1.8, fontWeight: 500 }}>
                “{item.quote}”
              </p>
              <div style={{ marginTop: "1.3rem" }}>
                <div
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: ".92rem",
                    color: lightSection.name,
                    fontWeight: 700,
                    marginBottom: ".2rem",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: ".62rem",
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: lightSection.role,
                  }}
                >
                  {item.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { useState } from "react";
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
  chipBg: "rgba(140,180,236,.12)",
  chipBd: "rgba(164,198,244,.28)",
  chipText: "#b9d2f1",
  quote: "rgba(186,213,245,.22)",
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
  const [hovered, setHovered] = useState(null);

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
          <p style={{ marginTop: ".95rem", fontSize: ".8rem", color: "#4e6686", lineHeight: 1.8, fontWeight: 500 }}>
            Relatos de clientes com rotinas executivas de alta exigência, onde discrição e previsibilidade não são opcionais.
          </p>
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
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === index ? lightSection.cardHover : lightSection.cardBg,
                border: `1px solid ${hovered === index ? "rgba(163,196,244,.44)" : "rgba(128,160,206,.24)"}`,
                borderRadius: 14,
                padding: "1.5rem 1.35rem",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: hovered === index
                  ? "0 18px 34px rgba(8,14,24,.28), inset 0 0 0 1px rgba(198,220,255,.14), 0 0 0 1px rgba(132,168,220,.2)"
                  : "0 14px 28px rgba(8,14,24,.22), inset 0 0 0 1px rgba(198,220,255,.08), 0 0 0 1px rgba(112,148,198,.1)",
                transform: hovered === index ? "translateY(-3px)" : "translateY(0)",
                transition: "all .28s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: ".85rem" }}>
                <span style={{ fontSize: ".88rem", letterSpacing: ".1em", color: "#86b9f6" }}>★★★★★</span>
              </div>

              <p style={{ fontSize: ".79rem", color: lightSection.text, lineHeight: 1.8, fontWeight: 500, position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-.2rem",
                    top: "-.95rem",
                    fontSize: "1.9rem",
                    lineHeight: 1,
                    color: lightSection.quote,
                    pointerEvents: "none",
                  }}
                >
                  “
                </span>
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

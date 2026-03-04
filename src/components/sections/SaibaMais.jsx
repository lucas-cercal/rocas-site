import { useState } from "react";
import { testimonials } from "../../constants/testimonials";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
import { SLabel, STitle } from "../ui/SectionTitle";

const lightSection = {
  bg: "#f6f9fe",
  border: "rgba(24,49,81,.14)",
  titleEm: "#2d4f78",
  text: "#3f5675",
  textSoft: "#607492",
  accent: "#4e6f96",
  testimonialName: "#3d5168",
  testimonialQuote: "#b8ccd8",
};

const testimonialAvatarGradients = [
  "linear-gradient(135deg, #c8d8e8, #a0b8cc)",
  "linear-gradient(135deg, #ccd4e8, #a8b4d4)",
  "linear-gradient(135deg, #c8e0d8, #a0c4b8)",
];

function isTestimonialsItem(question) {
  return /depoimentos|testimonials|testimonios|témoignages/i.test(question);
}

export default function SaibaMais() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [openItem, setOpenItem] = useState(null);
  const items = t.saibaMais.items;

  return (
    <section id="saiba-mais" style={{ background: lightSection.bg, padding: isMobile ? "4.5rem 1.25rem" : "7rem 4rem" }}>
      <Reveal>
        <div style={{ maxWidth: 520, marginBottom: "3.5rem" }}>
          <SLabel tone="light">{t.saibaMais.label}</SLabel>
          <STitle tone="light">
            {t.saibaMais.titleA} {" "}<em style={{ fontStyle: "normal", color: "inherit" }}>{t.saibaMais.titleB}</em>
          </STitle>
          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              color: lightSection.text,
              lineHeight: 1.5,
              marginTop: "1rem",
              fontWeight: 500,
              textAlign: "justify",
            }}
          >
            {t.saibaMais.intro}
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div
          style={{
            maxWidth: 980,
          }}
        >
          <div>
            {items.map(([question, answer], index) => (
              <div key={index} style={{ borderBottom: `1px solid ${lightSection.border}` }}>
                <div
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.3rem 0",
                    cursor: "pointer",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontSize: isMobile ? "16px" : "20px", letterSpacing: ".06em", fontWeight: 500, color: "#19304d" }}>
                    {question}
                  </span>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      color: lightSection.accent,
                      transition: "transform .3s",
                      transform: openItem === index ? "rotate(45deg)" : "none",
                      flexShrink: 0,
                      lineHeight: 1,
                      fontWeight: 500,
                    }}
                  >
                    +
                  </span>
                </div>
                {openItem === index && (
                  <div style={{ paddingBottom: "1.3rem" }}>
                    {isTestimonialsItem(question) ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {testimonials.map((testimonial, testimonialIndex) => (
                          <article
                            key={testimonial.name}
                            style={{
                              display: "flex",
                              gap: "1rem",
                              padding: testimonialIndex === 0 ? "0 0 1.1rem" : "1.1rem 0",
                              borderBottom:
                                testimonialIndex === testimonials.length - 1
                                  ? "none"
                                  : "1px solid #eaeff4",
                              opacity: 0,
                              transform: "translateY(10px)",
                              animation: `fadeUp .5s ease ${0.1 + testimonialIndex * 0.15}s forwards`,
                            }}
                          >
                            <div
                              style={{
                                width: 38,
                                height: 38,
                                borderRadius: "50%",
                                background:
                                  testimonialAvatarGradients[testimonialIndex % testimonialAvatarGradients.length],
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                fontFamily: "'Neue Montreal', sans-serif",
                                fontSize: ".82rem",
                                fontWeight: 700,
                                color: "#4a6a84",
                                border: "1.5px solid #d0dce8",
                              }}
                            >
                              {testimonial.name.charAt(0).toUpperCase()}
                            </div>

                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "baseline",
                                  gap: ".4rem",
                                  marginBottom: ".35rem",
                                  flexWrap: "wrap",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: ".8rem",
                                    fontWeight: 700,
                                    color: lightSection.testimonialName,
                                    letterSpacing: ".01em",
                                  }}
                                >
                                  {testimonial.name}
                                </span>
                              </div>

                              <p
                                style={{
                                  fontFamily: "Georgia, serif",
                                  fontSize: ".84rem",
                                  color: "#5a7088",
                                  lineHeight: 1.65,
                                  fontStyle: "italic",
                                }}
                              >
                                <span
                                  style={{
                                    color: lightSection.testimonialQuote,
                                    fontSize: "1rem",
                                    verticalAlign: "-2px",
                                    marginRight: 1,
                                  }}
                                >
                                  "
                                </span>
                                {testimonial.quote}
                              </p>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <p style={{ fontSize: isMobile ? "16px" : "20px", color: lightSection.textSoft, lineHeight: 1.5, fontWeight: 500, textAlign: "justify" }}>
                        {answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

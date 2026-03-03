import { useState } from "react";
import heroVideo from "../../assets/cidade.mp4";
import { theme } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useI18n } from "../../i18n/LanguageContext";
import { BtnChrome, BtnGhost } from "../ui/Buttons";

export default function Hero() {
  const { t } = useI18n();
  const isMobile = useBreakpoint(980);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg,#080a0f 0%,#0b0d14 45%,#0f1220 100%)",
        }}
      />
      {!videoError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 42%",
              transform: "scale(1.18)",
              display: "block",
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity .6s ease",
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      )}
      {!videoLoaded && !videoError && (
        <div
          style={{
            position: "absolute",
            right: isMobile ? "1rem" : "1.35rem",
            bottom: isMobile ? "1rem" : "1.2rem",
            zIndex: 3,
            display: "inline-flex",
            alignItems: "center",
            gap: ".45rem",
            color: "rgba(228,238,255,.72)",
            fontSize: ".62rem",
            letterSpacing: ".14em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(188,214,248,.84)",
              animation: "scrollPulse 1.3s ease-in-out infinite",
            }}
          />
          Carregando vídeo
        </div>
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(6,10,18,.86) 0%, rgba(6,10,18,.78) 38%, rgba(5,8,14,.62) 62%, rgba(4,7,12,.78) 100%), radial-gradient(ellipse 70% 52% at 20% 45%, rgba(74,106,160,.18) 0%, transparent 62%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: isMobile ? "0 1.25rem" : "0 4rem",
          paddingTop: isMobile ? 96 : 112,
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: isMobile ? "100%" : 760,
            padding: isMobile ? "2.2rem 0 1rem" : "4rem 0",
            animation: "fadeUp 1s ease both",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".8rem",
              fontSize: ".68rem",
              letterSpacing: ".5em",
              textTransform: "uppercase",
              color: theme.accentDim,
              marginBottom: "2rem",
              fontWeight: 500,
            }}
            >
              <span
              style={{
                width: 28,
                height: 1,
                background: `linear-gradient(to right,transparent,${theme.accentDim})`,
                display: "block",
              }}
              />
            {t.hero.badge}
          </div>
          <h1
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: isMobile ? "29px" : "36px",
              fontWeight: 600,
              lineHeight: 1.12,
              color: theme.cr8,
              marginBottom: "1.8rem",
            }}
          >
            {t.hero.lines[0]}{" "}
            <em
              style={{
                fontStyle: "normal",
                fontWeight: 700,
                background: `linear-gradient(135deg,${theme.cr7},${theme.cr5} 60%,${theme.cr6})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.hero.lines[1]}
            </em>
            <br />
            {t.hero.lines[2]} {t.hero.lines[3]}
          </h1>
          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              color: theme.textMd,
              lineHeight: 1.5,
              maxWidth: 520,
              marginBottom: "2.8rem",
              fontWeight: 500,
            }}
          >
            {t.hero.desc}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <BtnChrome href="#contato">{t.hero.ctaPrimary}</BtnChrome>
            <BtnGhost href="#veiculos">{t.hero.ctaSecondary}</BtnGhost>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${theme.bd}`,
            }}
          >
            {t.hero.stats.map(({ value, label }) => {
              return (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: "2.1rem",
                      color: theme.cr7,
                      lineHeight: 1,
                      fontWeight: 700,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: ".66rem",
                      letterSpacing: ".2em",
                      color: theme.textLo,
                      textTransform: "uppercase",
                      marginTop: ".25rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "4rem",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: ".8rem",
            fontSize: ".66rem",
            letterSpacing: ".3em",
            color: theme.textLo,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 36, height: 1, background: theme.cr3, animation: "lineBreath 2s ease-in-out infinite" }} />
          {t.hero.scroll}
        </div>
      )}
    </section>
  );
}

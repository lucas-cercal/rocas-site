export const theme = {
  bg0: "#03060d", bg1: "#070d1a", bg2: "#0b1424",
  bg3: "#0f1b31", bg4: "#142542",
  cr3: "#6782a9", cr4: "#8fa8cf", cr5: "#b9cbed",
  cr6: "#d2def5", cr7: "#e6eeff", cr8: "#f4f8ff",
  accent: "#9ec4ff", accentDim: "#5f87c3",
  textMd: "#9eb4d8", textLo: "#6f86aa",
  bd: "rgba(142,180,237,0.15)", bdAct: "rgba(142,180,237,0.32)",
};

export const globalStyles = `
  @import url('https://fonts.cdnfonts.com/css/neue-montreal');
  :root {
    --font-title: 'Neue Montreal', sans-serif;
    --font-body: 'Neue Montreal', sans-serif;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: clamp(17px, 0.5vw + 13px, 20px); }
  body { font-family: var(--font-body); font-weight: 500; font-size: 1.03rem; background: ${theme.bg1}; color: ${theme.cr5}; overflow-x: hidden; margin: 0; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: ${theme.bg0}; }
  ::-webkit-scrollbar-thumb { background: ${theme.cr3}; border-radius: 2px; }
  body::after {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes lineBreath { 0%,100%{width:36px;opacity:1} 50%{width:18px;opacity:.5} }
  @keyframes scrollPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.6)} }
`;

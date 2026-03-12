import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { grantAnalyticsConsent, hasStoredConsent } from "./constants/analytics";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";

if (hasStoredConsent()) {
  grantAnalyticsConsent();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);

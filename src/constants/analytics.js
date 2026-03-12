export const GA_MEASUREMENT_ID = "G-DXCV5LK4XS";
export const CONSENT_STORAGE_KEY = "rocas:site-consent:v1";

export function grantAnalyticsConsent() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
}

export function hasStoredConsent() {
  if (typeof window === "undefined") return false;
  return Boolean(window.localStorage.getItem(CONSENT_STORAGE_KEY));
}

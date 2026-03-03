import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/LanguageContext";
import "./ConsentModal.css";

const CONSENT_STORAGE_KEY = "rocas:site-consent:v1";

function ExternalArrow() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function ConsentModal() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open || typeof document === "undefined") return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  const accept = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({ acceptedAt: new Date().toISOString() }),
      );
    }
    setOpen(false);
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="consent-modal-title" className="consent-overlay">
      <div className="consent-modal">
        <div className="consent-watermark">ROCAS</div>

        <div className="consent-tag">{t.consentModal.tag}</div>

        <h2 id="consent-modal-title" className="consent-title">
          {t.consentModal.titlePrefix} <strong>{t.consentModal.titleHighlight}</strong>
          <br />
          {t.consentModal.titleSuffix}
        </h2>

        <p className="consent-desc">{t.consentModal.description}</p>

        <div className="consent-docs">
          <a className="consent-doc-link" href="#privacidade">
            {t.consentModal.privacy}
            <ExternalArrow />
          </a>
          <a className="consent-doc-link" href="#cookies">
            {t.consentModal.cookies}
            <ExternalArrow />
          </a>
          <a className="consent-doc-link" href="#termos">
            {t.consentModal.terms}
            <ExternalArrow />
          </a>
        </div>

        <label className={`consent-check-row${checked ? " is-checked" : ""}`}>
          <input
            className="consent-check-input"
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <span className="consent-custom-check">
            <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <span className="consent-check-label">{t.consentModal.checkbox}</span>
        </label>

        <p className="consent-note">{t.consentModal.note}</p>

        <button type="button" className="consent-button" disabled={!checked} onClick={accept}>
          {t.consentModal.accept}
        </button>
      </div>
    </div>
  );
}

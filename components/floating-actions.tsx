"use client";

import type { Locale } from "@/lib/content";

const PHONE = "+306973635835";
const CV_HREF = "/cv/Dionisios_Iliopoulos_CV.pdf";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.4 18.4 4 21l3.2-1a8.5 8.5 0 1 0-1.8-1.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.2 9.1c.6 2.4 2.3 4.1 4.7 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.2 3.8 4.8 5.2c-.8.5-1.1 1.4-.8 2.3 1.7 5.4 5.1 8.8 10.5 10.5.9.3 1.8 0 2.3-.8l1.4-2.4-3.6-2.2-1.7 1.6c-2.1-.9-3.8-2.6-4.7-4.7l1.6-1.7-2.6-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FloatingActions({ locale }: { locale: Locale }) {
  const whatsappText =
    locale === "el"
      ? "Γεια σου Διονύση, είδα το portfolio σου και θα ήθελα να συζητήσουμε για ένα project."
      : "Hi Dionisios, I saw your portfolio and I would like to discuss a project.";

  const whatsappHref = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <nav
      className="floating-actions"
      aria-label={locale === "el" ? "Γρήγορες ενέργειες επικοινωνίας" : "Quick contact actions"}
    >
      <a
        className="floating-action floating-action-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={locale === "el" ? "Επικοινωνία μέσω WhatsApp" : "Contact via WhatsApp"}
      >
        <ChatIcon />
        <span>WhatsApp</span>
      </a>
      <a
        className="floating-action floating-action-call"
        href={`tel:${PHONE}`}
        aria-label={locale === "el" ? "Κλήση στο +30 697 363 5835" : "Call +30 697 363 5835"}
      >
        <PhoneIcon />
        <span>{locale === "el" ? "Κλήση" : "Call"}</span>
      </a>
      <a
        className="floating-action floating-action-cv"
        href={CV_HREF}
        download="Dionisios_Iliopoulos_CV.pdf"
        aria-label={locale === "el" ? "Λήψη βιογραφικού" : "Download CV"}
      >
        <DownloadIcon />
        <span>CV</span>
      </a>
    </nav>
  );
}

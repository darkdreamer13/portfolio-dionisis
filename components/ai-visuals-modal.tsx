"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/content";

type Visual = { src: string; label: string; badge: string };
const base = "/assets/ai-visuals/";

function VisualImage({ visual, onOpen }: { visual: Visual; onOpen: (visual: Visual) => void }) {
  return <figure className="av-media">
    <button type="button" className="av-image" onClick={() => onOpen(visual)} aria-label={visual.label + " ↗"}>
      <img src={visual.src} alt={visual.label} loading="lazy" width={visual.src.endsWith("source.webp") ? 1538 : 1122} height={visual.src.endsWith("source.webp") ? 2048 : 1402} />
      <span aria-hidden="true">↗</span>
    </button>
    <figcaption><strong>{visual.label}</strong><small>{visual.badge}</small></figcaption>
  </figure>;
}

export default function AIVisualsModal({ locale, onClose }: { locale: Locale; onClose: () => void }) {
  const t = (el: string, en: string) => locale === "el" ? el : en;
  const [expanded, setExpanded] = useState<Visual | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageTrigger = useRef<HTMLElement | null>(null);
  const closeLabel = t("Κλείσιμο", "Close");
  const visuals: Visual[] = [
    { src: base + "source.webp", label: t("Η αρχική φωτογραφία", "The original photograph"), badge: t("ΠΡΙΝ", "BEFORE") },
    { src: base + "creative.webp", label: t("Το τελικό creative", "The final creative"), badge: t("ΜΕΤΑ · PHOTO + AI", "AFTER · PHOTO + AI") },
    { src: base + "pilates.webp", label: "Pilates training creative", badge: "PHOTO + AI" },
    { src: base + "street.webp", label: t("Σύνθεση πραγματικής λήψης & AI", "Real photography & AI composition"), badge: "AI-ADDED PEOPLE" },
  ];

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.body.style.overflow = previous; trigger?.focus(); };
  }, []);

  useEffect(() => {
    if (expanded) lightboxRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    else imageTrigger.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (expanded) setExpanded(null); else onClose();
      }
      if (event.key !== "Tab") return;
      const root = expanded ? lightboxRef.current : dialogRef.current;
      const elements = root?.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]');
      if (!elements?.length) return;
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expanded, onClose]);

  const openImage = (visual: Visual) => {
    imageTrigger.current = document.activeElement as HTMLElement;
    setExpanded(visual);
  };
  const navigate = (id: string) => {
    const target = dialogRef.current?.querySelector<HTMLElement>("#" + id);
    target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  return <div className="modal-backdrop" onMouseDown={onClose}>
    <article ref={dialogRef} className="case-modal ai-visuals-modal" role="dialog" aria-modal="true" aria-labelledby="av-title" inert={expanded ? true : undefined} onMouseDown={event => event.stopPropagation()}>
      <header className="case-modal-header">
        <span className="case-modal-topline">AI VISUALS · SELECTED CREATIVE WORK</span>
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label={closeLabel}><span aria-hidden="true">×</span><span>{closeLabel}</span></button>
      </header>
      <div className="case-modal-body">
        <section className="av-intro">
          <div><div className="case-kicker">REAL PHOTOGRAPHY × GENERATIVE AI</div><h2 id="av-title">AI Visuals &amp;<br />Creative Production</h2><p className="av-lead">{t("Από την πραγματική φωτογραφία στο τελικό creative. Επιλεγμένα έργα όπου το AI υπηρετεί μια συγκεκριμένη δημιουργική ανάγκη.", "From real photography to the final creative. Selected work where AI serves a specific creative need.")}</p></div>
          <aside className="av-aside"><div className="case-kicker">{t("Η ΔΙΚΗ ΜΟΥ ΣΥΜΒΟΛΗ", "MY CONTRIBUTION")}</div><p>{t("Δημιουργική κατεύθυνση, prompting, επιλογή και επεξεργασία εικόνων, διορθώσεις και τελική σύνθεση.", "Creative direction, prompting, image selection and editing, corrections and final composition.")}</p><div className="case-modal-topline">{t("ΕΡΓΑΛΕΙΑ ΠΟΥ ΧΡΗΣΙΜΟΠΟΙΩ", "TOOLS I USE")}</div><div className="tool-cloud"><span>ChatGPT Image Generation</span><span>Midjourney</span></div></aside>
        </section>
        <nav className="av-nav" aria-label={t("Έργα AI", "AI work")}>
          <button type="button" onClick={() => navigate("av-transformation")}>{t("01 / Πριν & μετά", "01 / Before & after")}</button>
          <button type="button" onClick={() => navigate("av-environment")}>{t("02 / Αλλαγή περιβάλλοντος", "02 / Background replacement")}</button>
          <button type="button" onClick={() => navigate("av-people")}>{t("03 / Προσθήκη ανθρώπων", "03 / Adding people")}</button>
        </nav>
        <section className="av-section" id="av-transformation">
          <div className="av-section-head"><div><div className="case-kicker">01 / PHOTO TO CREATIVE</div><h3>{t("Μια φωτογραφία. Μια νέα δημιουργική εκδοχή.", "One photograph. A new creative interpretation.")}</h3></div><p>{t("Συνδυασμός πραγματικής φωτογραφίας και AI, με προσαρμογή του περιβάλλοντος και της σύνθεσης για το τελικό επικοινωνιακό μήνυμα.", "Combining real photography and AI, adapting the environment and composition to support the final message.")}</p></div>
          <div className="av-compare"><VisualImage visual={visuals[0]} onOpen={openImage} /><VisualImage visual={visuals[1]} onOpen={openImage} /></div>
        </section>
        <section className="av-section av-row" id="av-environment">
          <div className="av-story"><div className="case-kicker">02 / BACKGROUND REPLACEMENT</div><h3>{t("Το θέμα παραμένει. Το περιβάλλον αλλάζει.", "Keep the subject. Change the setting.")}</h3><p>{t("Το brief απαιτούσε να μη φαίνεται το συγκεκριμένο γυμναστήριο της αρχικής λήψης.", "The brief required that the original gym should not be recognizable.")}</p><p>{t("Αντικατέστησα το φόντο με AI, διατηρώντας τους ανθρώπους της πραγματικής φωτογραφίας, και το ενσωμάτωσα στο διαφημιστικό δημιουργικό για εκπαίδευση Pilates.", "I replaced the background using AI, retained the people from the real photograph and incorporated it into a Pilates teacher training ad creative.")}</p><p className="av-note">{t("Η παρέμβαση: πλήρης αλλαγή φόντου, με αφετηρία μια υπαρκτή φωτογραφία.", "The intervention: a complete background replacement, starting from a real photograph.")}</p></div>
          <VisualImage visual={visuals[2]} onOpen={openImage} />
        </section>
        <section className="av-section av-row av-reverse" id="av-people">
          <div className="av-story"><div className="case-kicker">03 / AI SCENE ENHANCEMENT</div><h3>{t("Μια πραγματική τοποθεσία. Μια νέα ανθρώπινη παρουσία.", "A real location. A new human presence.")}</h3><p>{t("Χρησιμοποίησα την πραγματική φωτογραφία ως βάση και πρόσθεσα ανθρώπους με AI για να διαμορφώσω μια πιο ζωντανή σκηνή.", "I used the real photograph as a base and added people with AI to create a livelier scene.")}</p><p className="av-note">{t("Οι άνθρωποι που εμφανίζονται στο creative δεν υπήρχαν στην αρχική λήψη.", "The people shown in the creative were not present in the original photograph.")}</p></div><VisualImage visual={visuals[3]} onOpen={openImage} />
        </section>
        <section className="av-section"><div className="case-kicker">{t("ΠΩΣ ΔΟΥΛΕΥΩ", "HOW I WORK")}</div><h3>{t("Από το brief στην τελική εικόνα.", "From the brief to the final image.")}</h3><div className="av-process">
          <div><span>01 / {t("ΚΑΤΕΥΘΥΝΣΗ", "DIRECTION")}</span><h4>{t("Πρώτα ο στόχος", "Start with the goal")}</h4><p>{t("Ορίζω το μήνυμα, τη χρήση του creative και τα στοιχεία της πραγματικής εικόνας που πρέπει να διατηρηθούν.", "I define the message, the creative's purpose and the elements of the real image that need to be preserved.")}</p></div>
          <div><span>02 / {t("ΔΗΜΙΟΥΡΓΙΑ", "CREATION")}</span><h4>{t("Παραλλαγές & επιλογή", "Variations & selection")}</h4><p>{t("Δοκιμάζω prompts και διαφορετικές εκδοχές μέχρι η εικόνα να εξυπηρετεί τη ζητούμενη σύνθεση.", "I explore prompts and variations until the image supports the intended composition.")}</p></div>
          <div><span>03 / {t("ΕΠΕΞΕΡΓΑΣΙΑ", "REFINEMENT")}</span><h4>{t("Έλεγχος στη λεπτομέρεια", "Attention to detail")}</h4><p>{t("Διορθώνω ανατομία, φωτισμό, υφές και ατέλειες με retouching ή στοχευμένα prompts, όπου χρειάζεται.", "I correct anatomy, lighting, textures and artifacts through retouching or targeted prompts where needed.")}</p></div>
        </div></section>
        <footer className="av-footer"><span>{t("Πραγματική φωτογραφία, δημιουργική πρόθεση και προσεκτική επεξεργασία.", "Real photography, creative intent and careful refinement.")}</span><button type="button" className="modal-close" onClick={onClose}>{t("Επιστροφή στο portfolio ↗", "Back to portfolio ↗")}</button></footer>
      </div>
    </article>
    {expanded ? <div ref={lightboxRef} className="case-lightbox" role="dialog" aria-modal="true" aria-label={expanded.label} onMouseDown={event => { event.stopPropagation(); setExpanded(null); }}>
      <button type="button" className="case-lightbox-close" aria-label={closeLabel} onClick={() => setExpanded(null)}>×</button>
      <figure onMouseDown={event => event.stopPropagation()}><img src={expanded.src} alt={expanded.label} /><figcaption>{expanded.label}</figcaption></figure>
    </div> : null}
  </div>;
}

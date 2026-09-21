"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import ProjectModal from "@/components/project-modal";
import MoreWorkModal from "@/components/more-work-modal";
import ProfileModal from "@/components/profile-modal";
import { MobileCapabilities, MobileProcess, MobileSelectedWork } from "@/components/mobile-portfolio-sections";
import { moreWorkCasesByLocale, projectsByLocale, siteCopy, type Locale } from "@/lib/content";

const productionImages = [
  "/assets/production-videographer.png",
  "/assets/production-sea.png",
  "/assets/production-food.png",
];

const MORE_WORK_LOGOS: Record<string, string> = {
  "Pralina Pastry": "/assets/more-work/pralina.jpeg",
  "CrazyBloom": "/assets/more-work/crazybloom.jpeg",
  "Ipsipetis Travel": "/assets/more-work/ipsipetis.png",
  "PHAOS": "/assets/more-work/phaos.jpeg",
};

const EMAIL_HREF = "mailto:geo178@hotmail.com";
const PHONE_HREF = "tel:+306973635835";
const LINKEDIN_HREF = "https://www.linkedin.com/in/diliopoulos/";
const UPWORK_HREF = "https://www.upwork.com/freelancers/~0191fc300963a39cd2?mp_source=share";
const CV_HREF = "/cv/Dionisios_Iliopoulos_CV.pdf";

export default function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const projects = projectsByLocale[locale];
  const moreWorkCases = moreWorkCasesByLocale[locale];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedMoreWorkId, setSelectedMoreWorkId] = useState<string | null>(null);
  const [profileModal, setProfileModal] = useState<"about" | "thinking" | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [projects, selectedId],
  );

  const selectedMoreWork = useMemo(
    () => moreWorkCases.find((project) => project.id === selectedMoreWorkId) ?? null,
    [moreWorkCases, selectedMoreWorkId],
  );

  const closeProject = useCallback(() => {
    setSelectedId(null);
    if (window.location.hash.startsWith("#case-")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const openProject = useCallback((id: string) => {
    setSelectedMoreWorkId(null);
    setSelectedId(id);
    window.history.replaceState(null, "", "#case-" + id);
  }, []);

  const closeMoreWork = useCallback(() => {
    setSelectedMoreWorkId(null);
    if (window.location.hash.startsWith("#more-")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const openMoreWork = useCallback((id: string) => {
    setSelectedId(null);
    setSelectedMoreWorkId(id);
    window.history.replaceState(null, "", "#more-" + id);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;

    if (window.location.hash.startsWith("#case-")) {
      const hashId = window.location.hash.replace("#case-", "");
      if (hashId && projects.some((project) => project.id === hashId)) {
        setSelectedId(hashId);
      }
    }

    if (window.location.hash.startsWith("#more-")) {
      const hashId = window.location.hash.replace("#more-", "");
      if (hashId && moreWorkCases.some((project) => project.id === hashId)) {
        setSelectedMoreWorkId(hashId);
      }
    }
  }, [locale, projects, moreWorkCases]);

  return (
    <main>
      <header className="site-header">
        <Link href={"/" + locale} className="brand-name">
          {locale === "el" ? "Διονύσης Ηλιόπουλος" : "Dionisios Iliopoulos"}
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">{copy.nav.work}</a>
          <a href="#capabilities">{copy.nav.capabilities}</a>
          <a href="#about">{copy.nav.about}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <Link className="language-switch" href={locale === "el" ? "/en" : "/el"}>
            {locale === "el" ? "EN" : "EL"}
          </Link>
          <a className="button button-primary header-cta" href={EMAIL_HREF}>
            {copy.nav.talk}
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">{copy.hero.eyebrow}</div>
          <h1>
            <span className="hero-title-default">{copy.hero.title}</span>
            <span className="hero-title-desktop">
              {locale === "el" ? (
                <>
                  Στρατηγική, περιεχόμενο
                  <br />
                  και τεχνολογία.
                </>
              ) : (
                <>
                  Strategy, content
                  <br />
                  and technology.
                </>
              )}
            </span>
          </h1>
          <p className="hero-accent">{copy.hero.accent}</p>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {copy.hero.primary}
            </a>
            <a className="button button-secondary" href={EMAIL_HREF}>
              {copy.hero.secondary}
            </a>
          </div>
          <p className="hero-location">{copy.hero.location}</p>
        </div>

        <div className="hero-visual" aria-label="Portrait and digital project highlights">
          <img className="hero-photo" src="/assets/hero.png" alt="" />
          <div className="hero-fade hero-fade-left" />
          <div className="hero-fade hero-fade-right" />
          <div className="hero-note hero-note-a">
            <strong>{copy.hero.noteA}</strong>
            <span>{copy.hero.noteB}</span>
          </div>
          <div className="hero-note hero-note-b">
            <strong>{copy.hero.noteC}</strong>
            <span>{copy.hero.noteD}</span>
          </div>
          <div className="hero-note hero-metric">
            <strong>{copy.hero.metric}</strong>
            <span>{copy.hero.metricLabel}</span>
          </div>
          <div className="hero-word-list">
            {copy.hero.words.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <div className="hero-greek-list">
            {copy.hero.greekWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </div>
      </section>

      <div id="work" className="section-anchor-wrap">
      <section className="section section-base selected-work desktop-only">
        <div className="section-heading">
          <div className="eyebrow">{copy.selected.eyebrow}</div>
          <h2>{copy.selected.title}</h2>
        </div>
        <div className="work-layout">
          <div className="project-grid">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className="project-card"
                data-project={project.id}
                onClick={() => openProject(project.id)}
                aria-label={project.title + " — " + project.tagline}
              >
                <span
                  className="project-card-visual"
                  style={{ background: project.cardBackground }}
                >
                  <img src={project.logo} alt="" />
                </span>
                <span className="project-card-copy">
                  <strong>{project.title}</strong>
                  <span>{project.tagline}</span>
                  <small>{project.cardCategories}</small>
                </span>
              </button>
            ))}
          </div>
          <aside
            className="thinking-card thinking-card-interactive"
            role="button"
            tabIndex={0}
            onClick={() => setProfileModal("thinking")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setProfileModal("thinking");
              }
            }}
          >
            <div className="eyebrow inverse-eyebrow">{copy.selected.thinkingEyebrow}</div>
            <div className="thinking-rule" />
            <h3>{copy.selected.thinkingTitle}</h3>
            <p>{copy.selected.thinkingBody}</p>
            <strong>{copy.selected.thinkingClosing}</strong>
            <span className="thinking-open">{copy.selected.thinkingOpen}</span>
          </aside>
        </div>
      </section>
      <MobileSelectedWork
        locale={locale}
        copy={copy.selected}
        projects={projects}
        onOpen={openProject}
        onOpenThinking={() => setProfileModal("thinking")}
      />
      </div>

      <div id="capabilities" className="section-anchor-wrap">
      <section className="section capabilities desktop-only">
        <div className="section-heading section-heading-inline">
          <div>
            <div className="eyebrow">{copy.capabilities.eyebrow}</div>
            <h2>{copy.capabilities.title}</h2>
          </div>
          <a href="#about">{copy.capabilities.link}</a>
        </div>
        <div className="capability-grid">
          {copy.capabilities.items.map(([title, description], index) => (
            <article className="capability-card" key={title}>
              <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <MobileCapabilities locale={locale} copy={copy.capabilities} />
      </div>

      <section className="section process desktop-only">
        <div className="section-heading">
          <div className="eyebrow">{copy.process.eyebrow}</div>
          <h2>{copy.process.title}</h2>
        </div>
        <div className="process-grid">
          <div className="process-steps">
            {copy.process.items.map(([number, title, description]) => (
              <article key={number} className="process-step">
                <div className="process-number">{number}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="process-statement">
            <div className="blue-rule" />
            <p>{copy.process.statement}</p>
          </div>
        </div>
      </section>
      <MobileProcess locale={locale} copy={copy.process} />

      <section className="ai-section">
        <div className="ai-orb" aria-hidden="true" />
        <h2>{copy.ai.title}</h2>
        <div className="ai-rail">
          {copy.ai.items.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="production-collaboration">
        <article className="production-card">
          <div className="production-copy">
            <div className="eyebrow">{copy.production.eyebrow}</div>
            <h2>{copy.production.title}</h2>
            <p>{copy.production.body}</p>
          </div>
          <div className="production-images" aria-hidden="true">
            {productionImages.map((src, index) => (
              <img key={src} src={src} alt="" className={"production-image production-image-" + (index + 1)} />
            ))}
          </div>
          <div className="production-flow">
            {copy.production.flow.map((step, index) => (
              <span key={step}>
                {step}
                {index < copy.production.flow.length - 1 ? <b>→</b> : null}
              </span>
            ))}
          </div>
        </article>

        <article className="collaboration-card">
          <div className="eyebrow">{copy.collaboration.eyebrow}</div>
          <h2>{copy.collaboration.title}</h2>
          <p>{copy.collaboration.body}</p>
          <div className="role-pills">
            {copy.collaboration.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <strong className="collaboration-closing">{copy.collaboration.closing}</strong>
        </article>
      </section>

      <section className="about-tools" id="about">
        <article className="about-block">
          <div className="eyebrow">{copy.about.eyebrow}</div>
          <h2>{copy.about.title}</h2>
          <p>{copy.about.body}</p>
          <p className="about-cv-prompt">{copy.about.cvPrompt}</p>
          <div className="about-actions">
            <a
              href={CV_HREF}
              className="button button-secondary"
              download="Dionisios_Iliopoulos_CV.pdf"
            >
              {copy.about.button}
            </a>
            <button
              type="button"
              className="about-story-button"
              onClick={() => setProfileModal("about")}
            >
              {copy.about.storyButton}
            </button>
          </div>
        </article>
        <article className="tools-block">
          <div className="eyebrow">{copy.tools.eyebrow}</div>
          <h2>{copy.tools.title}</h2>
          <div className="tool-cloud">
            {copy.tools.items.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="section more-work">
        <div className="section-heading">
          <div className="eyebrow">{copy.moreWork.eyebrow}</div>
          <h2>{copy.moreWork.title}</h2>
        </div>
        <div className="more-work-grid">
          {copy.moreWork.items.map(([name, descriptor], index) => {
            const project = moreWorkCases[index];
            return (
              <button
                key={name}
                type="button"
                className="more-work-item"
                onClick={() => openMoreWork(project.id)}
                aria-label={name + " — " + descriptor}
              >
                <div className="more-work-logo" aria-hidden="true">
                  <img src={MORE_WORK_LOGOS[name]} alt="" />
                </div>
                <div className="more-work-copy">
                  <strong>{name}</strong>
                  <span>{descriptor}</span>
                </div>
                <span className="more-work-arrow" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>
      </section>


      <section className="final-cta" id="contact">
        <div>
          <div className="eyebrow inverse-eyebrow">{copy.cta.eyebrow}</div>
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.body}</p>
        </div>
        <div className="final-cta-actions">
          <a className="button button-primary" href={EMAIL_HREF}>
            {copy.cta.button}
          </a>
          <a className="button button-call" href={PHONE_HREF}>
            {locale === "el" ? "Κλήση" : "Call"}
          </a>
        </div>
        <strong>{copy.cta.closing}</strong>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{copy.footer.name}</strong>
          <span>{copy.footer.descriptor}</span>
        </div>
        <div className="footer-meta">
          <span>{copy.footer.location}</span>
          <div className="footer-links">
            <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">LinkedIn</a>
            <span aria-hidden="true">·</span>
            <a href={UPWORK_HREF} target="_blank" rel="noreferrer">Upwork</a>
            <span aria-hidden="true">·</span>
            <a href={CV_HREF} download="Dionisios_Iliopoulos_CV.pdf">CV ↓</a>
          </div>
          <a className="footer-phone" href={PHONE_HREF}>+30 697 363 5835</a>
        </div>
      </footer>

      {selectedProject ? (
        <ProjectModal project={selectedProject} labels={copy.modal} onClose={closeProject} />
      ) : null}

      {selectedMoreWork ? (
        <MoreWorkModal project={selectedMoreWork} locale={locale} onClose={closeMoreWork} />
      ) : null}

      {profileModal ? (
        <ProfileModal
          mode={profileModal}
          locale={locale}
          onClose={() => setProfileModal(null)}
        />
      ) : null}
    </main>
  );
}

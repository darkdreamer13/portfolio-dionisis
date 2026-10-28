"use client";

import { useRef, useState } from "react";
import type { Locale } from "@/lib/content";
import { testimonialsCopy } from "@/lib/v3-content";

export default function Testimonials({ locale }: { locale: Locale }) {
  const copy = testimonialsCopy[locale];
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 12;
    setActive(Math.min(copy.items.length - 1, Math.round(rail.scrollLeft / step)));
  };

  return (
    <section className="v3-testimonials" aria-labelledby="v3-testimonials-title">
      <div className="eyebrow">{copy.eyebrow}</div>
      <h2 id="v3-testimonials-title">{copy.title}</h2>
      <div className="v3-testimonial-grid" ref={railRef} onScroll={onScroll}>
        {copy.items.map((item, index) => (
          <figure className={"v3-testimonial" + (index === 0 ? " is-featured" : "")} key={item.name}>
            <div className="v3-stars" aria-label="5/5">★★★★★</div>
            <blockquote>«{item.quote}»</blockquote>
            <figcaption>
              <span className="v3-avatar" aria-hidden="true">
                {item.name.charAt(0).toUpperCase()}
              </span>
              <strong>{item.name}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="v3-rail-indicator mobile-only" aria-hidden="true">
        {copy.items.map((item, index) => (
          <span key={item.name} className={index === active ? "is-active" : ""} />
        ))}
        <small>
          {active + 1} / {copy.items.length}
        </small>
      </div>
    </section>
  );
}

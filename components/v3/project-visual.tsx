import Image from "next/image";
import type { ProjectCase } from "@/lib/content";
import type { ProjectExtra } from "@/lib/v3-content";

/**
 * Card / hero visual for a project: the live site screenshot with a small logo
 * badge, or a brand tile with the logo when there is no screenshot to show.
 */
export default function ProjectVisual({
  project,
  extra,
  sizes,
  className = "",
  priority = false,
}: {
  project: ProjectCase;
  extra?: ProjectExtra;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  if (extra?.screenshot) {
    return (
      <span className={"v3-visual " + className}>
        <Image
          src={extra.screenshot}
          alt={extra.screenshotAlt ?? project.title}
          fill
          sizes={sizes}
          priority={priority}
          className="v3-visual-shot"
        />
        <span className="v3-logo-badge" style={{ background: project.cardBackground }} aria-hidden="true">
          <img src={project.logo} alt="" />
        </span>
      </span>
    );
  }

  return (
    <span className={"v3-visual v3-visual-brand " + className} style={{ background: project.cardBackground }}>
      <img src={project.logo} alt={project.title + " logo"} />
    </span>
  );
}

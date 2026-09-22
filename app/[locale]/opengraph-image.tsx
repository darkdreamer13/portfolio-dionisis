import { ImageResponse } from "next/og";

export const alt = "Dionisios Iliopoulos — Digital Strategy, Content, Web and AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isGreek = locale === "el";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#10141a",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#6f9bff", fontSize: 24, letterSpacing: 2 }}>
          DIGITAL STRATEGY · CONTENT · WEB · AI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1 }}>
            Dionisios Iliopoulos
          </div>
          <div style={{ display: "flex", maxWidth: 900, fontSize: 36, lineHeight: 1.25, color: "#c8cfda" }}>
            {isGreek
              ? "Στρατηγική, περιεχόμενο και τεχνολογία σε ένα ενιαίο digital project."
              : "Strategy, content and technology in one connected digital project."}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8f98a8" }}>
          Kalamata, Greece · Available remotely
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020617",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#7dd3fc", letterSpacing: 4 }}>PORTFOLIO</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.04 }}>{site.name}</div>
          <div style={{ maxWidth: 860, fontSize: 32, lineHeight: 1.35, color: "#cbd5e1" }}>
            Full-stack developer building practical, user-centered systems.
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8" }}>React / Next.js / Node.js / Firebase / SQL</div>
      </div>
    ),
    size,
  );
}

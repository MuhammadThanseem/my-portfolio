import { ImageResponse } from "next/og";
import { profile } from "./lib/data";

export const alt = `${profile.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05060a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(99,102,241,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(34,211,238,0.3), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 28,
            color: "#67e8f9",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 84,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 40,
            fontWeight: 600,
            color: "#c7d2fe",
          }}
        >
          {profile.titles[0]} · {profile.titles[1]}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          {profile.location}
        </div>
      </div>
    ),
    { ...size }
  );
}

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
          background: "#0b0a07",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(133,151,108,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(163,179,137,0.3), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 28,
            color: "#c3cdad",
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
            color: "#dbe2cf",
          }}
        >
          {profile.titles[0]} · {profile.titles[1]}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#a8a29e",
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

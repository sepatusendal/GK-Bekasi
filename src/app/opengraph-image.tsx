// Bang Wira - github.com/sepatusendal
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

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
          backgroundColor: "#f7f5ef",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 20,
              height: 20,
              backgroundColor: "#ed1c24",
            }}
          />
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#ed1c24",
            }}
          >
            {siteConfig.name}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: -2,
            textTransform: "uppercase",
            color: "#111111",
          }}
        >
          <span>Gerak Bareng.</span>
          <span style={{ color: "#ed1c24" }}>Bikin Dampak.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            color: "#111111",
            opacity: 0.7,
          }}
        >
          {siteConfig.slogan}
        </div>
      </div>
    ),
    { ...size },
  );
}

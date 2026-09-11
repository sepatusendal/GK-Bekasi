"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="id">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "6rem 1.5rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span style={{ fontSize: "4rem", fontWeight: 700, color: "#c62828" }}>
          OOPS
        </span>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, textTransform: "uppercase" }}>
          Waduh, seluruh situsnya lagi down nih bangg, maap dah yakk
        </h1>
        <p style={{ maxWidth: "28rem", opacity: 0.7 }}>
          Ini errornya lumayan niat bangg, sampai semua halaman ikut kena
          imbasnya. Ripres dulu ya bang, mudah-mudahan abis ini
          udah baikan, hehe.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: "0.75rem 1.5rem",
            fontWeight: 700,
            textTransform: "uppercase",
            background: "#c62828",
            color: "#fff",
            border: "2px solid #000",
            cursor: "pointer",
          }}
        >
          Coba Lagi
        </button>
      </body>
    </html>
  );
}

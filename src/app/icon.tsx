import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b2a20",
          color: "#f4ead8",
          fontSize: 38,
          fontFamily: "Georgia, serif",
          border: "4px solid #e0a32e",
        }}
      >
        P
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { DATA } from "@/data/resume";

export const runtime = "nodejs";

const getFontData = () => {
  try {
    const cabinetGrotesk = readFileSync(
      join(process.cwd(), "public/fonts/CabinetGrotesk-Medium.ttf")
    );
    const clashDisplay = readFileSync(
      join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf")
    );
    return { cabinetGrotesk, clashDisplay };
  } catch (error) {
    return null;
  }
};

const getAvatarDataUrl = () => {
  try {
    const buffer = readFileSync(join(process.cwd(), "public/me.png"));
    return `data:image/png;base64,${buffer.toString("base64")}`;
  } catch {
    return null;
  }
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Project Showcase";
    const desc = searchParams.get("desc") || DATA.description;
    const techString = searchParams.get("tech");
    const tech = techString ? techString.split(",") : ["Next.js", "TypeScript", "React"];

    const fontData = getFontData();
    const avatarUrl = getAvatarDataUrl();

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0a0a0a",
            color: "#ffffff",
            padding: "36px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#121212",
              padding: "48px",
              border: "1px solid #262626",
              borderRadius: "24px",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <div
                style={{
                  fontSize: "14px",
                  color: "#a3a3a3",
                  backgroundColor: "#262626",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  border: "1px solid #404040",
                }}
              >
                Project Showcase • {DATA.name}
              </div>
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt={DATA.name}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    border: "1px solid #404040",
                  }}
                  width="48"
                  height="48"
                />
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontSize: "44px",
                  fontWeight: "600",
                  lineHeight: "1.1",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "1.4",
                  color: "#a3a3a3",
                  maxWidth: "900px",
                }}
              >
                {desc}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap" }}>
              {tech.map((item) => (
                <div
                  key={item}
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#e5e5e5",
                    backgroundColor: "#1c1c1c",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid #333333",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fontData
          ? [
              {
                name: "Cabinet Grotesk",
                data: fontData.cabinetGrotesk,
                weight: 400,
                style: "normal",
              },
              {
                name: "Clash Display",
                data: fontData.clashDisplay,
                weight: 600,
                style: "normal",
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    return new Response("Failed to generate project image", { status: 500 });
  }
}

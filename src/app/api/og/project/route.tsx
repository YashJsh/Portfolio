import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

const getFontData = () => {
    try {
        const clashDisplay = readFileSync(
            join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf")
        );
        return clashDisplay;
    } catch {
        return null;
    }
};

const getAvatarDataUrl = () => {
    try {
        const buffer = readFileSync(join(process.cwd(), "public/yashjsh-og.png"));
        return `data:image/png;base64,${buffer.toString("base64")}`;
    } catch {
        return null;
    }
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Project";
    const desc = searchParams.get("desc") || "";

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
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                    gap: "24px",
                }}
            >
                {avatarUrl && (
                    <img
                        src={avatarUrl}
                        alt={DATA.name}
                        width="100"
                        height="100"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                )}
                <div
                    style={{
                        fontFamily: "Clash Display",
                        fontSize: "44px",
                        fontWeight: 600,
                        color: "#111111",
                        letterSpacing: "-0.02em",
                        textAlign: "center",
                        maxWidth: "900px",
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </div>
                {desc && (
                    <div
                        style={{
                            fontSize: "18px",
                            color: "#666666",
                            textAlign: "center",
                            maxWidth: "700px",
                            lineHeight: 1.4,
                        }}
                    >
                        {desc}
                    </div>
                )}
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: fontData
                ? [
                    {
                        name: "Clash Display",
                        data: fontData,
                        weight: 600,
                        style: "normal" as const,
                    },
                ]
                : undefined,
        }
    );
}

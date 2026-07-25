import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const alt = "Blog";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

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

export default async function Image() {
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
                        width="120"
                        height="120"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                )}
                <div
                    style={{
                        fontFamily: "Clash Display",
                        fontSize: "48px",
                        fontWeight: 600,
                        color: "#111111",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Blog
                </div>
                <div
                    style={{
                        fontSize: "18px",
                        color: "#666666",
                        textAlign: "center",
                    }}
                >
                    Thoughts on software development, life, and more.
                </div>
            </div>
        ),
        {
            ...size,
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

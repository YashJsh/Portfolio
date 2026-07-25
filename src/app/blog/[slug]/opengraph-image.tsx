import { ImageResponse } from "next/og";
import { prisma } from "@/lib/db";
import { DATA } from "@/data/resume";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const alt = "Blog Post";
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

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const fontData = getFontData();
    const { slug } = await params;
    const post = await prisma.post.findUnique({ where: { slug } });
    const avatarUrl = getAvatarDataUrl();

    const title = post?.title || "Post Not Found";
    const date = post?.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        })
        : "";

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
                {date && (
                    <div
                        style={{
                            fontSize: "18px",
                            color: "#999999",
                        }}
                    >
                        {date}
                    </div>
                )}
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

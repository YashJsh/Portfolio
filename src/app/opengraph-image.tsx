 
import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const alt = DATA.name;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

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
        console.error("Failed to load fonts:", error);
        return null;
    }
};

const styles = {
    outerWrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        padding: "36px",
    },
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#121212",
        padding: "48px",
        border: "1px solid #262626",
        borderRadius: "24px",
        position: "relative",
    },
    leftColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: "1",
        paddingRight: "36px",
    },
    rightColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1c1c1c",
        padding: "24px",
        borderRadius: "20px",
        border: "1px solid #333333",
    },
    avatar: {
        width: "200px",
        height: "200px",
        borderRadius: "20px",
        border: "2px solid #404040",
        objectFit: "cover",
    },
    tag: {
        fontSize: "14px",
        color: "#a3a3a3",
        backgroundColor: "#262626",
        padding: "6px 14px",
        borderRadius: "100px",
        marginBottom: "16px",
        border: "1px solid #404040",
    },
    name: {
        fontFamily: "Clash Display",
        fontSize: "52px",
        fontWeight: "600",
        lineHeight: "1.1",
        color: "#ffffff",
        marginBottom: "12px",
        letterSpacing: "-0.02em",
    },
    description: {
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "1.5",
        color: "#a3a3a3",
        marginBottom: "28px",
    },
    skillsRow: {
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        flexWrap: "wrap",
    },
    skillBadge: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#e5e5e5",
        backgroundColor: "#171717",
        padding: "6px 12px",
        borderRadius: "8px",
        border: "1px solid #333333",
    },
} as const;

const getAvatarDataUrl = () => {
    try {
        const buffer = readFileSync(join(process.cwd(), "public/me.png"));
        return `data:image/png;base64,${buffer.toString("base64")}`;
    } catch {
        return null;
    }
};

export default async function Image() {
    try {
        const fontData = getFontData();
        const imageUrl = getAvatarDataUrl();
        const topSkills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Rust"];

        return new ImageResponse(
            (
                <div style={styles.outerWrapper}>
                    <div style={styles.wrapper}>
                        <div style={styles.leftColumn}>
                            <div style={styles.tag}>Portfolio & Developer</div>
                            <div style={styles.name}>{DATA.name}</div>
                            <div style={styles.description}>{DATA.description}</div>
                            <div style={styles.skillsRow}>
                                {topSkills.map((skill) => (
                                    <div key={skill} style={styles.skillBadge}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {imageUrl && (
                            <div style={styles.rightColumn}>
                                <img
                                    src={imageUrl}
                                    alt={DATA.name}
                                    style={styles.avatar}
                                    width="200"
                                    height="200"
                                />
                            </div>
                        )}
                    </div>
                </div>
            ),
            {
                ...size,
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
        console.error("Error generating OpenGraph image:", error);
        return new Response(
            `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
            {
                status: 500,
            }
        );
    }
}



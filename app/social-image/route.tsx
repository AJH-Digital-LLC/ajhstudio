import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
const font = readFile(path.join(process.cwd(), "public/fonts/inter-bold.ttf"));
const logo = readFile(path.join(process.cwd(), "public/brand/logo.png"));

function concise(value: string, limit: number) {
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit - 1);
  const space = cut.lastIndexOf(" ");
  return `${cut.slice(0, space > limit * 0.65 ? space : cut.length)}…`;
}

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams;
  const title = concise(q.get("title") || siteConfig.tagline, 130);
  const description = concise(q.get("description") || siteConfig.description, 145);
  const category = concise(q.get("category") || siteConfig.tagline, 48);
  const [fontData, logoData] = await Promise.all([font, logo]);
  const fontSize = title.length > 100 ? 48 : title.length > 65 ? 56 : 68;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0F2A44", color: "#FFFFFF", fontFamily: "Inter" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 130, padding: "30px 60px", background: "#FFFFFF", borderBottom: "6px solid #007BFF", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logoData.toString("base64")}`} width={330} height={64} alt="" />
        <div style={{ display: "flex", fontSize: 22, color: "#0F2A44" }}>{siteConfig.domain.toLowerCase()}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, padding: "36px 60px 32px" }}>
        <div style={{ display: "flex", color: "#7DD3FC", fontSize: 18, letterSpacing: 2, textTransform: "uppercase" }}>{category}</div>
        <div style={{ display: "flex", marginTop: 22, fontSize, lineHeight: 1.1, letterSpacing: -1.8, maxWidth: 1080, wordBreak: "break-word" }}>{title}</div>
        <div style={{ display: "flex", marginTop: 22, maxWidth: 1000, fontSize: 24, lineHeight: 1.35, color: "#E2E8F0", wordBreak: "break-word" }}>{description}</div>
        <div style={{ display: "flex", marginTop: "auto", paddingTop: 24, alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", width: 44, height: 5, background: "#38BDF8" }} />
          <div style={{ display: "flex", fontSize: 16, color: "#FFFFFF", letterSpacing: 1 }}>DIGITAL · CREATIVE · PROFESSIONAL SERVICES</div>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630, fonts: [{ name: "Inter", data: fontData, weight: 700, style: "normal" }], headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" } }
  );
}

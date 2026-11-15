import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import tokens from "../../brand/tokens/brand.tokens.json";

// Link-preview image for social posts and chat apps. Rendered once at build.
export const alt = "Your AI Side — Put AI on your side.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const c = tokens.color.light;
const { leftHalf, rightHalf } = tokens.logo;

// Satori lays out every element as a flex item, so lines are set explicitly.
const HEADLINE = ["Put AI on your", "side"];
const SUBLINE = ["Tools, agents and automation", "that work for you."];
const LABEL = "YOURAISIDE.COM · FIG. 01 — THE SEAM";

/**
 * Fetches a TTF subset (only the characters used) from Google Fonts.
 * Returns null on any failure so the build falls back to the default font
 * instead of failing.
 */
async function googleFont(family: string, weight: number, text: string) {
  try {
    const query = `family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await fetch(`https://fonts.googleapis.com/css2?${query}`).then(
      (res) => res.text(),
    );
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** Blends hex color `a` over `b` by `t` (0–1). */
function mix(a: string, b: string, t: number) {
  const channel = (hex: string, i: number) => parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16);
  const out = [0, 1, 2].map((i) =>
    Math.round(channel(a, i) * t + channel(b, i) * (1 - t))
      .toString(16)
      .padStart(2, "0"),
  );
  return `#${out.join("")}`;
}

/** The outlined mark with its construction guides, as an SVG data URI. */
function markWithGuides() {
  const dash = `stroke="${c.muted}" stroke-width="0.3" stroke-dasharray="1 1.4" fill="none"`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="46" cy="58" r="22" ${dash}/>
    <circle cx="54" cy="42" r="22" ${dash}/>
    <line x1="46" y1="8" x2="46" y2="92" ${dash}/>
    <line x1="54" y1="8" x2="54" y2="92" ${dash}/>
    <line x1="12" y1="58" x2="90" y2="58" ${dash}/>
    <line x1="10" y1="42" x2="90" y2="42" ${dash}/>
    <path d="${leftHalf.path}" fill="none" stroke="${c.fg}" stroke-width="5"/>
    <path d="${rightHalf.path}" fill="${c.accent}"/>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export default async function OpengraphImage() {
  const [display, body, mono, lockup] = await Promise.all([
    googleFont("Inter Tight", 700, `${HEADLINE.join(" ")}.`),
    googleFont("Inter", 400, SUBLINE.join(" ")),
    googleFont("JetBrains Mono", 400, LABEL),
    readFile(join(process.cwd(), "public/brand/logo/lockup-horizontal-light.svg")),
  ]);

  const fonts = [
    display && { name: "Inter Tight", data: display, weight: 700 as const },
    body && { name: "Inter", data: body, weight: 400 as const },
    mono && { name: "JetBrains Mono", data: mono, weight: 400 as const },
  ].filter((font) => font !== null);

  // Satori has no color-mix(): blend the line color 60% over the background.
  const grid = mix(c.line, c.bg, 0.6);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: c.bg,
          padding: 40,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            border: `2px solid ${c.line}`,
          }}
        >
          {/* Copy cell */}
          <div
            style={{
              width: 640,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "44px 48px",
              borderRight: `2px solid ${c.line}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
            <img
              src={`data:image/svg+xml;base64,${lockup.toString("base64")}`}
              width={232}
              height={62}
              alt=""
              style={{ marginLeft: -10 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Inter Tight",
                  fontWeight: 700,
                  fontSize: 76,
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                  color: c.fg,
                }}
              >
                <div style={{ display: "flex" }}>{HEADLINE[0]}</div>
                <div style={{ display: "flex" }}>
                  {HEADLINE[1]}
                  <span style={{ color: c.accent }}>.</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 22,
                  fontSize: 26,
                  lineHeight: 1.4,
                  color: c.muted,
                }}
              >
                <div style={{ display: "flex" }}>{SUBLINE[0]}</div>
                <div style={{ display: "flex" }}>{SUBLINE[1]}</div>
              </div>
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 16,
                letterSpacing: "0.16em",
                color: c.muted,
              }}
            >
              {LABEL}
            </div>
          </div>

          {/* Figure cell on grid paper */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
            <img src={markWithGuides()} width={420} height={420} alt="" />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

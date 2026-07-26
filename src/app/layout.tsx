import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.youraiside.com"),
  title: {
    default: "Your AI Side",
    template: "%s · Your AI Side",
  },
  description:
    "Put AI on your side. Tools, agents and automation that work for you — quietly, precisely.",
  openGraph: {
    title: "Your AI Side",
    description: "Put AI on your side.",
    url: "https://www.youraiside.com",
    siteName: "Your AI Side",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Your AI Side",
    description: "Put AI on your side.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("yas-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.setAttribute("data-theme","dark")}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}

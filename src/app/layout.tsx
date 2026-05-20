import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import ParallaxBackground from "./components/ParallaxBackground";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tony Lin",
  description: "Data Analyst based in NYC. 4 years at NYC DOT, founder of YnotCard.",
  openGraph: {
    title: "Tony Lin",
    description: "Data Analyst based in NYC.",
    url: "https://tonyl3260.vercel.app",
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
      className={`${archivo.variable} ${spaceGrotesk.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ParallaxBackground />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

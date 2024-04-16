import type { Metadata } from "next";
import { Inter, Caveat, Orbitron, Oxanium } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Logo Trivia",
  description:
    "Logo Trivia is a fun game to test your knowledge of team logos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${caveat.variable} ${orbitron.variable} ${oxanium.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

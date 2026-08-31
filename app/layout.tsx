import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Fikri Hidayat | Fullstack Developer",
  description:
    "Portfolio of Muhammad Fikri Hidayat — Mathematics student at ITS & self-taught Fullstack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "fullstack developer",
    "web developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "Muhammad Fikri Hidayat",
    "ITS",
    "mathematics",
  ],
  authors: [{ name: "Muhammad Fikri Hidayat" }],
  openGraph: {
    title: "Muhammad Fikri Hidayat | Fullstack Developer",
    description:
      "Mathematics student at ITS & Fullstack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
  },
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster theme="dark" closeButton richColors position="bottom-right" />
      </body>
    </html>
  );
}

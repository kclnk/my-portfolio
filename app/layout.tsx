import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-title",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-name",
});

export const metadata: Metadata = {
  title: "Mohamed's Portfolio",
  description: "This is my professional portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${dmSerif.variable}`}>{children}</body>
    </html>
  );
}

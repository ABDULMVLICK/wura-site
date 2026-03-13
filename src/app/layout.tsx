import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wura | Next Generation Platform",
  description: "Experience the ultimate modern platform with Wura. Designed for performance and aesthetics.",
  keywords: ["Wura", "Platform", "Next.js", "SaaS", "Modern App"],
  authors: [{ name: "Wura Team" }],
  openGraph: {
    title: "Wura | Next Generation Platform",
    description: "Experience the ultimate modern platform with Wura. Designed for performance and aesthetics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenisProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sharply Web App",
  description: " Sharply is QUAD's logistics service — get documents, food and parcels moved across UNILAG & LUTH by verified student runners, in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LenisProvider>
        {children}
        </LenisProvider>
        </body>
    </html>
  );
}

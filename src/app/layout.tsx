import type { Metadata } from "next";
import { Rubik_Dirt, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const rubikDirt = Rubik_Dirt({
  weight: "400",
  variable: "--font-grunge",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mystik Cafe",
  description: "Welcome to Mystik Cafe",
  icons: {
    icon: "https://assets.k12path.com/MystikCafe/Mystik%20Cafe%20Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubikDirt.variable} ${inter.variable}`}>
      <body className="font-[var(--font-inter)] antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}

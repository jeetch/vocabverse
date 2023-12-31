import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

import { Press_Start_2P, Inter } from "next/font/google";
const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vocabverse",
  description: "You build, you learn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-[url(/background_3.jpg)]  backdrop-blur-md bg-cover bg-center", //
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

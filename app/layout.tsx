import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Pramod Subedi | Geospatial Science & Natural Hazards Research",
  description:
    "Research portfolio of Pramod Subedi focusing on GIS, Remote Sensing, landslide susceptibility mapping, and Himalayan hazard assessment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
  className={`${inter.variable} ${playfair.variable} antialiased`}
>
        {children}
      </body>
    </html>
  );
}
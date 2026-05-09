import type { Metadata } from "next";
import { Big_Shoulders, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const bigShoulders = Big_Shoulders({
  weight: ["500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-big-shoulders",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Northgate Garage Door Co. — Repairs, Springs, Openers",
  description:
    "Family-run garage door repair and installation serving the Triangle area of North Carolina since 2009. Springs, openers, panels, and emergency calls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Vo Hiep | Backend Developer",
  description: "Backend Developer portfolio of Nguyen Vo Hiep, featuring Java, Spring Boot, RESTful APIs, PostgreSQL, Redis, Kafka, Docker, AWS, testing, performance testing, and cloud deployment projects.",
  authors: [{ name: "Nguyen Vo Hiep" }],
  creator: "Nguyen Vo Hiep",
  openGraph: {
    type: "website",
    title: "Nguyen Vo Hiep | Backend Developer",
    description: "Backend Developer portfolio of Nguyen Vo Hiep, featuring Java, Spring Boot, RESTful APIs, PostgreSQL, Redis, Kafka, Docker, AWS, testing, performance testing, and cloud deployment projects.",
    emails: ["nguyenvohiep.29122004@gmail.com"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <CustomCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

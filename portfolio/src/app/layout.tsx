import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { personalInfo } from "@/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Rutuja Kadam — Full-Stack Engineer & NLP Enthusiast | Nashik",
  description: "Building intelligent systems at the intersection of software and language.",
  keywords: ["Next.js", "Django", "Full Stack", "NLP", "Portfolio"],
  openGraph: {
    title: "Rutuja Kadam — Full-Stack Engineer & NLP Enthusiast | Nashik",
    description: "Building intelligent systems at the intersection of software and language.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          <div className="animate-fade-in">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

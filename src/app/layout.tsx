import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mayorsmart.com"),
  title: "MayorSmart Global Enterprise | Mission-Critical IT & Digital Infrastructure",
  description:
    "Enterprise technology solutions, sovereign cloud architecture, defense-grade cybersecurity, and deterministic AI systems for institutions and global leaders.",
  keywords: [
    "MayorSmart",
    "Cybersecurity",
    "IT Consulting",
    "Software Development",
    "Digital Marketing",
    "Sovereign Cloud",
    "Enterprise Infrastructure",
  ],
  authors: [{ name: "MayorSmart Global Enterprises" }],
  openGraph: {
    title: "MayorSmart Global Enterprise | Mission-Critical IT & Digital Infrastructure",
    description:
      "Enterprise technology solutions, sovereign cloud architecture, defense-grade cybersecurity, and deterministic AI systems.",
    url: "https://mayorsmart.com",
    siteName: "MayorSmart Global Enterprise",
    images: [
      {
        url: "/assets/img/datacenter-cloud.png",
        width: 1200,
        height: 630,
        alt: "MayorSmart Global Enterprise Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="icon" href="/assets/img/logo.png" />
      </head>
      <body className="bg-surface font-sans text-on-surface antialiased selection:bg-secondary-container selection:text-navy-deep min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "./lib/data";
import { AuroraBackground } from "./components/AuroraBackground";
import { BackToTop } from "./components/BackToTop";
import { ClientOnlyChrome } from "./components/ClientOnlyChrome";
import { FloatingChat } from "./components/FloatingChat";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://muhammedthanseem.dev";
const title = `${profile.name} — Software Engineer`;
const description =
  "Portfolio of Muhammad Thanseem C, a full-stack software engineer specialised in web, AI/RAG and IoT technologies — Next.js, Angular, Vue, Node.js and Python.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.shortName}`,
  },
  description,
  keywords: [
    "Muhammad Thanseem",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "MEAN Stack Developer",
    "IoT Developer",
    "RAG Developer",
    "Kerala",
    "India",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  jobTitle: profile.titles[0],
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: profile.socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05060a] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Loader />
        <ClientOnlyChrome />
        <AuroraBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingChat />
      </body>
    </html>
  );
}

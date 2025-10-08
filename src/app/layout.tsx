import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shwe Latt Twal",
  description: "We can't wait to celebrate with you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Shwe Latt Twal</title>
        <meta name="title" content="Shwe Latt Twal" />
        <meta
          name="description"
          content="We can't wait to celebrate with you!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Shwe Latt Twal" />
        <meta
          property="og:description"
          content="We can't wait to celebrate with you!"
        />
        <meta property="og:image" content="/imgs/meta-img.png" />

        {/* <!-- X (Twitter) --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Shwe Latt Twal" />
        <meta
          property="twitter:description"
          content="We can't wait to celebrate with you!"
        />
        <meta property="twitter:image" content="/imgs/meta-img.png" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Noto_Sans_Myanmar,
  Playfair_Display,
  Cormorant,
  Great_Vibes,
  Dancing_Script,
  Cinzel,
  EB_Garamond,
  Fredoka,
  Pacifico,
  Chewy,
  Bubblegum_Sans,
  Righteous,
  Lilita_One,
} from "next/font/google";
import "./globals.css";
import { APP_DATA } from "@/constants/app.data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  variable: "--font-noto-sans-myanmar",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const chewy = Chewy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chewy",
});

const bubblegumSans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bubblegum",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});

export const metadata: Metadata = {
  title: APP_DATA.app_title,
  description: "We can't wait to celebrate with you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansMyanmar.variable} ${playfairDisplay.variable} ${cormorant.variable} ${greatVibes.variable} ${dancingScript.variable} ${cinzel.variable} ${ebGaramond.variable} ${fredoka.variable} ${pacifico.variable} ${chewy.variable} ${bubblegumSans.variable} ${righteous.variable} ${lilitaOne.variable}`}
    >
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{APP_DATA.app_title}</title>
        <meta name="title" content={APP_DATA.app_title} />
        <meta
          name="description"
          content="We can't wait to celebrate with you!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shwe-latt-twal.vercel.app/" />
        <meta property="og:title" content={APP_DATA.app_title} />
        <meta
          property="og:description"
          content="We can't wait to celebrate with you!"
        />
        <meta property="og:image" content="/imgs/meta-img.png" />

        {/* <!-- X (Twitter) --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://shwe-latt-twal.vercel.app/"
        />
        <meta property="twitter:title" content={APP_DATA.app_title} />
        <meta
          property="twitter:description"
          content="We can't wait to celebrate with you!"
        />
        <meta property="twitter:image" content="/imgs/meta-img.png" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSansMyanmar.variable} ${playfairDisplay.variable} ${cormorant.variable} ${greatVibes.variable} ${dancingScript.variable} ${cinzel.variable} ${ebGaramond.variable} ${fredoka.variable} ${pacifico.variable} ${chewy.variable} ${bubblegumSans.variable} ${righteous.variable} ${lilitaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

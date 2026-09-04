import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://scalewithlakshya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "ScaleWithLakshya — Get Found. Build Trust. Get Enquiries.",
  description:
    "ScaleWithLakshya helps home service businesses improve their Google presence, build better websites, and strengthen their technical SEO to turn online attention into enquiries.",

  alternates: {
    canonical: "/",
  },

  authors: [
    {
      name: "ScaleWithLakshya",
    },
  ],

  creator: "ScaleWithLakshya",
  publisher: "ScaleWithLakshya",
  applicationName: "ScaleWithLakshya",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "ScaleWithLakshya",
    title: "ScaleWithLakshya — Get Found. Build Trust. Get Enquiries.",
    description:
      "Google Business Profile, conversion-focused websites, and technical SEO for home service businesses.",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ScaleWithLakshya — Get Found. Build Trust. Get Enquiries.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ScaleWithLakshya — Get Found. Build Trust. Get Enquiries.",
    description:
      "Google Business Profile, conversion-focused websites, and technical SEO for home service businesses.",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
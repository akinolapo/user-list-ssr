import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importing Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "StartHub Academy - User List",
  description: "Explore our SSR-rendered user list with Next.js 15, optimized for SEO and accessibility.",
  openGraph: {
    title: "StartHub Academy - User List",
    description: "Explore our SSR-rendered user list with Next.js 15, optimized for SEO and accessibility.",
    url: "https://user-list-ssr.vercel.app", // Replace with your actual URL
    siteName: "StartHub Academy User List",
    images: [
      {
        url: "/images/og-image.jpg", // Use a relevant image for Open Graph
        width: 1200,
        height: 630,
        alt: "User List Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Type of Twitter Card (e.g., summary, summary_large_image)
    site: "@StartHubAcademy", // Your Twitter handle
    title: "StartHub Academy - User List",
    description: "Explore our SSR-rendered user list with Next.js 15, optimized for SEO and accessibility."
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="StartHub Academy - User List" />
        <meta property="og:description" content="Explore our SSR-rendered user list with Next.js 15, optimized for SEO and accessibility." />
        <meta property="og:url" content="https://www.starthubacademy.com/user-list" />
        <meta property="og:site_name" content="StartHub Academy" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@StartHubAcademy" />
        <meta name="twitter:title" content="StartHub Academy - User List" />
        <meta name="twitter:description" content="Explore our SSR-rendered user list with Next.js 15, optimized for SEO and accessibility." />
        <meta name="twitter:image" content="/images/og-image.jpg" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />
        
        {/* Other SEO-related tags can go here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

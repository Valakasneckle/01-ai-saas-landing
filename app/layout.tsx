import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-vercel-link.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NeuroFlow AI — Turn Business Knowledge Into Intelligent Workflows",
  description:
    "NeuroFlow AI helps teams automate workflows, search documents, summarize knowledge, and improve productivity with AI. Start your free 14-day trial today.",
  keywords: [
    "AI workflows",
    "document intelligence",
    "workflow automation",
    "knowledge base",
    "AI productivity",
    "team automation",
    "SaaS",
  ],
  authors: [{ name: "NeuroFlow AI" }],
  creator: "NeuroFlow AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NeuroFlow AI",
    title: "NeuroFlow AI — Turn Business Data Into Intelligent Workflows",
    description:
      "AI-powered workflows for teams that move at the speed of thought. Document search, workflow automation, and team knowledge base — all in one platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroFlow AI Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroFlow AI — Turn Business Data Into Intelligent Workflows",
    description:
      "AI-powered workflows for teams that move at the speed of thought.",
    creator: "@neuroflowai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}

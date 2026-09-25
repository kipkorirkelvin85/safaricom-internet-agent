import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = localFont({ src: "./fonts/geist-latin.woff2", variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Home Fibre & 5G Internet Connection Assistance | Kenya",
  description: siteDescription,
  openGraph: { title: "Home Fibre & 5G Internet Connection Assistance | Kenya", description: siteDescription, url: siteUrl, siteName, locale: "en_KE", type: "website" },
  twitter: { card: "summary_large_image", title: "Home Fibre & 5G Internet Connection Assistance | Kenya", description: siteDescription },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} scroll-smooth`}><body>{children}</body></html>;
}

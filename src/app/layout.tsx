import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canadian Wellness & Beauty | Spa & Laser Treatments in Burnaby BC",
  description:
    "Professional facial, laser hair removal, massage, waxing, body slimming & tattoo removal in Burnaby, BC. Book online today — 50% off your first visit!",
  openGraph: {
    title: "Canadian Wellness & Beauty | Spa & Laser Treatments in Burnaby BC",
    description:
      "Professional facial, laser hair removal, massage, waxing, body slimming & tattoo removal in Burnaby, BC. Book online today — 50% off your first visit!",
    type: "website",
    locale: "en_CA",
    siteName: "Canadian Wellness & Beauty",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Italiana, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
    <html lang="en" className={`${italiana.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

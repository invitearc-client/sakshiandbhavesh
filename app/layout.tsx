import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakshiandbhavesh.vercel.app/"),

  openGraph: {
    title: "Sakshi Weds Bhavesh",
    description: "Join as they begin their forever. 19 & 20 December, 2026",
    url: "https://sakshiandbhavesh.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sakshi Weds Bhavesh",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Sakshi Weds Bhavesh",
    description: "Join as they begin their forever. 19 & 20 December, 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://sakshiandbhavesh.vercel.app/og.jpg",
    "og:image:type": "image/jpeg",
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Gabarito, Judson } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-judson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trustified Loans - Simple & Trusted Loan Solutions",
  description:
    "Your trusted financial partner for simple loan solutions and expert financial guidance.",
  keywords: [
    "loans",
    "financial guidance",
    "personal loans",
    "home loans",
    "business loans",
    "Trustified Loans",
  ],
  authors: [{ name: "Trustified Loans" }],
  creator: "Trustified Loans",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://trustified-loans.vercel.app",
    title: "Trustified Loans - Simple & Trusted Loan Solutions",
    description:
      "Your trusted financial partner for simple loan solutions and expert financial guidance.",
    siteName: "Trustified Loans",
    images: [
      {
        url: "/about-us-two.webp",
        width: 1254,
        height: 1254,
        alt: "Trustified Loans - Simple & Trusted Loan Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trustified Loans - Simple & Trusted Loan Solutions",
    description:
      "Your trusted financial partner for simple loan solutions and expert financial guidance.",
    images: ["/about-us-two.webp"],
  },
  alternates: {
    canonical: "https://trustified-loans.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${gabarito.variable} ${judson.variable}`}
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}

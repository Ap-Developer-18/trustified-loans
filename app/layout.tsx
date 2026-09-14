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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gabarito.variable} ${judson.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}

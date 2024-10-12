import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/poppins-medium-webfont.woff",
  variable: "--font-popping",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cafe Street",
  description: "Safe Street Coffe Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

const poppins = localFont({
  src: "./fonts/poppins-medium-webfont.woff",
  variable: "--font-popping",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
      <body className={`${poppins.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

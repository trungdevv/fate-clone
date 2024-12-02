import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
  title: "Kachul Shop",
  description: "At Vivianware, we're industry leaders in delivering undetected, high-quality game cheats. Explore our digital marketplace packed with epic game-boosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/image/background.webp')] bg-center bg-no-repeat bg-cover bg-fixed`}
      >
        <Header/>
        <div className="my-14">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}

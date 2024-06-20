import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promo Adhigama Education",
  description: "Promo Adhigama Education Jalur Lulusku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.png" type="image/png"></link>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

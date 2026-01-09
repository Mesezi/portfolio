import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";
export const revalidate = 60; // revalidate at most every hour

const montserrat = Montserrat({ weight: ["100",'300', '400', '700',], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ezi-umeonu Menuchim",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        </body>
    </html>
  );
}

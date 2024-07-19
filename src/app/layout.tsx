import type { Metadata } from "next";
import { Inter,Lato,Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
export const dynamic = "force-dynamic";

const inter = Montserrat({ weight: ["100",'300', '400', '700',], subsets: ['latin'] });

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
      <body className={inter.className}>
        <Layout>
        {children}
        </Layout>
        </body>
    </html>
  );
}

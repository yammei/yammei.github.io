import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yammei",
  description: "Mei Zhang's development site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='bg-gray-300' lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  );
}

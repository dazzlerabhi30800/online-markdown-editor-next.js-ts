import Navbar from "@/component/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Online Markdown Editor in TS",
  description: "This is an Online Mardown Editor created by Dazzler Abhi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

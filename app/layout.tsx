import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SlideBarTabs } from "./components/SlideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HK🌐24",
  description: "Developed by Hasnain Khan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SlideBarTabs />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/global-components/Navbar'
import Sidebar from "@/app/components/global-components/Sidebar";
import Footer from "@/app/components/global-components/Footer";
import Settings from "@/app/components/global-components/Settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dyno-Dashboard",
  description: "Generalized solutions to multi-purpose data analytics and revenue analytics in dashboard format!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
        <body className="w-full h-screen bg-[#e7eaf3] relative">
          <Navbar />
          <Sidebar />
          <Settings />
          {children}
          <Footer />
        </body>
    </html>
  );
}

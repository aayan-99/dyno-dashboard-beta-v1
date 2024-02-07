'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/global-components/Navbar'
import Sidebar from "@/app/components/global-components/Sidebar";
import Footer from "@/app/components/global-components/Footer";
import Settings from "@/app/components/global-components/Settings";
import 'react-calendar/dist/Calendar.css';
import useSidebarStore from "./stores/sidebarStore";
import useDarkModeStore from "./stores/themeStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { sidebarOpen, toggleSidebar } = useSidebarStore();
  const { isDarkMode } = useDarkModeStore();

  return (
    <html className={inter.className} lang="en">
      <body className={`w-full h-screen ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#e7eaf3]'} relative`}>
        <Navbar />
        <Sidebar />
        <Settings />
        <div className={`pt-[70px] transition-all duration-200 ease-in-out ${sidebarOpen ? 'pl-[280px]' : 'pl-[70px]'}`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

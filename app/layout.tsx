'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-calendar/dist/Calendar.css';
import useDarkModeStore from "./stores/themeStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isDarkMode } = useDarkModeStore();

  return (
    <html className={inter.className} lang="en">
      <body className={`w-full h-screen ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#e7eaf3]'} relative`}>
        {children}
      </body>
    </html>
  );
}

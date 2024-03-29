'use client'

import "@/app/globals.css";
import Navbar from '@/app/components/global-components/Navbar'
import Sidebar from "@/app/components/global-components/Sidebar";
import Footer from "@/app/components/global-components/Footer";
import Settings from "@/app/components/global-components/Settings";
import 'react-calendar/dist/Calendar.css';
import useSidebarStore from "@/app/stores/sidebarStore";
import useDarkModeStore from "@/app/stores/themeStore";


export default function HRMDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { sidebarOpen } = useSidebarStore();
    const { isDarkMode } = useDarkModeStore();

    return (
        <html lang="en">
            <body className={`w-full h-screen ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#e7eaf3]'} relative`}>
                <Navbar />
                <Sidebar />
                <Settings />
                <div className={`pt-[70px] transition-all duration-200 ease-in-out ${sidebarOpen ? 'md:pl-[280px]' : 'md:pl-[70px]'}`}>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}

'use client'

import useSidebarStore from '@/app/stores/sidebarStore';
import useDarkModeStore from '@/app/stores/themeStore';
import React from 'react'

const Footer = () => {

  const { sidebarOpen } = useSidebarStore();
  const { isDarkMode } = useDarkModeStore();

  return (
    <>

      <div className={`hidden md:flex fixed justify-center items-center text-[12px] bottom-0 w-full ${sidebarOpen ? 'left-[280px]' : ' left-[70px]'} ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'bg-white text-black'} px-10 transition-all duration-200 ease-in-out py-4`}>Copyright© 2024 All Rights Reserved By AYN</div>

      <div className={`flex md:hidden fixed justify-center items-center text-[12px] bottom-0 w-full left-0 ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'bg-white text-black'} px-10 transition-all duration-200 ease-in-out py-4`}>Copyright© 2024 All Rights Reserved By AYN</div>

    </>
  )
}

export default Footer
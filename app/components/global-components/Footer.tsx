'use client'

import useSidebarStore from '@/app/stores/sidebarStore';
import useDarkModeStore from '@/app/stores/themeStore';
import React from 'react'

const Footer = () => {

  const { sidebarOpen } = useSidebarStore();
  const { isDarkMode } = useDarkModeStore();

  return (
    <>

      <div className={`hidden md:block fixed bottom-0 w-full ${sidebarOpen ? 'left-[280px]' : ' left-[70px]'} ${sidebarOpen ? 'w-[280px]' : 'w-[70px]'} ${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'} px-10 transition-all duration-200 ease-in-out py-5`}> This is my Footer</div>

      <div className={`block md:hidden fixed bottom-0 w-full left-0 ${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'} px-10 transition-all duration-200 ease-in-out py-4`}> This is my Footer</div>

    </>
  )
}

export default Footer
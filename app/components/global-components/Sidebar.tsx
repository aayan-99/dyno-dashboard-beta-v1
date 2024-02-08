'use client'

import React from 'react'
import logo from '@/app/assets/icons/logo.svg'
import logoSmall from '@/app/assets/icons/logo-small.svg'
import Image from 'next/image'
import { RxCross2 } from "react-icons/rx";
import useSidebarStore from '@/app/stores/sidebarStore'
import useDarkModeStore from '@/app/stores/themeStore'

const Sidebar = () => {

    const { sidebarOpen, toggleSidebar } = useSidebarStore();
    const { isDarkMode } = useDarkModeStore();

    return (
        <>

            <div className={`h-screen hidden md:block fixed top-0 left-0 transition-all duration-200 ease-in-out ${sidebarOpen ? 'w-[280px]' : 'w-[70px]'} ${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'}`}>
                <div className='flex justify-center items-center py-4'>
                    <div className={`${sidebarOpen ? 'block' : 'hidden'}`}>
                        <Image src={logo} width={120} alt='Mainlogo' />
                    </div>
                    <div className={`${sidebarOpen ? 'hidden' : 'block'} px-2 py-1`}>
                        <Image src={logoSmall} width={35} alt='Mainlogo' />
                    </div>
                </div>
            </div>


            <div className={`h-screen block md:hidden z-[100] fixed top-0 left-0 transition-all duration-200 ease-in-out ${sidebarOpen ? 'w-full' : 'w-0'} ${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'}`}>
                <div className='w-full flex justify-end items-center px-4 py-6'>
                    <RxCross2 className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={25} onClick={toggleSidebar} />
                </div>
                <div className='flex justify-center items-center'>
                    <div className={`${sidebarOpen ? 'block' : 'hidden'}`}>
                        <Image src={logo} width={120} alt='Mainlogo' />
                    </div>
                    <div className={`${sidebarOpen ? 'hidden' : 'block'} px-2 py-1`}>
                        <Image src={logoSmall} width={35} alt='Mainlogo' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
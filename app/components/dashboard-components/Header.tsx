'use client'

import React from 'react'
import DateBar from '@/app/components/dashboard-components/DateBar';
import useDarkModeStore from '@/app/stores/themeStore';

const Header = ({ title }: { title: string }) => {
    const { isDarkMode } = useDarkModeStore();

    return (
        <div className={`w-full p-5 ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : ' bg-white text-[color:var(--primary-dark)]'} rounded-[5px] flex flex-col md:flex-row justify-between items-center`}>
            <div className='w-fit'>
                <h1 className='text-[20px] md:text-[25px] font-[600]'>{title}</h1>
            </div>
            <div className='hidden md:block'>
                <DateBar />
            </div>
        </div>
    )
}

export default Header
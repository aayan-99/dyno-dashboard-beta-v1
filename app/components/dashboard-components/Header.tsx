'use client'

import React from 'react'
import DateBar from '@/app/components/dashboard-components/DateBar';
import useDarkModeStore from '@/app/stores/themeStore';

const Header = ({ title }: { title: string }) => {
    const { isDarkMode } = useDarkModeStore();

    return (
        <div className={`w-full p-5 ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : ' bg-white text-[color:var(--primary-dark)]'} rounded-[5px] flex justify-between items-center`}>
            <div className='w-fit'>
                <h1 className='text-[25px] font-[600]'>{title}</h1>
            </div>
            <div className=''>
                <DateBar />
            </div>
        </div>
    )
}

export default Header
'use client'

import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import Calender from '@/app/components/dashboard-components/Calender'
import useDarkModeStore from '@/app/stores/themeStore';

const DateBar = () => {

    const date = new Date()
    const { isDarkMode } = useDarkModeStore();
    const [openCalender, setOpenCalender] = useState(false);

    return (
        <div className='w-fit relative'>
            <div className={`w-full min-w-[200px] max-w-[300px] flex gap-4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-[color:var(--primary-dark)]'} justify-end items-center rounded-[7px]`}>
                <div className='w-full flex justify-start items-center pl-3'>
                    <h1 className='text-[14px]'>{date.toLocaleString()?.split(',')[0]}</h1>
                </div>
                <span className='w-full max-w-[35px] flex justify-center items-center rounded-r-[7px] h-full bg-[color:var(--primary-color)] p-2 cursor-pointer'><SlCalender color='white' onClick={() => setOpenCalender(!openCalender)} /></span>
            </div>
            {openCalender ? (
                <div className='absolute -right-[50%] md:right-0 top-[105%] z-[80]'>
                    <Calender />
                </div>
            ) : null}
            <div className={`w-full fixed ${openCalender ? 'block' : 'hidden'} inset-0 z-[70] bg-black opacity-0`} onClick={() => setOpenCalender(false)} />

        </div>
    )
}

export default DateBar
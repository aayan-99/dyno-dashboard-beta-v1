'use client'

import useDarkModeStore from '@/app/stores/themeStore';
import React from 'react'
import { IoPersonAddOutline } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { LuSearchCheck } from "react-icons/lu";

interface HRMDataCardProps {
    id: number;
    title: string;
    duration: string;
    value: string;
}

const HRMDataCard: React.FC<HRMDataCardProps> = ({ id, title, duration, value }) => {

    const { isDarkMode } = useDarkModeStore();

    return (
        <div className={`w-full rounded-[5px] ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-gray-300' : 'text-gray-600 bg-white'} group py-2`}>
            <div className='w-full flex'>
                <div className={`w-full flex flex-col px-4 py-2 ${isDarkMode ? ' text-gray-300' : 'text-gray-600'}`}>
                    <h1 className='text-[16px] font-[400]'>{title}</h1>
                    <h1 className='text-[20px] font-[500] mb-4'>{value}</h1>
                    <h1 className='text-[12px] font-[500] text-gray-500'>{duration}</h1>
                </div>
                <div className='w-fit flex items-center gap-4 pr-4'>
                    <div className={`h-full w-[1px] border-l border-r border-dashed ${isDarkMode ? 'border-[#303030]' : 'border-[#e0e0e0]'}`} />
                    <div className={`aspect-square rounded-[4px] w-[70px] flex justify-center items-center group-hover:bg-[color:var(--primary-color)] group-hover:text-white ${isDarkMode ? 'bg-[#303030] text-gray-300' : ' bg-white text-gray-600'}`}>
                        {id == 0 ? (<IoPersonAddOutline className='text-[30px]' />) : id == 1 ? (<CiBullhorn className='text-[30px]' />) : id == 2 ? (<PiCurrencyDollarSimple className='text-[30px]' />) : (<LuSearchCheck className='text-[30px]' />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HRMDataCard
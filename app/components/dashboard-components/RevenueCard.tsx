'use client'

import useDarkModeStore from '@/app/stores/themeStore';
import React from 'react'
import { FaDollarSign } from 'react-icons/fa';
import { IoBagHandle } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";

interface RevenueCardProps {
    title: string;
    profit: string;
    revenue: string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ title, profit, revenue }) => {

    const { isDarkMode } = useDarkModeStore();

    return (
        <div className={`w-full rounded-[5px] ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'text-[color:var(--primary-dark)] bg-white'} border-t border-t-[color:var(--primary-color)] p-4`}>
            <div className='w-full flex justify-between items-center'>
                <div className='w-fit'>
                    <h1 className='text-lg font-[600]'>{revenue}</h1>
                </div>
                <div className='w-fit'>
                    <h1 className='text-[color:var(--primary-color)] text-[14px] font-[500]'>{profit}</h1>
                </div>
            </div>
            <div className='w-full mt-1'>
                <h1 className='text-[14px] font-[400] '>{title}</h1>
            </div>
            <div className='w-full flex justify-between items-center mt-4'>
                <h1 className='text-[13px] text-gray-400 underline'>view details</h1>
                <div className={`w-fit p-2 ${isDarkMode ? 'bg-gray-700' : ''} rounded-[7px] cursor-pointer text-[color:var(--primary-color)] hover:text-white hover:bg-[color:var(--primary-color)]`}>
                    {title == 'Shipping' ? (<FaDollarSign className='' />) : title == 'Orders' ? (<IoBagHandle className='' />) : title == 'Customers' ? (<MdPerson className='text-[18px]' />) : (<FaCreditCard className='' />)}
                </div>
            </div>
        </div>
    )
}

export default RevenueCard
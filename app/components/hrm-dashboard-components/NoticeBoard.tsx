'use client'

import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import useDarkModeStore from '@/app/stores/themeStore';

const NoticeBoard = () => {

    const { isDarkMode } = useDarkModeStore();

    const meetingData = [
        {
            id: 0,
            meeting: 'Meeting for campaign with sales team',
            subject: 'Strategic analysis',
            date: '14 Feb',
            time: '12:15pm',
            duration: '2 hours'
        },
        {
            id: 1,
            meeting: 'Meeting for campaign with sales team',
            subject: 'Strategic analysis',
            date: '16 Feb',
            time: '10:30am',
            duration: '2 hours'
        },
        {
            id: 2,
            meeting: 'Meeting for campaign with sales team',
            subject: 'Strategic analysis',
            date: '21 Feb',
            time: '02:30pm',
            duration: '2 hours'
        },
        {
            id: 3,
            meeting: 'Meeting for campaign with sales team',
            subject: 'Strategic analysis',
            date: '14 Feb',
            time: '5:15pm',
            duration: '2 hours'
        },
    ];

    return (
        <div className={`w-full h-full ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-gray-300' : 'text-[color:var(--primary-dark)] bg-white'} rounded-[5px]`}>
            <div className={`p-3 px-5 flex justify-between items-center border-b ${isDarkMode ? 'border-b-[#494949]' : 'border-b-[#cccccc]'} border-dashed`}>
                <h1 className='text-lg tracking-tight'>Notice Board</h1>
                <div className='w-fit flex justify-center gap-2 border border-[#7a7a7a] rounded-[2px] p-1'>
                    <HiOutlineDotsVertical size={17} color='#b6b6b6' />
                </div>
            </div>
            <div className='w-full'>
                {
                    meetingData?.map((data) => (
                        <div key={data?.id} className={`w-full flex items-center gap-8 px-5 py-4 group ${data?.id == meetingData?.length - 1 ? 'rounded-b-[5px]' : ''} ${isDarkMode ? 'hover:bg-[#3b3b3b]' : 'hover:bg-[#e4e4e4]'}`}>
                            <div className={`w-fit h-fit min-w-[35px] aspect-square rounded-[5px] flex justify-center items-center group-hover:bg-[color:var(--primary-color)] group-hover:text-white ${isDarkMode ? 'bg-[#303030] text-gray-300' : ' bg-white text-gray-600'}`}>
                                <h1 className='text-[23px] font-[400] tracking-tight leading-[25px] py-3 px-6 text-center'>{data?.date}</h1>
                            </div>
                            <div className='w-full flex flex-col'>
                                <h1 className='text-[17px] font-[500]'>{data?.meeting}</h1>
                                <h1 className='text-[14px] font-[500] opacity-85'>{data?.subject}</h1>
                                <h1 className='text-[14px] font-[400] opacity-70'>{data?.time}</h1>
                            </div>
                            <div className='w-full max-w-[60px]'>
                                <h1 className='text-[15px] opacity-85 font-[400]'>{data?.duration}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NoticeBoard
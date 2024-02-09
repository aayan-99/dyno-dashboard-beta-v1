'use client'

import React, { useState } from 'react'
import useDarkModeStore from '@/app/stores/themeStore';
import PrimaryButton from '@/app/components/global-components/PrimaryButton';

const RecentActivity = () => {

    const { isDarkMode } = useDarkModeStore();

    const [activeTableFilterId, setActiveTableFilterId] = useState(0);

    const tableData = [
        {
            id: 0,
            action: 'Leave Approval Request',
            employee: 'From "Ruth Dyer" UiDesign Leave On Monday 12 Jan 2020.',
            time: '6 min ago',
        },
        {
            id: 1,
            action: 'Work Update',
            employee: 'From "Jason McShawn" VideoEditor project deadline On Monday 12 Jan 2020.',
            time: '6 min ago',
        },
        {
            id: 2,
            action: 'Leave Approval Request',
            employee: 'From "Ruth Dyer" UiDesign Leave On Monday 12 Jan 2020.',
            time: '6 min ago',
        },
        {
            id: 3,
            action: 'Work Update',
            employee: 'From "Jason McShawn" VideoEditor project deadline On Monday 12 Jan 2020.',
            time: '6 min ago',
        },
        {
            id: 4,
            action: 'Leave Approval Request',
            employee: 'From "Ruth Dyer" UiDesign Leave On Monday 12 Jan 2020.',
            time: '6 min ago',
        },
        {
            id: 5,
            action: 'Work Update',
            employee: 'From "Jason McShawn" VideoEditor project deadline On Monday 12 Jan 2020.',
            time: '6 min ago',
        },
    ];


    return (
        <div className={`w-full h-full ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-gray-300' : 'text-[color:var(--primary-dark)] bg-white'} rounded-[5px]`}>
            <div className={`p-3 px-5 flex justify-between items-center border-b ${isDarkMode ? 'border-b-[#494949]' : 'border-b-[#cccccc]'} border-dashed`}>
                <h1 className='text-lg tracking-tight'>Recent Activity</h1>
                <div className='w-fit flex justify-center gap-2'>
                    <PrimaryButton btnText='View All' />
                </div>
            </div>
            <div className='w-full mt-7 px-5 pb-3'>
                {
                    tableData?.map((data, i) => (
                        <div key={i} className='w-full flex justify-center items-start group gap-3 cursor-pointer'>
                            <div key={i} className='w-fit flex flex-col justify-center items-center pt-1'>
                                <span className={`w-4 h-4 ${isDarkMode ? 'bg-[#456381]' : 'bg-[#badcff]'} rounded-full group-hover:bg-[#6db3fa]`} />
                                {i == tableData?.length - 1 ? '' : (<span className={`w-[1px] h-[38px] border-dashed border-l border-r ${isDarkMode ? 'border-[#456381]' : 'border-[#badcff]'}`} />)}
                            </div>
                            <div key={i} className='w-full flex flex-col justify-start items-center mb-2'>
                                <div className='w-full flex justify-between items-start'>
                                    <h1 className='text-[15px] font-[500]'>{data?.action}</h1>
                                    <h1 className='text-[14px]'>{data?.time}</h1>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <h1 className='text-[13px] opacity-75'>{data?.employee}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentActivity
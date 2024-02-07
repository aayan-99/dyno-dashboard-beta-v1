'use client'

import useDarkModeStore from '@/app/stores/themeStore';
import React, { useState } from 'react'

const SocialMediaVisitors = () => {

    const { isDarkMode } = useDarkModeStore();

    const [activeTableFilterId, setActiveTableFilterId] = useState(0);

    const tableFilters = [
        {
            id: 0,
            title: 'Week',
        },
        {
            id: 1,
            title: 'Month',
        },
        {
            id: 2,
            title: 'Year',
        },
    ];

    const tableData = [
        {
            id: 0,
            title: 'Week',
            data: [
                {
                    id: '01-week',
                    media: 'Facebook',
                    icon: '',
                    visits: '153,100',
                },
                {
                    id: '02-week',
                    media: 'Behance',
                    icon: '',
                    visits: '234,200',
                },
                {
                    id: '03-week',
                    media: 'Combinator',
                    icon: '',
                    visits: '326,012',
                },
                {
                    id: '04-week',
                    media: 'Instagram',
                    icon: '',
                    visits: '124,420',
                },
                {
                    id: '05-week',
                    media: 'Dribbble',
                    icon: '',
                    visits: '554,220',
                },
                {
                    id: '06-week',
                    media: '254,812',
                    icon: '',
                    visits: '153100',
                },
                {
                    id: '07-week',
                    media: 'Twitter',
                    icon: '',
                    visits: '124,250',
                },
            ],
        },
        {
            id: 2,
            title: 'Month',
            data: [
                {
                    id: '01-month',
                    media: 'Facebook',
                    icon: '',
                    visits: '453,450',
                },
                {
                    id: '02-month',
                    media: 'Behance',
                    icon: '',
                    visits: '636,764',
                },
                {
                    id: '03-month',
                    media: 'Combinator',
                    icon: '',
                    visits: '562,010',
                },
                {
                    id: '04-month',
                    media: 'Instagram',
                    icon: '',
                    visits: '504,926',
                },
                {
                    id: '05-month',
                    media: 'Dribbble',
                    icon: '',
                    visits: '874,950',
                },
                {
                    id: '06-month',
                    media: 'LinkedIn',
                    icon: '',
                    visits: '670,820',
                },
                {
                    id: '07-month',
                    media: 'Twitter',
                    icon: '',
                    visits: '498,094',
                },
            ],
        },
        {
            id: 3,
            title: 'Year',
            data: [
                {
                    id: '01-week',
                    media: 'Facebook',
                    icon: '',
                    visits: '21,753,100',
                },
                {
                    id: '02-week',
                    media: 'Behance',
                    icon: '',
                    visits: '17,586,289',
                },
                {
                    id: '03-week',
                    media: 'Combinator',
                    icon: '',
                    visits: '18,627,616',
                },
                {
                    id: '04-week',
                    media: 'Instagram',
                    icon: '',
                    visits: '28,720,346',
                },
                {
                    id: '05-week',
                    media: 'Dribbble',
                    icon: '',
                    visits: '35,356,457',
                },
                {
                    id: '06-week',
                    media: 'LinkedIn',
                    icon: '',
                    visits: '15,774,317',
                },
                {
                    id: '07-week',
                    media: 'Twitter',
                    icon: '',
                    visits: '20,524,254',
                },
            ],
        },
    ];

    return (
        <div className={`w-full ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'text-[color:var(--primary-dark)] bg-white'} rounded-[5px] mt-5`}>
            <div className={`p-3 px-5 flex justify-between items-center border-b ${isDarkMode ? 'border-b-[#494949]' : 'border-b-[#cccccc]'} border-dashed`}>
                <h1 className='text-xl tracking-tight'>Social Media Visitors</h1>
                <div className='w-fit flex justify-center gap-2'>
                    {
                        tableFilters?.map((data) => (
                            <button onClick={() => setActiveTableFilterId(data?.id)} key={data?.id} className={`border active:scale-95 transition-all duration-200 ease-in-out ${isDarkMode ? 'border-[#173f6d]' : !isDarkMode && activeTableFilterId == data?.id ? 'border-[#63b1ff] text-white' : 'border-[#63b1ff] text-[color:var(--primary-color)]'} ${activeTableFilterId == data?.id ? 'bg-[color:var(--primary-color)] text-[color:var(--primary-dark)]' : ''} text-[12px] rounded-[5px] py-1 px-2`}>{data?.title}</button>
                        ))
                    }
                </div>
            </div>
            <div className='w-full mt-7 px-4'>
                <div className='w-full flex justify-between items-center py-2 bg-gray-600 px-2'>
                    <h1 className='text-[14px] font-[400]'>Sources</h1>
                    <h1 className='text-[14px] font-[400]'>Visitors</h1>
                </div>
                <div className='w-full flex flex-col'>
                    {
                        tableData[0]?.data?.map((data) => (
                            <div key={data?.id} className='w-full flex justify-between items-center'>
                                <h1>{data?.media}</h1>
                                <h1>{data?.visits}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialMediaVisitors
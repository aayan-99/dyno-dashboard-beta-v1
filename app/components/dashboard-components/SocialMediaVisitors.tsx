'use client'

import useDarkModeStore from '@/app/stores/themeStore';
import React, { useEffect, useState } from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaYCombinator } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

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
                    media: 'LinkedIn',
                    icon: '',
                    visits: '254,812',
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
            id: 1,
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
            id: 2,
            title: 'Year',
            data: [
                {
                    id: '01-year',
                    media: 'Facebook',
                    icon: '',
                    visits: '21,753,100',
                },
                {
                    id: '02-year',
                    media: 'Behance',
                    icon: '',
                    visits: '17,586,289',
                },
                {
                    id: '03-year',
                    media: 'Combinator',
                    icon: '',
                    visits: '18,627,616',
                },
                {
                    id: '04-year',
                    media: 'Instagram',
                    icon: '',
                    visits: '28,720,346',
                },
                {
                    id: '05-year',
                    media: 'Dribbble',
                    icon: '',
                    visits: '35,356,457',
                },
                {
                    id: '06-year',
                    media: 'LinkedIn',
                    icon: '',
                    visits: '15,774,317',
                },
                {
                    id: '07-year',
                    media: 'Twitter',
                    icon: '',
                    visits: '20,524,254',
                },
            ],
        },
    ];

    const iconAssigner = (media: string) => {
        let icon;

        switch (media) {
            case 'Facebook':
                icon = <FaSquareFacebook size={18} color='#1877F2' />;
                break;
            case 'Behance':
                icon = <FaBehanceSquare size={18} color='#053eff' />;
                break;
            case 'Combinator':
                icon = <FaYCombinator size={18} color='#ff4000' />;
                break;
            case 'Instagram':
                icon = <FaSquareInstagram size={18} color='#c13584' />;
                break;
            case 'Dribbble':
                icon = <FaSquareDribbble size={18} color='#ea4c89' />;
                break;
            case 'LinkedIn':
                icon = <FaLinkedin size={18} color='#0a66c2' />;
                break;
            case 'Twitter':
                icon = <RiTwitterXFill size={17} color='#000' />;
                break;
            default:
                icon = null;
        }

        return (
            <div className={`bg-white  w-fit rounded-[3px]`}>
                {icon}
            </div>
        );
    };


    return (
        <div className={`w-full h-full ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'text-[color:var(--primary-dark)] bg-white'} rounded-[5px]`}>
            <div className={`p-3 px-5 flex justify-between items-center border-b ${isDarkMode ? 'border-b-[#494949]' : 'border-b-[#cccccc]'} border-dashed`}>
                <h1 className='text-lg tracking-tight'>Social Media Visitors</h1>
                <div className='w-fit flex justify-center gap-2'>
                    {
                        tableFilters?.map((data) => (
                            <button onClick={() => setActiveTableFilterId(data?.id)} key={data?.id} className={`border active:scale-95 transition-all duration-200 ease-in-out ${isDarkMode ? 'border-[#173f6d]' : !isDarkMode && activeTableFilterId == data?.id ? 'border-[#63b1ff] text-white' : 'border-[#63b1ff] text-[color:var(--primary-color)]'} ${activeTableFilterId == data?.id ? 'bg-[color:var(--primary-color)] text-[color:var(--primary-dark)]' : ''} text-[12px] rounded-[5px] py-1 px-2`}>{data?.title}</button>
                        ))
                    }
                </div>
            </div>
            <div className='w-full mt-7 px-4 pb-3'>
                <div className={`w-full flex justify-between items-center py-2 px-3 mb-2 rounded-[5px] ${isDarkMode ? 'text-white bg-[#2f3031]' : 'text-[color:var(--primary-dark)] bg-gray-200'}`}>
                    <h1 className='text-[15px] font-[400]'>Sources</h1>
                    <h1 className='text-[15px] font-[400]'>Visitors</h1>
                </div>
                <div className='w-full flex flex-col'>
                    {
                        tableData?.filter((filterData) => filterData?.id == activeTableFilterId)[0]?.data?.map((data) => (
                            <div key={data?.id} className={`w-full flex justify-between items-center py-[7px] px-3 rounded-[5px] ${isDarkMode ? 'hover:bg-[#2f3031] text-white' : 'hover:bg-gray-300 text-[color:var(--primary-dark)]'}`}>
                                <h1 className='text-[14px] flex items-center gap-3'>
                                    {iconAssigner(data?.media)}
                                    {data?.media}
                                </h1>
                                <h1 className='text-[14px]'>{data?.visits}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialMediaVisitors
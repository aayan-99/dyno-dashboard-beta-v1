'use client'

import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import useDarkModeStore from '@/app/stores/themeStore';
import archer from '@/app/assets/images/Archer.jpg'
import christopher from '@/app/assets/images/Christopher.jpg'
import zana from '@/app/assets/images/Zana.jpg'
import candice from '@/app/assets/images/Candice.jpg'
import charlette from '@/app/assets/images/Charlette.jpg'
import Image from 'next/image';

const NewCustomers = () => {

    const { isDarkMode } = useDarkModeStore();

    const customerData = [
        {
            id: 0,
            title: 'Iftikar Ammed',
            username: '@iftikarahmed',
            pic: archer,
            orders: 2,
            total: '$18,603'
        },
        {
            id: 0,
            title: 'Josh Linn',
            username: '@joshlinn',
            pic: christopher,
            orders: 2,
            total: '$18,603'
        },
        {
            id: 0,
            title: 'Anida Drew',
            username: '@ineedadrew',
            pic: zana,
            orders: 2,
            total: '$18,603'
        },
        {
            id: 0,
            title: 'Brenda McLoven',
            username: '@mcLovenit',
            pic: candice,
            orders: 2,
            total: '$18,603'
        },
        {
            id: 0,
            title: 'Dom Jhonson',
            username: '@domJhon',
            pic: charlette,
            orders: 2,
            total: '$18,603'
        },
    ];

    return (
        <div className={`w-full h-full ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'text-[color:var(--primary-dark)] bg-white'} rounded-[5px]`}>
            <div className={`p-3 px-5 flex justify-between items-center border-b ${isDarkMode ? 'border-b-[#494949]' : 'border-b-[#cccccc]'} border-dashed`}>
                <h1 className='text-lg tracking-tight'>New Customers</h1>
                <div className='w-fit flex justify-center gap-2 border border-[#7a7a7a] rounded-[2px] p-1'>
                    <HiOutlineDotsVertical size={17} color='#b6b6b6' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-5 py-5 px-3 md:p-5'>
                {
                    customerData?.map((data) => (
                        <div key={data?.id} className='w-full flex justify-between items-start'>
                            <div className='w-fit flex items-start gap-2 md:gap-4'>
                                <div className='w-full max-w-[50px] aspect-square'>
                                    <Image src={data?.pic} className="w-full h-full rounded-full object-cover"   alt='Profile Pic' />
                                </div>
                                <div className='w-fit flex flex-col gap-[2px]'>
                                    <h1 className='text-[13px] md:text-[17px]'>{data?.title}</h1>
                                    <h1 className='text-[12px] md:text-[15px] text-gray-500'>{data?.username}</h1>
                                </div>
                            </div>
                            <div className='w-fit flex items-center gap-4 md:gap-8'>
                                <h1 className='text-[12px] md:text-[14px] font-[600]'>{data?.orders} orders</h1>
                                <h1 className='text-[14px] md:text-[16px] font-[400]'>{data?.total}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewCustomers
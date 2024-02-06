'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import useSidebarStore from '@/app/stores/sidebarStore';
import useDarkModeStore from '@/app/stores/themeStore';
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import profile from '@/app/assets/images/profile.jpg'
import PopupTip from '@/app/components/global-components/PopupTip';

const NavLinks = ({ icon }: { icon: string }) => {
    return (
        <div className='w-fit p-2 border rounded-[8px]'>
            <Image src={icon} width={15} alt='Icon' />
        </div>
    )
};

const Navbar = () => {

    const [allPopUpToggle, setAllPopUpToggle] = useState({
        messageToggleOpen: false,
        notificationToggleOpen: false,
    });

    const { sidebarOpen, toggleSidebar } = useSidebarStore();
    const { isDarkMode } = useDarkModeStore();

    const allFalse = Object.values(allPopUpToggle).every(value => value === false);

    const handleOverlayClick = () => {
        setAllPopUpToggle({
            messageToggleOpen: false,
            notificationToggleOpen: false,
        });
    };

    const mockData = [
        {
            id: 0,
            name: 'Archer Cowie',
            lastActive: '2 hours ago',
            activity: 'likes',
            pic: '',
            message: `If the option "Filter duplicate users" is enabled, it means that if a user adds two comments on your giveaway video, it's only counted as one entry.`
        },
        
        {
            id: 1,
            name: 'Cody Rodway',
            lastActive: '2 hours ago',
            activity: 'commented on',
            pic: '',
            message: `If the option "Filter duplicate users" is enabled, it means that if a user adds two comments on your giveaway video, it's only counted as one entry.`
        },
        {
            id: 2,
            name: 'Zane Cole',
            lastActive: '2 hours ago',
            activity: 'shared',
            pic: '',
            message: `If the option "Filter duplicate users" is enabled, it means that if a user adds two comments on your giveaway video, it's only counted as one entry.`
        },
        {
            id: 3,
            name: 'Christopher Drew',
            lastActive: '2 hours ago',
            activity: 'likes',
            pic: '',
            message: `If the option "Filter duplicate users" is enabled, it means that if a user adds two comments on your giveaway video, it's only counted as one entry.`
        },
        {
            id: 4,
            name: 'Charlie Flenderson',
            lastActive: '2 hours ago',
            activity: 'commented on',
            pic: '',
            message: `If the option "Filter duplicate users" is enabled, it means that if a user adds two comments on your giveaway video, it's only counted as one entry.`
        },
    ];

    return (
        <>

            {/* desktop navbar */}
            <div className={`${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'} z-[50] w-full hidden md:flex justify-between items-center py-4 pr-8 fixed top-0`}>
                <div className='w-full flex items-center gap-10 px-4'>
                    <div className={` ${sidebarOpen ? 'pl-[280px]' : 'pl-[70px]'} transition-all duration-200 ease-in-out flex justify-center gap-5 items-center mr-5`}>
                        <HiMenuAlt2 className={`${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer`} size={40} color='' onClick={toggleSidebar} />
                    </div>
                    <div className='w-full flex justify-end items-center gap-10'>
                        <div className={`hidden md:flex items-center bg-white pl-2 rounded-[8px] bg-transparent ${isDarkMode ? ' border border-gray-600' : ' border border-gray-300'}`}>
                            <IoSearch className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={25} />
                            <input type="text" className={`w-full min-w-[200px] max-w-[300px] px-2 py-2 outline-none rounded-[8px] text-[14px] ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-gray-200' : 'bg-white text-black'}`} placeholder='Search' />
                        </div>
                        <div className='relative'>
                            <span className='w-5 h-5 flex justify-center items-center text-[12px] -translate-y-2 translate-x-2 bg-red-600 absolute top-0 rounded-full right-0'>
                                <p className='text-white'>4</p>
                            </span>
                            <BiMessageRoundedDetail onClick={() => setAllPopUpToggle({
                                ...allPopUpToggle,
                                messageToggleOpen: !allPopUpToggle?.messageToggleOpen
                            })} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={35} />
                            {
                                allPopUpToggle?.messageToggleOpen ? (
                                    <PopupTip children={(
                                        <div className='w-full max-h-[350px] overflow-y-scroll'>
                                            {
                                                mockData?.map((data) => (
                                                    <div className='w-full' key={data?.id}>
                                                        <div className='w-full flex'>
                                                            <div className='max-w-[50px] aspect-square w-full'>
                                                                <div className='w-full bg-red-200 rounded-full'>

                                                                </div>
                                                            </div>
                                                            <div className='w-full flex flex-col'>
                                                                <h1>{data?.name}</h1>
                                                                <h1>{data?.message}</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )} />
                                ) : null
                            }
                        </div>
                        <div className='relative'>
                            <span className='w-5 h-5 flex justify-center items-center text-[12px] -translate-y-2 translate-x-1 bg-red-600 absolute top-0 rounded-full right-0'>
                                <p className='text-white'>9+</p>
                            </span>
                            <MdOutlineNotifications onClick={() => setAllPopUpToggle({
                                ...allPopUpToggle,
                                notificationToggleOpen: !allPopUpToggle?.notificationToggleOpen
                            })} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={33} />
                            {
                                allPopUpToggle?.notificationToggleOpen ? (
                                    <PopupTip children={(
                                        <div className='w-full h-[300px] bg-red-400'>

                                        </div>
                                    )} />
                                ) : null
                            }
                        </div>
                        <div className=''>
                            <Image src={profile} alt='Profile' className={`${isDarkMode ? 'text-[color:var(--primary-dark)]' : 'text-white'} w-[35px] rounded-full`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile navbar */}
            <div className={`${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'} w-full flex md:hidden justify-between items-center py-4 pr-8 fixed top-0`}>
                <div className='w-full flex items-center gap-10 px-4'>
                    <div className={` pl-4 transition-all duration-200 ease-in-out flex justify-center gap-5 items-center mr-5`}>
                        <HiMenuAlt2 className={`${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer`} size={40} color='' onClick={toggleSidebar} />
                    </div>
                    <div className='w-full flex justify-end items-center gap-10'>
                        <div className={`hidden md:flex items-center bg-white pl-2 rounded-[8px] ${isDarkMode ? 'bg-[#242526] border border-gray-600' : 'bg-white border border-gray-300'}`}>
                            <IoSearch className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={25} />
                            <input type="text" className={`w-full min-w-[200px] max-w-[300px] px-2 py-2 outline-none rounded-[8px] text-[14px] ${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'}`} placeholder='Search' />
                        </div>
                        <div className='relative'>
                            <span className='w-5 h-5 flex justify-center items-center text-[12px] -translate-y-2 translate-x-2 bg-red-600 absolute top-0 rounded-full right-0'>
                                <p className='text-white'>4</p>
                            </span>
                            <BiMessageRoundedDetail className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={35} />
                        </div>
                        <div className='relative'>
                            <span className='w-5 h-5 flex justify-center items-center text-[12px] -translate-y-2 translate-x-1 bg-red-600 absolute top-0 rounded-full right-0'>
                                <p className='text-white'>9+</p>
                            </span>
                            <MdOutlineNotifications className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={33} />
                        </div>
                        <div className=''>
                            <Image src={profile} alt='Profile' className={`${isDarkMode ? 'text-[color:var(--primary-dark)]' : 'text-white'} w-[35px] rounded-full`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* overlay */}
            <div className={`fixed inset-0 h-screen z-[10] bg-red-400 opacity-5 ${allFalse ? 'hidden' : 'block'}`} onClick={handleOverlayClick} />

        </>
    )
}

export default Navbar
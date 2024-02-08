'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import useSidebarStore from '@/app/stores/sidebarStore';
import useDarkModeStore from '@/app/stores/themeStore';
import useSettingsToggle from "@/app/stores/settingsStore";
import PopupTip from '@/app/components/global-components/PopupTip';
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";
import profile from '@/app/assets/images/profile.jpg'
import archer from '@/app/assets/images/Archer.jpg'
import christopher from '@/app/assets/images/Christopher.jpg'
import zana from '@/app/assets/images/Zana.jpg'
import candice from '@/app/assets/images/Candice.jpg'
import charlette from '@/app/assets/images/Charlette.jpg'
import DateBar from '@/app/components/dashboard-components/DateBar';


const Navbar = () => {

    const [allPopUpToggle, setAllPopUpToggle] = useState({
        messageToggleOpen: false,
        notificationToggleOpen: false,
    });

    const { sidebarOpen, toggleSidebar } = useSidebarStore();
    const { toggleSettingsOpen } = useSettingsToggle();
    const { isDarkMode } = useDarkModeStore();

    const [mobileDotsMenuToggle, setMobileDotsMenuToggle] = useState(false);

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
            pic: archer,
            message: `If the option "Filter duplicate users" is enabled, it means that if a user adds two comments on your giveaway video, it's only counted as one entry.`
        },

        {
            id: 1,
            name: 'Candice Rodway',
            lastActive: '2 hours ago',
            activity: 'commented on',
            pic: candice,
            message: `Ensure you import and use DarkModeToggle in your pages or layout components, and the dark mode should work as expected. Don't forget to import and include useDarkModeStore in your pages or layout components where you want to access and update the dark mode state`
        },
        {
            id: 2,
            name: 'Zana Cole',
            lastActive: '2 hours ago',
            activity: 'shared',
            pic: zana,
            message: `The FutureBuilder widget is used to asynchronously build the UI based on the result of the fetchData function. When the snapshot has data, it maps through the items and displays a Text widget for each item. When the snapshot has an error, it displays the error message. And when the snapshot is loading, it displays a CircularProgressIndicator.`
        },
        {
            id: 3,
            name: 'Christopher Drew',
            lastActive: '2 hours ago',
            activity: 'likes',
            pic: christopher,
            message: `By far the biggest risk is the presence of the antenna particularly if it is a vertical whip. Raising a vertical conductor over a flat surface is asking for a strike. To mitigate equipment and structure damage it is common practice to provide an antenna switch which connects the antenna to the sea through a low impedance path and can be used when the radio is not in use or if lightning is likely.`
        },
        {
            id: 4,
            name: 'Charlette Flenderson',
            lastActive: '2 hours ago',
            activity: 'commented on',
            pic: charlette,
            message: `Usually the offset voltage is determined by mismatches in the input circuit. That means the transistors in the differential pair, load resistors, etc. On a chip these things are intrinsically matched because they are fabricated at the same time. In a discrete circuit you might need to manually match these components. I think you can buy transistor pairs in a single package. I remember seeing an (old) discrete op amp with input transistors wrapped with a piece of metal to keep the temperatures uniform.`
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
                        <div className={`hidden md:flex items-center pl-2 rounded-[8px] bg-transparent ${isDarkMode ? ' border border-gray-600' : ' border border-gray-300'}`}>
                            <IoSearch className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={25} />
                            <input type="text" className={`w-full min-w-[200px] max-w-[300px] px-2 py-2 outline-none rounded-[8px] text-[14px] ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-gray-200' : 'bg-white text-black'}`} placeholder='Search' />
                        </div>
                        <div className='relative'>
                            <span className='w-5 h-5 flex justify-center items-center text-[12px] -translate-y-2 translate-x-2 bg-red-600 absolute top-0 rounded-full right-0'>
                                <p className='text-white'>4</p>
                            </span>
                            <BiMessageRoundedDetail onClick={() => setAllPopUpToggle({
                                messageToggleOpen: !allPopUpToggle?.messageToggleOpen,
                                notificationToggleOpen: false,
                            })} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={35} />
                            {
                                allPopUpToggle?.messageToggleOpen ? (
                                    <PopupTip onButtonClick={() => setAllPopUpToggle({
                                        ...allPopUpToggle,
                                        messageToggleOpen: false,
                                    })} children={(
                                        <div className='w-full max-h-[350px] overflow-y-scroll'>
                                            {
                                                mockData?.filter((filterData) => filterData?.id !== 0)?.map((data) => (
                                                    <div className='w-full' key={data?.id}>
                                                        <div className={`w-full flex items-start cursor-pointer ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-200'} transition-all duration-300 ease-in-out p-3`}>
                                                            <div className='max-w-[50px] aspect-square w-full'>
                                                                <div className='w-10 h-10 rounded-full'>
                                                                    <Image src={data?.pic} alt='Profile Pic' className='w-full h-full rounded-full object-cover' />
                                                                </div>
                                                            </div>
                                                            <div className='w-full flex flex-col'>
                                                                <h1 className='text-[13px] font-[700]'>{data?.name}</h1>
                                                                <h1 className='text-[12px] mb-1'>{data?.message?.length > 10 ? data?.message?.substring(0, 56) + "..." : data?.message}</h1>
                                                                <h1 className='text-[12px] font-[500]'>{data?.lastActive}</h1>
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
                                notificationToggleOpen: !allPopUpToggle?.notificationToggleOpen,
                                messageToggleOpen: false,
                            })} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={33} />
                            {
                                allPopUpToggle?.notificationToggleOpen ? (
                                    <PopupTip onButtonClick={() => setAllPopUpToggle({
                                        ...allPopUpToggle,
                                        notificationToggleOpen: false,
                                    })} children={(
                                        <div className='w-full max-h-[350px] overflow-y-scroll'>
                                            {
                                                mockData?.filter((filterData) => filterData?.id !== 0)?.map((data) => (
                                                    <div className='w-full' key={data?.id}>
                                                        <div className={`w-full flex items-start cursor-pointer ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-200'} transition-all duration-300 ease-in-out p-3`}>
                                                            <div className='max-w-[50px] aspect-square w-full'>
                                                                <div className='w-10 h-10 rounded-full'>
                                                                    <Image src={data?.pic} alt='Profile Pic' className='w-full h-full rounded-full object-cover' />
                                                                </div>
                                                            </div>
                                                            <div className='w-full flex flex-col'>
                                                                <h1 className='text-[13px] font-[500] flex gap-2 items-start'>{data?.activity == 'likes' ? (<AiFillLike color="#2596be" size={20} />) : data?.activity == 'commented on' ? (<MdOutlineMessage color="#2596be" size={28} />) : (<FaShareNodes color="#2596be" size={18} />)} {`${data?.name} ${data?.activity} your post`}</h1>
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
                        <div className=''>
                            <Image src={profile} alt='Profile' className={`${isDarkMode ? 'text-[color:var(--primary-dark)]' : 'text-white'} w-[35px] rounded-full`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile navbar */}
            <div className={`${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'} w-full flex md:hidden justify-between items-center py-4 md:pr-8 fixed top-0`}>
                <div className='w-full flex items-center gap-10 px-4'>
                    <div className={`transition-all duration-200 ease-in-out flex justify-center gap-5 items-center `}>
                        <HiMenuAlt2 className={`${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer`} size={40} color='' onClick={toggleSidebar} />
                    </div>
                    <div className='w-full flex justify-end items-center gap-6'>
                        <div className="">
                            <HiOutlineDotsVertical onClick={() => setMobileDotsMenuToggle(!mobileDotsMenuToggle)} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={17} />
                            <div className={`fixed left-0 top-[7%] w-full z-[120] ${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'} flex justify-between items-center px-5 transition-all duration-200 ease-in-out ${mobileDotsMenuToggle ? 'h-[70px]' : 'h-0 overflow-hidden'}`}>
                                <div className='block md:hidden'>
                                    <DateBar />
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className='relative'>
                                        <span className='w-5 h-5 flex justify-center items-center text-[12px] -translate-y-2 translate-x-2 bg-red-600 absolute top-0 rounded-full right-0'>
                                            <p className='text-white'>4</p>
                                        </span>
                                        <BiMessageRoundedDetail onClick={() => setAllPopUpToggle({
                                            messageToggleOpen: !allPopUpToggle?.messageToggleOpen,
                                            notificationToggleOpen: false,
                                        })} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={30} />
                                        {
                                            allPopUpToggle?.messageToggleOpen ? (
                                                <PopupTip onButtonClick={() => setAllPopUpToggle({
                                                    ...allPopUpToggle,
                                                    messageToggleOpen: false,
                                                })} children={(
                                                    <div className='w-full max-h-[350px] overflow-y-scroll'>
                                                        {
                                                            mockData?.filter((filterData) => filterData?.id !== 0)?.map((data) => (
                                                                <div className='w-full' key={data?.id}>
                                                                    <div className={`w-full flex items-start cursor-pointer ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-200'} transition-all duration-300 ease-in-out p-3`}>
                                                                        <div className='max-w-[50px] aspect-square w-full'>
                                                                            <div className='w-10 h-10 rounded-full'>
                                                                                <Image src={data?.pic} alt='Profile Pic' className='w-full h-full rounded-full object-cover' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='w-full flex flex-col'>
                                                                            <h1 className='text-[13px] font-[700]'>{data?.name}</h1>
                                                                            <h1 className='text-[12px] mb-1'>{data?.message?.length > 10 ? data?.message?.substring(0, 56) + "..." : data?.message}</h1>
                                                                            <h1 className='text-[12px] font-[500]'>{data?.lastActive}</h1>
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
                                            notificationToggleOpen: !allPopUpToggle?.notificationToggleOpen,
                                            messageToggleOpen: false,
                                        })} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={28} />
                                        {
                                            allPopUpToggle?.notificationToggleOpen ? (
                                                <PopupTip onButtonClick={() => setAllPopUpToggle({
                                                    ...allPopUpToggle,
                                                    notificationToggleOpen: false,
                                                })} children={(
                                                    <div className='w-full max-h-[350px] overflow-y-scroll'>
                                                        {
                                                            mockData?.filter((filterData) => filterData?.id !== 0)?.map((data) => (
                                                                <div className='w-full' key={data?.id}>
                                                                    <div className={`w-full flex items-start cursor-pointer ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-200'} transition-all duration-300 ease-in-out p-3`}>
                                                                        <div className='max-w-[50px] aspect-square w-full'>
                                                                            <div className='w-10 h-10 rounded-full'>
                                                                                <Image src={data?.pic} alt='Profile Pic' className='w-full h-full rounded-full object-cover' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='w-full flex flex-col'>
                                                                            <h1 className='text-[13px] font-[500] flex gap-2 items-start'>{data?.activity == 'likes' ? (<AiFillLike color="#2596be" size={20} />) : data?.activity == 'commented on' ? (<MdOutlineMessage color="#2596be" size={28} />) : (<FaShareNodes color="#2596be" size={18} />)} {`${data?.name} ${data?.activity} your post`}</h1>
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
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <TbSettings onClick={toggleSettingsOpen} className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={30} />
                        </div>
                        <div className=''>
                            <Image src={profile} alt='Profile' className={`${isDarkMode ? 'text-[color:var(--primary-dark)]' : 'text-white'} w-[30px] rounded-full`} />
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
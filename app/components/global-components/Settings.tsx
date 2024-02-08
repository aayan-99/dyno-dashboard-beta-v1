'use client'

import React from 'react';
import dark from '@/app/assets/icons/dark.svg';
import light from '@/app/assets/icons/light.svg';
import tick from '@/app/assets/icons/tick.svg';
import useSettingsToggle from '@/app/stores/settingsStore';
import useDarkModeStore from '@/app/stores/themeStore';
import { TbSettings } from "react-icons/tb";
import Image from 'next/image';

const Settings = () => {

    const { settingsOpen, toggleSettingsOpen } = useSettingsToggle();
    const { isDarkMode, setDarkMode, setLightMode } = useDarkModeStore();

    return (
        <>
            <div className={`${isDarkMode ? 'bg-[color:var(--primary-dark)]' : 'bg-white'} h-screen fixed top-0 right-0 transition-all z-[100] duration-200 ease-in-out ${settingsOpen ? 'w-[300px]' : 'w-[0px]'}`}>
                <div className='w-full h-full relative'>
                    <div className='absolute w-full full h-full inset-0 md:flex justify-start items-center hidden'>
                        <span className='min-w-[50px] min-h-[50px] rounded-l-full -translate-x-[50px] flex justify-center items-center bg-[color:var(--primary-color)] cursor-pointer' onClick={toggleSettingsOpen}>
                            <TbSettings className='text-white' size={30} />
                        </span>
                    </div>
                    <div className='w-full'>
                        <div className='bg-[color:var(--primary-color)] px-5 py-2'>
                            <h1 className='text-[16px] text-white font-[600]'>Layout Settings</h1>
                        </div>
                        <div className='w-full p-5'>
                            <div className='w-full flex flex-col gap-3 justify-center items-start'>
                                <h1 className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-black'}  font-[400]`}>Theme Color</h1>
                                <div className='w-full flex items-center gap-5'>
                                    <div className={`relative border-[color:var(--primary-color)] rounded-[8px] bg-gray-800 ${isDarkMode ? 'border-4' : 'border-2'}`} onClick={setDarkMode}>
                                        <Image src={dark} width={80} alt='Dark Mode' className='rounded-[8px]' />
                                        {
                                            isDarkMode ? (
                                                <span className='w-4 h-4 bg-[color:var(--primary-color)] flex justify-center items-center rounded-full absolute -top-[2px] -right-[2px]'>
                                                    <Image src={tick} alt='Tick' width={13} className='rounded-full' />
                                                </span>
                                            ) : null
                                        }
                                    </div>
                                    <div className={`relative border-[color:var(--primary-color)] rounded-[8px] bg-gray-200 ${isDarkMode ? 'border-2' : 'border-4'}`} onClick={setLightMode}>
                                        <Image src={light} width={80} alt='Dark Mode' className='rounded-[8px]' />
                                        {
                                            !isDarkMode ? (
                                                <span className='w-4 h-4 bg-[color:var(--primary-color)] flex justify-center items-center rounded-full absolute -top-[2px] -right-[2px]'>
                                                    <Image src={tick} alt='Tick' width={13} className='rounded-full' />
                                                </span>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 bg-black opacity-5 ${settingsOpen ? 'block' : 'hidden'} z-[90]`} onClick={toggleSettingsOpen} />
        </>
    )
}

export default Settings
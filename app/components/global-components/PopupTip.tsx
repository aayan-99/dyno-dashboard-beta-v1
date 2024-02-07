import useDarkModeStore from '@/app/stores/themeStore';
import React, { ReactNode } from 'react'

const PopupTip = ({ children, onButtonClick }: { children: ReactNode, onButtonClick?: any}) => {
    
    const { isDarkMode } = useDarkModeStore();

    return (
        <div className={`z-[100] w-full min-w-[290px] absolute right-0 top-[102%] ${isDarkMode ? 'text-white bg-[color:var(--primary-dark)] border-gray-600' : 'text-black bg-white border-gray-300'} border rounded-[4px]`}>
            <div className='w-full flex flex-col relative'>
                <div className='w-full bg-'>
                    {children}
                </div>
                <div className='w-full p-2'>
                <button onClick={onButtonClick} className={`w-full active:scale-95 transition-all duration-200 ease-in-out border border-[color:var(--primary-color)] rounded-[4px] justify-center items-center flex text-[13px] font-[400] py-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>show all messages</button>
                </div>
            </div>
        </div>
    )
}

export default PopupTip
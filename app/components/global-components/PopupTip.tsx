import React, { ReactNode } from 'react'

const PopupTip = ({ children }: { children: ReactNode}) => {
    return (
        <div className={`z-[100] w-full min-w-[270px] absolute right-0 top-[102%] text-white bg-[color:var(--primary-dark)] border border-gray-600 rounded-[4px]`}>
            <div className='w-full p-3 flex flex-col relative'>
                <div className='w-full bg- mb-4'>
                    {children}
                </div>
                <button className='w-full border border-[color:var(--primary-color)] rounded-[4px] justify-center items-center flex text-[13px] font-[800] py-1 text-white'>show all messages</button>
            </div>
        </div>
    )
}

export default PopupTip
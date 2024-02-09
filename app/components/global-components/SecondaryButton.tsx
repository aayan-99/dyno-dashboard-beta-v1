import useDarkModeStore from '@/app/stores/themeStore';
import React from 'react'

const SecondaryButton = ({ btnText }: { btnText: string }) => {
    
    const { isDarkMode } = useDarkModeStore();

  return (
    <button className={`px-2 p-1 rounded-[5px] ${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'} text-[14px] border border-[#4b6b8b] hover:bg-[#2590fc98] transition-all duration-200 ease-in-out active:scale-95`}>{btnText}</button>
  )
}

export default SecondaryButton
import React from 'react'

const PrimaryButton = ({ btnText }: { btnText: string }) => {
  return (
    <button className={`px-2 p-1 rounded-[5px] bg-[color:var(--primary-color)] text-[14px] text-white hover:bg-[#2590fc8c] transition-all duration-200 ease-in-out active:scale-95`}>{btnText}</button>
  )
}

export default PrimaryButton
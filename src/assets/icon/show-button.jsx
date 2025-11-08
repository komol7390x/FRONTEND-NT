import React from 'react'

export const ShowButton = ({ title = 'Shop Now', bg = ''}) => {
    return (
        <div className={`text-white gap-4 mt-7 inline-flex rounded-[53px] items-center px-8 py-3 bg-${bg}`}>
            <p className='text-[#00B307] font-semibold'>{title}</p>
            <span>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 6.77502H0.75" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.70001 0.75L15.75 6.774L9.70001 12.799" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </div >
    )
}

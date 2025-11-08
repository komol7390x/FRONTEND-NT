import middle from '../../../assets/png/male.png'
import right from '../../../assets/png/fruit-2.png'
import { useEffect, useState } from 'react'
import { LeftBanner } from './middle-banner/left-banner'

export const Sale = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-6 justify-between mb-[60px]'>
                {/* left */}
                <div className='hover:scale-105 transition-all hover:shadow-[5px_10px_18px_5px_rgba(32,181,38,0.32)] duration-500'>
                <LeftBanner days='5' />
                </div>

                {/* middle */}
                <div className='relative hover:scale-105 transition-all hover:shadow-[5px_10px_18px_5px_rgba(32,181,38,0.32)] duration-500'>
                    <img src={middle} alt="middle" />
                </div>

                {/* right */}
                <div className='relative hover:scale-105 transition-all hover:shadow-[5px_10px_18px_5px_rgba(32,181,38,0.32)] duration-500'>
                    <img src={right} alt="right" />
                </div>
            </div>
        </div>
    )
}

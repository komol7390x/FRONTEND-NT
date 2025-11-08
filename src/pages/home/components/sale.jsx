import middle from '../../../assets/png/male.png'
import right from '../../../assets/png/fruit-2.png'
import { useEffect, useState } from 'react'
import { LeftBanner } from './middle-banner/left-banner'

export const Sale = () => {
    return (
        <div className='container'>
            <div className='flex gap-6'>
                {/* left */}
                <LeftBanner days='5' />

                {/* middle */}
                <div className='relative'>
                    <img src={middle} alt="middle" />
                </div>

                {/* right */}
                <div className='relative'>
                    <img src={right} alt="right" />
                </div>
            </div>
        </div>
    )
}

import { LeftBanner } from './middle-banner/left-banner'
import { MiddleBanner } from './middle-banner/middle-banner'
import { RightBanner } from './middle-banner/right-banner'

export const Sale = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-6 justify-between mb-[60px]'>
                {/* left */}
                <LeftBanner days='5' />

                {/* middle */}
                <MiddleBanner />

                {/* right */}
                <RightBanner />
            </div>
        </div>

    )
}

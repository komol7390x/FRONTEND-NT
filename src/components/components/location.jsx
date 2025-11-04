import { OptionIcon } from '../../assets/icon/option-icon'
import navigator from '../../assets/svg/navigator.svg'

export const Location = () => {
    return (
        <div className='flex justify-between items-center'>

            {/* location */}
            <div className='flex gap-2'>
                <img src={navigator} alt={'navigator'} />
                <p className='text-primary-soft-grey text-[12px]'>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>

            {/* singup */}
            <div className='text-primary-soft-grey text-[12px] flex gap-4 items-center'>

                <div className='flex gap-3'>

                    <div className='flex gap-1.5 items-center'>
                        <h3>Eng</h3>
                        <OptionIcon />
                    </div>

                    <div className='flex gap-1.5 items-center'>
                        <h3>USD</h3>
                        <OptionIcon />
                    </div>

                </div>

                <div>
                    <span>
                        <svg width="1" height="15" viewBox="0 0 1 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="15" stroke="#E6E6E6" />
                        </svg>
                    </span>
                </div>

                <div className='flex gap-1'>
                    <h3>Sign In</h3>
                    <p>/</p>
                    <h3>Sign Up</h3>
                </div>

            </div>
        </div>
    )
}

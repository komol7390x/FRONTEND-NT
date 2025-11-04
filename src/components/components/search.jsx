import { Logo } from '../../assets/icon/logo'
import heart from '../../assets/svg/heart.svg'
import basket from '../../assets/svg/basket.svg'
import { Link } from 'react-router-dom'

export const Search = () => {
    return (
        <div className='flex justify-between items-center py-[30px]'>
            <Link to={'/'}>
                <Logo />
            </Link>

            {/* Search */}
            <div className='flex relative'>

                <span className='absolute top-[50%] pl-15 -translate-[50%]'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41667 14.0833C11.0986 14.0833 14.0833 11.0986 14.0833 7.41667C14.0833 3.73477 11.0986 0.75 7.41667 0.75C3.73477 0.75 0.75 3.73477 0.75 7.41667C0.75 11.0986 3.73477 14.0833 7.41667 14.0833Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.7499 15.75L12.1249 12.125" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>

                <input type="text" className='w-[400px] grow rounded-l-md pl-12 pr-4 border border-soft-grey outline-none' placeholder='Search' />
                <Link>
                    <p className='bg-primary-normal-gray rounded-r-md py-3.5 px-8 text-white'>Search</p>
                </Link>
            </div>

            {/* Basket */}
            <div className='flex items-center gap-4'>
                <div>
                    <img src={heart} alt="heart" />
                </div>

                <span>
                    <svg width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#CCCCCC" />
                    </svg>
                </span>

                <div className='flex gap-3'>
                    <img src={basket} alt="basket" />
                    <div>
                        <h3 className='text-primary-soft-grey text-[12px]'>Shopping cart:</h3>
                        <p>$57.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

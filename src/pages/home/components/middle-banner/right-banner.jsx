import { Link } from 'react-router-dom'
import { ShowButton } from '../../../../assets/icon/show-button'
import right from '../../../../assets/png/fruit-2.png'


export const RightBanner = () => {
    return (
        <div className='hover:scale-105 transition-all  duration-500'>
            <div className="relative w-[424px] h-[536px] bg-cover bg-center" style={{ backgroundImage: `url('${right}')` }}>
                <div className="relative z-10 text-black justify-center items-center text-center pt-7">
                    <div>
                        <p className='text-[14px] font-medium uppercase'>Summer Sale</p>
                        <h3 className='text-[40px] font-semibold'>100% Fresh Fruit</h3>
                        <div className='flex justify-center gap-2 items-center'>
                            <p className='text-[20px] font-light'>Up to</p><p className='text-[#FCC900] py-1.5 px-3 rounded-[5px] bg-[#191919] text-[20px] font-normal'>64% OFF</p>
                        </div>
                        <Link to={`product/${3}`}><ShowButton bg='white' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

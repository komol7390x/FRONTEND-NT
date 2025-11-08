import car from '../../../assets/svg/car.svg'
import headphone from '../../../assets/svg/headphone.svg'
import box from '../../../assets/svg/box.svg'
import bag from '../../../assets/svg/bags.svg'



export const Hero = () => {
    return (
        <>
            <div className='p-10 rounded-lg mb-15 flex justify-between items-center shadow-[0_8px_40px_0_rgba(0,38,3,0.08)]'>

                <div className='gap-4 inline-flex items-center'>
                    <img src={car} alt="car" />
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-[16px] font-semibold'>Free Shipping</h4>
                        <p className='text-primary-soft-grey text-[14px]'>Free shipping on all your order</p>
                    </div>
                </div>

                <div className='gap-4 inline-flex items-center'>
                    <img src={headphone} alt="headphone" />
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-[16px] font-semibold'>Customer Support 24/7</h4>
                        <p className='text-primary-soft-grey text-[14px]'>Instant access to Support</p>
                    </div>
                </div>

                <div className='gap-4 inline-flex items-center'>
                    <img src={bag} alt="bag" />
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-[16px] font-semibold'>100% Secure Payment</h4>
                        <p className='text-primary-soft-grey text-[14px]'>We ensure your money is save</p>
                    </div>
                </div>

                <div className='gap-4 inline-flex items-center'>
                    <img src={box} alt="box" />
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-[16px] font-semibold'>Money-Back Guarantee</h4>
                        <p className='text-primary-soft-grey text-[14px]'>30 Days Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </>
    )
}

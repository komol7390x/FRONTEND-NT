import { Link } from "react-router-dom"
import { ShowButton } from "../../../assets/icon/show-button"

import girl from '../../../assets/svg/banner-girl.svg'
import fruits from '../../../assets/png/fruit-up.png'
import tree from '../../../assets/png/down-tree.png'

export const Banner = () => {
    return (
        <>
            {/* banner */}
            <div className='flex justify-between mb-6'>

                {/* left-banner */}
                <div className='relative'>
                    <img src={girl} alt={'girl-img'} width={'872px'} height={'600px'} />

                    {/* info */}
                    <div className='absolute left-0 top-0 pt-[100px] pl-[60px]'>
                        <h3 className='text-[48px] w-[400px] text-white font-semibold'>Fresh & Healthy Organic Food</h3>

                        {/* sale 30% */}
                        <div className='flex gap-3 mt-7'>
                            <span>
                                <svg width="2" height="65" viewBox="0 0 2 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="65" fill="#84D187" />
                                </svg>
                            </span>
                            <div className='flex flex-col justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <h2 className='font-medium text-white text-[20px]'>Sale up to</h2>
                                    <p className='bg-[#FF8A00] px-3 py-1 text-white rounded-[5px] font-semibold text-[20px]'>30% OFF</p>
                                </div>
                                <p className='text-[#CCE0D2] font-normal text-[14px]'>Free shipping on all your order.</p>
                            </div>
                        </div>

                        {/* button */}
                        <Link>
                            <ShowButton bg='white' />
                        </Link>
                    </div>
                </div>

                {/* right-banner */}
                <div className='w-[423px] flex flex-col justify-between'>

                    {/* up */}
                    <div className='relative'>
                        <img src={fruits} alt="fruits" />
                        <div className='absolute top-0 left-0 pl-8 pt-8 '>
                            <h3 className='text-[14px] font-medium uppercase'>Summer Sale</h3>
                            <p className='font-semibold text-[30px] mt-2'>75% OFF</p>
                            <p className='font-normal text-[14px] text-primary-soft-grey mt-3'>Only Fruit & Vegetable</p>
                            <div className='-ml-8 -mt-6'>
                                <Link>
                                    <ShowButton bg={'#FFF'} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* down */}
                    <div className='relative'>
                        <img src={tree} alt="tree" />
                        <div className='absolute top-0 left-0 text-white text-center px-17'>
                            <p className='font-medium text-[16px] uppercase mt-[67px]'>Best Deal</p>
                            <h3 className='text-[32px] w-[286px] font-semibold'>Special Products Deal of the Month</h3>
                            <div className='-mt-7'>
                                <Link>
                                    <ShowButton />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

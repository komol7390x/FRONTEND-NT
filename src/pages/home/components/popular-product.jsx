import axios from 'axios'
import React, { useEffect } from 'react'
import { ViewAll } from '../../../assets/icon/view-all'
import { Link } from 'react-router-dom'
import { Stars5 } from '../../../assets/icon/stars-5'
import { Bags } from '../../../assets/icon/bags'
import Eyes from '../../../assets/svg/eyes.svg'
import Heart from '../../../assets/svg/heart.svg'

export const PopularProduct = () => {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get('https://dummyjson.com/recipes?skip=12&limit=12')
            .then((res) => setData(res.data.recipes))
            .catch((error) => console.log('Error', error.message))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className='mb-[60px]'>
            <div className='flex justify-between items-center'>
                <h3 className='text-[32px] font-semibold mb-8'>Popular Products</h3>
                <Link to={'product'}>
                    <ViewAll />
                </Link>
            </div>

            <div className=' grid grid-cols-6 gap-2'>
                {loading ? <div>LOADING ...</div> : ''}
                {data.map((item) => (
                    <Link to={`product/${item.id}`}>
                        <div className='border relative hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] hover:scale-104 border-soft-grey hover:border-soft-grey transition-all duration-500 p-1 rounded-[5px]'>

                            <div>
                                <p className={`${item.userId < 150 ? 'hidden' : ''}
                                top-0 left-0 mt-5 bg-[#EA4B48] py-1 px-2
                                  text-white rounded-sm ml-1 text-[14px] font-normal absolute`}>SALE 20%</p>
                            </div>

                            <div className="absolute right-0 mr-2 mt-2 ">
                                <div className="bg-white p-1.5  rounded-full transition-colors">
                                    <img
                                        src={Eyes}
                                        alt="eyes"
                                    />
                                </div>
                                <img
                                    src={Heart}
                                    alt="heart"
                                    className="bg-white rounded-full p-[3px] mt-2 size-8"
                                />
                            </div>


                            <img src={item.image} alt={item.name} />

                            {/* down */}
                            <div className='flex justify-between items-center mb-3 px-1 '>
                                {/* info */}
                                <div className='flex flex-col gap-0.5'>
                                    <div className='mt-6'>
                                        <div className='text-[14px] font-normal text-[#4C4C4C]'>
                                            {item.name.length >= 15 ? (
                                                <div>{item.name.slice(0, 13)}...</div>
                                            ) : (
                                                <div>{item.name}</div>
                                            )}
                                        </div>

                                    </div>

                                    {/* Price */}
                                    <div className='flex gap-2'>
                                        <p className='text-[14px] font-medium'>${item.userId}</p>
                                        {item.userId >= 150 ? <div>
                                            <p className='text-[#999999] line-through'>${(item.userId * 1.2).toFixed(0)}</p>
                                        </div> : ''}
                                    </div>
                                    <div>
                                        <Stars5 />
                                    </div>
                                </div>

                                {/* Bags */}
                                <div className='mt-6 text-black hover:bg-primary-normal-gray hover:text-white  bg-[#F2F2F2] items-center justify-center p-1.5 rounded-full'>
                                    <Bags />
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

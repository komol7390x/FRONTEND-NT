import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ViewAll } from '../../../assets/icon/view-all'

export const Categories = () => {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get('https://dummyjson.com/recipes?limit=12')
            .then((res) => setData(res.data.recipes))
            .catch((error) => console.log('Error', error.message))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className='mb-[60px]'>
            <div className='flex justify-between items-center'>
                <h3 className='text-[32px] font-semibold mb-8'>Popular Categories</h3>
                <Link to={'category'}>
                    <ViewAll />
                </Link>
            </div>
            {loading ? <p>LOADING ...</p> : ''}
            <div className="grid grid-cols-6 gap-4">
                {data.map((item) => (
                    <Link to={`category/${item.id}`}>
                        <div
                            key={item.id}
                            className="pt-4 px-1 border rounded-[5px] hover:scale-110  hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] border-soft-grey
                             hover:border-primary-normal-gray transition-all duration-500 text-center hover:text-primary-normal-gray cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[190px] h-[170px] mx-auto"
                            />
                            <div className='mt-4 mb-6 text-[18px] font-medium '>
                                {item.name.length > 18 ? (
                                    <div>{item.name.slice(0, 10)}...</div>
                                ) : (
                                    <div>{item.name}</div>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>

    )
}

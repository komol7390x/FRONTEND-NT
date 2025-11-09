import { Link } from 'react-router-dom'
import { ShowButton } from '../../../../assets/icon/show-button'
import middle from '../../../../assets/png/male.png'
export const MiddleBanner = () => {
  return (
    <div className='hover:scale-105 transition-all  duration-500'>
      <div className="relative w-[424px] h-[536px] bg-cover bg-center" style={{ backgroundImage: `url('${middle}')` }}>
        <div className="relative z-10 text-white justify-center items-center text-center pt-7">
          <div>
            <p className='text-[14px] font-medium uppercase'>85% Fat Free</p>
            <h3 className='text-[40px] font-semibold'>Low-Fat Meat</h3>
            <div className='flex justify-center gap-2 items-center'>
              <p className='text-[20px] font-light'>Started at</p><p className='text-[#FF8A00] text-[20px] font-normal'>$79.99</p>
            </div>
            <Link to={`product/${1}`}><ShowButton bg='white' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Logo } from '../assets/icon/logo';
import { Location } from './components/location'
import { Search } from './components/search';
import { Navi } from './components/navi';

const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="">

        {/* Location */}
        <div className='py-3 container' >
          <Location />
        </div>

        <div className='w-full h-0.5 text-black'></div>

        {/* Search */}
        <div className='container'>
          <Search />
        </div>

        {/* Navi */}
        <div>
          <Navi />
        </div>

      </div>
    </>
  )
}

export default Header

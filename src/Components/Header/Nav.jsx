import React, { useContext } from 'react'
import Cart from '../Cart'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { ContexPrv } from '../../Context/Context';

const Nav = () => {
 const {like}=useContext(ContexPrv)
  return (
    <div className='w-full h-20 bg-pink-700 flex justify-between px-4'>
        <div>
            <ul className='flex gap-3 capitalize'>
                <li>men</li>
                <li>women</li>
                <li>kid</li>
                <li>beauty</li>
                <li>grocery</li>
            </ul>

        </div>
        <div className='flex flex-row gap-4'>
         
          <Link to={'/wishlist'}>
          <span><CiHeart /> {like.length}</span></Link>
          
          <Link to={'/cart'}>
          <span>cart</span>
          <Cart/>
          </Link>
        </div>
    </div>
  )
}

export default Nav
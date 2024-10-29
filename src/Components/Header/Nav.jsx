import React from 'react'
import Cart from '../Cart'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-32 bg-pink-700 flex justify-between px-4'>
        <div>
            <ul className='flex gap-3 capitalize'>
                <li>men</li>
                <li>women</li>
                <li>kid</li>
                <li>beauty</li>
                <li>grocery</li>
            </ul>

        </div>
        <div>
          <Link to={'/cart'}>
          <span>cart</span>
          <Cart/>
          </Link>
        </div>
    </div>
  )
}

export default Nav
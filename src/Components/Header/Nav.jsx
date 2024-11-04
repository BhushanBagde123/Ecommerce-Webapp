import React, { useContext, useState } from 'react'
import Cart from '../Cart'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { ContexPrv } from '../../Context/Context';
import Search from '../Search';

const Nav = () => {
 const {like,productData}=useContext(ContexPrv)
 const [input,setInput]=useState("");
 const [searchItem,setSearchItem] =useState([])

 const searchProduct=(e)=>{
  const value =e.target.value;
  setInput(value);
  const search = productData.filter((item)=>item.title.toLowerCase().includes(input.toLowerCase()))
  setSearchItem(search)


 }

  return (
    <div className='w-full h-20 bg-pink-700 flex justify-between px-4 top-0 sticky'>
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
          <input className='w-72' type="search" value={input} onChange={searchProduct} placeholder='search product,brand and more' />
          <Search searchItem={searchItem} input={input}/>
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
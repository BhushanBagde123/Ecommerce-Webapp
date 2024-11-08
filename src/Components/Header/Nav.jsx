import React, { useContext, useState } from 'react'
import Cart from '../Cart'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { ContexPrv } from '../../Context/Context';
import Search from '../Search';
import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";

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
    <div className='w-full h-16 bg-white flex justify-between items-center px-4 top-0 sticky  shadow-lg'>
     <Link to={'/'}><span>logo</span></Link> 
        <div>
          
            <ul className='flex gap-7 capitalize font-bold'>
                <li>men</li>
                <li>women</li>
                <li>kid</li>
                <li>beauty</li>
                <li>grocery</li>
            </ul>

        </div>
        <div>
          <div className='flex justify-center h-10 items-center bg-gray-300 rounded-md px-1'>
          <CiSearch size={20} />
          <input className='w-96 h-8 p-3 rounded-md bg-gray-300 outline-none' type="search" value={input} onChange={searchProduct} placeholder='search product,brand and more' />
          </div>
          <Search searchItem={searchItem} input={input}/>
        </div>
        <div className='flex flex-row gap-4'>
          <IoIosPerson size={20}/>
          <Link to={'/wishlist'}>
          <span><CiHeart size={20} /> {like.length}</span></Link>
          
          <Link to={'/cart'}>
          <BsCart4 size={20} />
          <Cart/>
          </Link>
        </div>
    </div>
  )
}

export default Nav
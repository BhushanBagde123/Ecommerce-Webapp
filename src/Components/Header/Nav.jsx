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
 const {like,productData,cart}=useContext(ContexPrv)
 const [input,setInput]=useState("");
 const [searchItem,setSearchItem] =useState([])

 const searchProduct=(e)=>{
  const value =e.target.value;
  setInput(value);
  const search = productData.filter((item)=>item.title.toLowerCase().includes(input.toLowerCase()))
  setSearchItem(search)


 }

  return (
    <nav className='w-full h-16 bg-white flex justify-between  z-20 items-center px-4 top-0 sticky  shadow-lg'>
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
        <div className='flex flex-row gap-6 justify-center items-center px-2'>
         <Link to={'/user'}><IoIosPerson size={20}/></Link> 
          <Link to={'/wishlist'} className='flex relative'>
          <span className='text-sm absolute left-4 top-[-10px] w-5 flex justify-center bg-red-600 rounded-full'>{like.length} </span>
          <CiHeart size={20} />
          </Link>
          
          <Link to={'/cart'} className='flex relative'>
          <span className='text-sm absolute left-4 top-[-10px] w-5 flex justify-center bg-red-600 rounded-full'>{cart.length}</span>
          <BsCart4 size={20} />
        
          </Link>
        </div>
    </nav>
  )
}

export default Nav
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContexPrv } from '../Context/Context'
import { FaHeart } from "react-icons/fa6";

const CategoryPage = () => {
  const [productCategory,setProductCategory]=useState([]);
  const {categoryName} =useParams();
  const {productData,addToLike,isWishlisted,removeFromWishlist} =useContext(ContexPrv);

  useEffect(()=>{
    if(categoryName === "fasion"){
      const  data= productData.filter(((item)=>item.category === "men's clothing" || item.category=== "women's clothing"))
         setProductCategory(data)
     
       }
    if(categoryName === "electronic"){
      const eData =productData.filter((item)=>item.category ==="electronics")
      setProductCategory(eData)

    }
  },[productData])

  

  const toggelWishlist =(id)=>{
    if(isWishlisted(id)){
        removeFromWishlist(id);
        
    }
    else{
       const item =productCategory.find((product)=>product.id === id);
       if(item){
        addToLike(item)
       }
    }
 }
 
  
  return (
    <div>
    <div className='w-full h-24 capitalize mt-4 p-3'><span className='font-bold'>{categoryName}</span>-{productCategory.length} items</div>
    <div className='w-full min-h-screen flex'>
     
      <div className='w-[30%] min-h-screen p-3 border'>
        <h2 className='font-bold uppercase'>filters</h2>
      </div>
      <div className='w-[70%] min-h-screen border p-3'>
        <h1>name</h1>
        <div className='w-full min-h-screen grid grid-cols-3 gap-4 p-2'>
        {productCategory.map((item)=>(
          <div key={item.id} className='w-52 h-72 border flex flex-col gap-3 p-3'>
            <div className='cursor-pointer'><FaHeart  onClick={()=>toggelWishlist(item.id)} color={isWishlisted(item.id)? "red" : "grey"}  /></div>
          <Link to={`/detail/${item.id}`}><img className='w-44 h-44' src={item.image} alt="" /></Link>  
            <h2>{item.title.substring(0,20)}...</h2>
          </div>
        ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default CategoryPage
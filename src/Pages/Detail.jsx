import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContexPrv } from '../Context/Context'
import { FaHeart } from "react-icons/fa6";
import AddToCartButton from '../Components/Buttons/AddToCartButton';
import { BuyButton } from '../Components/Buttons/BuyButton';
const Detail = () => {
    const [product,setProdut]=useState([]);;
    
   

    const {id} =useParams()
    const {productData, isWishlisted,addToLike,removeFromWishlist,addToCart}=useContext(ContexPrv);

   
    
    useEffect(()=>{
    const data= productData.filter((pro)=>pro.id == id)
     setProdut([...data])
    },[productData,id])
    
    
const currentProduct =product[0];
 
//  console.log("cart:"+cart)
 
 const toggelWishlist =()=>{
    if(isWishlisted(currentProduct.id)){
        removeFromWishlist(currentProduct.id);
        
    }
    else{
        addToLike(currentProduct)
    }
 }

 
  return (
    <div>
        {product.map((item)=>{
            return (
                <div  key={item.id} className='w-full h-full'>
                <div className='flex w-full h-full gap-3 p-4'>
                    <img className='w-96 h-96' src={item.image} alt="" />
                    <div className='flex flex-col gap-3 justify-center '>
                        <h1>{item.productname}</h1>
                        <span>{item.price} Rs</span>
                        <span>{item.rating.rate}</span>
                        <p>{item.detail}</p>
                    </div>
                </div>
                <FaHeart onClick={toggelWishlist} className={`cursor-pointer `}  color={isWishlisted(currentProduct.id)? "red" : "grey"} size={34}  />
                
                <div className='flex gap-5 w-full h-full justify-center'>
                <AddToCartButton addToCart={()=>{addToCart(item)}} currentProduct={currentProduct}/>
                <BuyButton/>
                </div>
              
                </div>
            )
           
        })}
    </div>
  )
}

export default Detail
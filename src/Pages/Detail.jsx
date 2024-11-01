import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContexPrv } from '../Context/Context'

const Detail = () => {
    const [product,setProdut]=useState([])

    const {id} =useParams()
    const {productData,setCart,cart}=useContext(ContexPrv)
    
    useEffect(()=>{
    const data= productData.filter((pro)=>pro.id == id)
     setProdut([...data])
    },[productData,id])
    
    
    
 const addToCart =()=>{
   const currentProduct =product[0]
    if(cart.some((pro)=>pro.id ===currentProduct.id)){
        alert("already added")
        return
    }
   
    setCart(pre=>[...pre,currentProduct])
    // console.log(currentProduct)
 }
//  console.log("cart:"+cart)
 
 
  return (
    <div>
        {product.map((item)=>{
            return (
                <div  key={item.id} className='w-full h-full'>
                <div className='flex w-full h-full gap-3 p-4'>
                    <img className='w-96 h-96' src={item.image} alt="" />
                    <div className='flex flex-col gap-3 justify-center '>
                        <h1>{item.title}</h1>
                        <span>{item.price}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className='flex gap-5 w-full h-full justify-center'>
                <button onClick={addToCart}>add to cart</button>
                <button>buy now</button>
                </div>
              
                </div>
            )
           
        })}
    </div>
  )
}

export default Detail
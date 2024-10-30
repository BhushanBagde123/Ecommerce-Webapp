import React, { useContext, useState } from 'react'
import { ContexPrv } from '../Context/Context'

const CartPage = () => {
  
    const {cart,setCart} =useContext(ContexPrv);
    const removeCart =(id)=>{
       const updateCart= cart.filter((crt)=>crt.id !== id);
       setCart(updateCart)

    }
  return (
    <div>
        {cart.length>0?(
            
            cart.map((item)=>{
                return (
                    <div key={item.id} className='flex'>
                        <img className='w-40 h-40' src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <button onClick={()=>removeCart(item.id)}>remove</button>
                    </div>
                )
            })
        ):<div>your cart is empty</div>}
    </div>
  )
}

export default CartPage
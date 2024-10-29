import React, { useContext } from 'react'
import { ContexPrv } from '../Context/Context'

const CartPage = () => {
    const {cart} =useContext(ContexPrv)
  return (
    <div>
        {cart.length>0?(
            
            cart.map((item)=>{
                return (
                    <div key={item.id}>
                        <img src={item.image} alt="" />
                    </div>
                )
            })
        ):<div>no data found</div>}
    </div>
  )
}

export default CartPage
import React, { useContext } from 'react'
import { ContexPrv } from '../Context/Context'

const Cart = () => {
    const {cart} =useContext(ContexPrv)
  return (
    <div>
        <span>{cart.length}</span>
    </div>
  )
}

export default Cart
import React from 'react'

const AddToCartButton = ({addToCart,currentProduct}) => {
  return (
    <button onClick={()=>addToCart(currentProduct)}>add to cart</button>
  )
}

export default AddToCartButton
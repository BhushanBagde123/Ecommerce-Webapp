import React from 'react'

const AddToCartButton = ({addToCart,moveToCart}) => {
  const handelChecking =()=>{
    if(addToCart){
      addToCart()
    }
    if(moveToCart){
      moveToCart()
    }
  }
  return (
    <button className='capitalize' onClick={handelChecking}>add to cart</button>
  )
}

export default AddToCartButton
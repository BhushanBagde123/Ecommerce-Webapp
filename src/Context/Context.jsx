import React, {  createContext, useEffect, useState } from 'react'

const ContexPrv = createContext()
const Context = ({children}) => {
    const [productData,setProductData]=useState([]);
    const [cart,setCart] =useState([]);
    const [like,setLike]=useState([])

    const products= async()=>{
        const response =await fetch('https://fakestoreapi.com/products')
        const data =await response.json()
        setProductData(data);
        console.log(data)
       
    }

  const name ="bhushan"
  
  useEffect(()=>{
 products()
  },[])
  const addToCart =(product)=>{
   
    if(cart.some((pro)=>pro.id ===product.id)){
       
        alert("already added");
        return
    }
   
    setCart(pre=>[...pre,product]);
    
 }
 const removeCart = (id) => {
  const updatedCart = cart.filter((item) => item.id !== id);
  setCart(updatedCart);
};
  
  const addToLike = (product) => {
    if (!like.some((item) => item.id === product.id)) {
      setLike((prevLike) => [...prevLike, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setLike((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  const isWishlisted = (productId) => like.some((item) => item.id === productId);

return <ContexPrv.Provider value={{name,productData,cart,setCart,
like,addToLike,isWishlisted
,removeFromWishlist,addToCart,removeCart}}>
    {children}
</ContexPrv.Provider>
}

export {ContexPrv,Context}
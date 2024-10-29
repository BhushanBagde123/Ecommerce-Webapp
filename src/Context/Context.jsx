import React, {  createContext, useEffect, useState } from 'react'

const ContexPrv = createContext()
const Context = ({children}) => {
    const [productData,setProductData]=useState([]);
    const [cart,setCart] =useState([])

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
  


return <ContexPrv.Provider value={{name,productData,cart,setCart}}>
    {children}
</ContexPrv.Provider>
}

export {ContexPrv,Context}
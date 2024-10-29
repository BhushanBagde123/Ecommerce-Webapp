import React,{useContext} from 'react'
import { ContexPrv } from '../Context/Context'

const HomePage = () => {
   const {productData} = useContext(ContexPrv);
   
  return (
    <div className='w-full h-full grid grid-cols-4 gap-4 p-3'> 
    {productData.map((product,index)=>(
      <div key={index} className='w-full h-36 flex-col gap-2 cursor-pointer flex justify-center items-center '>
       
        <img className='w-24 h-24' src={product.image} alt=" product image" />
       <h3>{product.title.substring(0,16)+"..."}</h3> 
      </div>

    ))}
    </div>
  )
}

export default HomePage
import React,{useContext} from 'react'
import { ContexPrv } from '../Context/Context'
import { Link } from 'react-router-dom';
import Category from '../Components/Header/Category';
import Slider from '../Components/Header/Slider'

const HomePage = () => {
   const {productData} = useContext(ContexPrv);
   console.log(productData)
   
  return (
    <div className='w-full h-full'>
    <Category/>
    <Slider/>
    <div className='w-full h-full grid grid-cols-4 gap-4 p-3'> 
    {productData.map((product,index)=>(
      <div key={product.id} className='w-full h-52 flex-col gap-2 cursor-pointer flex justify-center items-center '>
       <Link to={`/detail/${product.id}`}>
        <img className='w-40 h-44' src={product.image} alt=" product image" />
       <h3>{product.productname.substring(0,16)+"..."}</h3> 
      </Link>

      </div>
    ))}
    </div>
    </div>
  )
}

export default HomePage
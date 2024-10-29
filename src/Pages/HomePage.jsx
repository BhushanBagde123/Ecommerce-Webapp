import React,{useContext} from 'react'
import { ContexPrv } from '../Context/Context'
import { Link } from 'react-router-dom';

const HomePage = () => {
   const {productData} = useContext(ContexPrv);
   
  return (
    <div className='w-full h-full grid grid-cols-4 gap-4 p-3'> 
    {productData.map((product,index)=>(
      <div key={product.id} className='w-full h-36 flex-col gap-2 cursor-pointer flex justify-center items-center '>
       <Link to={`/detail/${product.id}`}>
        <img className='w-24 h-24' src={product.image} alt=" product image" />
       <h3>{product.title.substring(0,16)+"..."}</h3> 
      </Link>

      </div>
    ))}
    </div>
  )
}

export default HomePage
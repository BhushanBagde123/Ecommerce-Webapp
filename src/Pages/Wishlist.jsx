import React, { useContext } from 'react'
import { ContexPrv } from '../Context/Context'
import { Link} from 'react-router-dom';
import AddToCartButton from '../Components/Buttons/AddToCartButton';

const Wishlist = () => {
  const {like,addToCart} =useContext(ContexPrv);
 


  return (
    <div>
      <div className='w-full h-8 px-6 mt-9'>
      <h1 className='capitalize font-bold'> my Wishlist</h1>
      </div>
      <div className='grid grid-cols-4 gap-8 p-4 w-full h-full'>
      {like.map((item)=>{
        return (
          <div key={item.id}>
           
            <div className='w-48 h-80 shadow-lg flex flex-col justify-between items-center hover:scale-105 ease-in-out duration-75'>   
            <Link to={`/detail/${item.id}`}>    
            <div>
            
              <img className='w-40 h-40' src={item.image} alt="" />
            </div>
            </Link>
            <div className='flex flex-col'>
                <h3>{item.title.substring(0,16)+"..."}</h3>
                <h4>{item.price}$</h4>           
                 </div>
                 <div className='bg-pink-600 w-full h-10 flex items-center justify-center'>
                 <AddToCartButton  moveToCart={() => addToCart(item)} />
                 </div>
                 </div>
                 
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Wishlist
import React, { useContext } from 'react'
import { ContexPrv } from '../Context/Context'
import { Link, useParams } from 'react-router-dom';

const Wishlist = () => {
  const {like} =useContext(ContexPrv);
 


  return (
    <div>
      <h1>Wishlist</h1>
      <div className='flex gap-1'>
      {like.map((item)=>{
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
            <div>       
            <div>
              <img className='w-40 h-40' src={item.image} alt="" />
            </div>
            <div className='flex flex-col'>
                <h3>{item.title}</h3>
                <h4>{item.price}$</h4>
                            
                 </div>
                 </div>
                 </Link>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Wishlist
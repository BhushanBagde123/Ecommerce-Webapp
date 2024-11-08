import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    const category =[{image:"https://st.depositphotos.com/1550494/2604/i/450/depositphotos_26043279-stock-photo-retro-fifties-summer-fashion-man.jpg",title:"fasion"},
        {image:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/7/30/cc6bca42-a278-44da-b88e-ffe06ccbc538_ToysandGames_LG7XIV9SHJ_MN.png",title:"toys"},{image:"https://st3.depositphotos.com/1005404/13980/i/450/depositphotos_139809276-stock-photo-consumer-and-home-electronics.jpg",title:"electronic"},
        {image:"https://media.istockphoto.com/id/1414801672/photo/cardboard-box-with-cosmetics-product-in-front-od-open-door-buying-online-and-delivery.jpg?s=612x612&w=0&k=20&c=SA9VCzp-QtpzlliX8dM_uoH8K20U1gHqYfsWP08aLl0=",title:"beauty"}
    ,{image:"https://media.gettyimages.com/id/171302954/photo/groceries.jpg?s=612x612&w=gi&k=20&c=V1rR0STPdGb4AF4N9cvx0ZjNQodolWAOVHkLDqj4ATI=",title:"grocery"},{image:"https://ikall.in/wp-content/uploads/2023/06/51sJmHfw92L._SL1000_.jpg",title:"mobile"},{image:"https://www.ulcdn.net/images/products/952803/product/JJSTLC62BK32785_1.jpg?1724073269",title:"furniture"}]
  return (
    <div className='w-full h-32 mt-4  flex justify-between items-center px-2'>
        {category.map((item,index)=>(
            <div key={index}>
                <Link to={`category/${item.title}`}>
                <div className='flex flex-col justify-center items-center capitalize'>
                    <img className='w-24 h-24 rounded-md' src={item.image} alt="category image" />
                    <h3>{item.title}</h3>
                </div>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Category
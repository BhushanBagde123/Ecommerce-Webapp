import React, {  useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'


const Search = ({searchItem,input}) => {
    const [hide,setHide] =useState(false)
    const navigate =useNavigate()

    useEffect(()=>{
        if(input ===""){
            setHide(true)
    
        }
        else {
            setHide(false)
        }
    },[input])
   
    const navigationHide =(id)=>{
       
        
        navigate(`/detail/${id}`)
        setHide(true)
       
    }
   
 
  return (
    !hide && (<div className={`bg-white z-20`}>
        
        {searchItem.slice(0,9).map((item)=>{
            return (
                <div key={item.id}>
                    
                   <p onClick={()=>navigationHide(item.id)} className='cursor-pointer'>{item.title}</p>
                </div>

               
            )
        })}
    </div>
    )
  )
}

export default Search
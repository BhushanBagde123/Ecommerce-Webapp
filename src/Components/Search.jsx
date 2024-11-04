import React, { useContext, useEffect, useState } from 'react'


const Search = ({searchItem,input}) => {
    const [hide,setHide] =useState(false)

    useEffect(()=>{
        if(input ===""){
            setHide(true)
    
        }
        else {
            setHide(false)
        }
    },[input])
   
 
  return (
    !hide && (<div className={`bg-white z-20`}>
        
        {searchItem.map((item)=>{
            return (
                <div key={item.id}>
                     <p>{item.title}</p>
                </div>

               
            )
        })}
    </div>
    )
  )
}

export default Search
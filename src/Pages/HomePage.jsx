import React,{useContext} from 'react'
import { ContexPrv } from '../Context/Context'

const HomePage = () => {
   const {name} = useContext(ContexPrv);
   
  return (
    <div>HomePage {name}</div>
  )
}

export default HomePage
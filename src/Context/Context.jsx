import React, {  createContext } from 'react'

const ContexPrv = createContext()
const Context = ({children}) => {

  const name ="bhushan"

  
return <ContexPrv.Provider value={{name}}>
    {children}
</ContexPrv.Provider>
}

export {ContexPrv,Context}
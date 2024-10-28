import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'

const route =createBrowserRouter([{
  
        
},
{
    path:'/',
    element:<HomePage/>
   },
])

const App = () => {
  
   return <>
   <RouterProvider router={route}/>
   </>
}

export default App
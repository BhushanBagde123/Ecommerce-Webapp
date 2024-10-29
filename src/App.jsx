import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Layout from './Layout/Layout'
import { Context } from './Context/Context'

const route =createBrowserRouter([
   {
      element:<Layout/>,

      children:[
         {path:'/',
         element:<HomePage/>
         },
      ]
   },
 

])

const App = () => {
  
   return <>
   <Context>
   <RouterProvider router={route}/>
   </Context>
   
   </>
}

export default App
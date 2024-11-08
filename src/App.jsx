import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Layout from './Layout/Layout'
import Detail from './Pages/Detail'
import { Context } from './Context/Context'
import CartPage from './Pages/CartPage'
import Wishlist from './Pages/Wishlist'
import CategoryPage from './Pages/CategoryPage'

const route =createBrowserRouter([
   {
      element:<Layout/>,

      children:[
         {path:'/',
         element:<HomePage/>
         },
         {path:'/detail/:id',
         element:<Detail/>,

         },
         
         {
            path:'/wishlist',
            element:<Wishlist/>,
         },
         {
            path:'/category/:categoryName',
            element:<CategoryPage/>, 
         }
      ]
   },
   {
      path:'/cart',
      element:<CartPage/>,
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
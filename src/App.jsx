import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Layout from './Layout/Layout'
import Detail from './Pages/Detail'
import { Context } from './Context/Context'
import CartPage from './Pages/CartPage'
import Wishlist from './Pages/Wishlist'
import CategoryPage from './Pages/CategoryPage'
import User from './Pages/User'
import AddProduct from './Pages/AddProduct'

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
         },
         {
            path:'/user',
            element:<User/>
         }
      ]
   },
   {
      path:'/cart',
      element:<CartPage/>,
   },
   {
      path:'/addproduct',
      element:<AddProduct/>
   }
 

])

const App = () => {
  
   return <>
   <Context>
   <RouterProvider router={route}/>
   </Context>
   
   </>
}

export default App
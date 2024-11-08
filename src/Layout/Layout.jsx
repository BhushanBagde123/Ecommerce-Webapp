import React from 'react'
import Nav from '../Components/Header/Nav'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  return (
   <>
   <Nav/>
   <ScrollRestoration/>
   <div  className='min-h-screen'>
   <Outlet/>
   </div>
  
   <Footer/>
   </>
  )
}

export default Layout
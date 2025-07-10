import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container mx-auto'>
        <Header/>
        <main>
        <Outlet/>
      </main>
        <Footer/>
    </div>
  )
}

export default React.memo(Layout)
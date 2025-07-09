// components/Layout.js
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
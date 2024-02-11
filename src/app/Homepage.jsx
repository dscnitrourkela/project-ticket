import React from 'react'
import { AuthProvider } from './context/AuthContext'

import { Navbar } from './components/marginals/Navbar'
import { Footer } from './components/marginals/Footer'
import SignUp from './components/SignUp'

function Homepage() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <SignUp />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default Homepage

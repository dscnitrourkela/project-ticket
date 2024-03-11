import React from 'react'
import { AuthProvider } from '../context/AuthContext'

import { Footer } from '../components/marginals/Footer'
import { Navbar } from '../components/marginals/Navbar'
import SignUp from '../components/SignUp'

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

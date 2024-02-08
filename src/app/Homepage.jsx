import React from 'react'
import { AuthProvider } from './context/AuthContext'

import { Navbar } from './components/marginals/Navbar'
//import CreateTicket from './components/CreateTicket'
import SignUp from './components/SignUp'
import { AuthProvider } from './context/AuthContext'

//import Link from 'next/link'

function Homepage() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <SignUp />
      </AuthProvider>
    </>
  )
}

export default Homepage

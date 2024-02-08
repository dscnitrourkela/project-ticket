import React from 'react'

//import CreateTicket from './components/CreateTicket'
import SignUp from './components/centres/SignUp.jsx'
import { Navbar } from './components/marginals/navbar.jsx'
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

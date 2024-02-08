import React from 'react'

import { Navbar } from './components/marginals2/navbar.jsx'
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

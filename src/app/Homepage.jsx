import React from 'react'

import { Navbar } from './components/marginals/Navbar'
//import CreateTicket from './components/CreateTicket'
import SignUp from './components/SignUp'

//import Link from 'next/link'

function Homepage() {
  return (
    <>
      <Navbar />
      <SignUp />
    </>
  )
}

export default Homepage

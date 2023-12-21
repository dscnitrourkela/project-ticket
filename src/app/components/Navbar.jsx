import './navbar.css'

import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <li className="nav-link">
        <a href="/">Home</a>
      </li>
      <li className="nav-link">
        <a href="/signup">Signup</a>
      </li>
      <li className="nav-link">
        <a href="/myticket">my Ticket</a>
      </li>
    </nav>
  )
}

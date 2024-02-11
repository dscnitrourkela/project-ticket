import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import '../../styles/globals.css'
import { GlobalButton } from '../shared/GlobalButton'

import { auth } from '../../../firebase/firebase'
import { AuthContext } from '../../../context/AuthContext'
import { StyledNavbar, NavItem, LogoImg } from './navbar.styles'

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error('Sign out error:', error))
  }

  return (
    <StyledNavbar>
      <NavItem>
        <a href="/">
          <LogoImg
            src="https://res.cloudinary.com/djl2ulktr/image/upload/v1706421438/HN_logo_bswqp2.png"
            alt="Home"
          />
        </a>
      </NavItem>

      {currentUser ? (
        <>
          <NavItem>
            <a
              href="/myticket"
              onClick={() => {
                router.push('/myticket')
              }}
            >
              My Ticket
            </a>
          </NavItem>

          <GlobalButton href="/" onClick={handleSignOut}>
            Sign Out
          </GlobalButton>
        </>
      ) : (
        <GlobalButton href="/signup">Signup</GlobalButton>
      )}
    </StyledNavbar>
  )
}

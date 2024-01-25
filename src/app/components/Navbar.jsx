import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import '../styles/globals.css'
import styled from 'styled-components'
import { GlobalButton } from './shared/GlobalButton'

import { auth } from '../../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0vw 5vw;
  background-color: #333;
  overflow: hidden;
  font-family: Arial, sans-serif;
`

const NavItem = styled.li`
  list-style: none;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin: 0vw 2vw;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Navbar = () => {
  //const { currentUser } = useContext(AuthContext)
  // const { currentUser } = useContext(AuthContext)
  var currentUser = {
    name: 'uder1',
    mail: 'hey@gmail.com'
  }
  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error('Sign out error:', error))
  }

  return (
    <StyledNavbar>
      <NavItem>
        <a href="/">Home</a>
      </NavItem>

      {currentUser ? (
        <>
          <NavItem>
            <a href="/myticket">My Ticket</a>
          </NavItem>

          <GlobalButton onClick={handleSignOut}>Sign Out</GlobalButton>
        </>
      ) : (
        <GlobalButton href="/signup">Signup</GlobalButton>
      )}
    </StyledNavbar>
  )
}

import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { auth } from '../../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

const StyledNavbar = styled.nav`
  background-color: #333;
  overflow: hidden;
  font-family: Arial, sans-serif;
`

const NavItem = styled.li`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const SignOutButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error('Sign out error:', error))
  }

  return (
    <StyledNavbar>
      <NavItem>
        <a href="/">Home</a>
      </NavItem>
      {!currentUser && (
        <NavItem>
          <a href="/signup">Signup</a>
        </NavItem>
      )}
      {currentUser && (
        <>
          <NavItem>
            <a href="/myticket">My Ticket</a>
          </NavItem>
          <NavItem>
            <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
          </NavItem>
        </>
      )}
    </StyledNavbar>
  )
}

import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import '../styles/globals.css'
import styled from 'styled-components'

import { auth } from '../../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 5vw;
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
  background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)),
    linear-gradient(97.1deg, rgba(247, 225, 255, 0.38) 11.37%, rgba(218, 115, 255, 0.38) 102.95%);

  border: none;
  color: white;
  cursor: pointer;
  border: 1.85px solid;
  border-radius: 35px;
  padding: 12px 60px;

  border-image-source: linear-gradient(
    97.1deg,
    rgba(247, 225, 255, 0.38) 11.37%,
    rgba(218, 115, 255, 0.38) 102.95%
  );

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
            <SignOutButton onClick={handleSignOut} className="global-buttons">
              Sign Out
            </SignOutButton>
          </NavItem>
        </>
      )}
    </StyledNavbar>
  )
}

import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { auth } from '../../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

const StyledNavbar = styled.nav`
  background-color: black;
  overflow: hidden;
  font-family: Arial, sans-serif;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 388px;
  width: 100%;
  position: fixed;
  top: 0;
`
const NavHeading = styled.div`
  background: linear-gradient(180deg, #c464ff -13.76%, rgba(252, 252, 252, 0.33) 128.58%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
`
const NavButton = styled.div`
  background-color: rgba(235, 235, 235, 0.1);
  color: linear-gradient(101deg, #ddd 11.56%, #896f96 124.18%);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  backdrop-filter: blur(8px);
  padding: 12px 60px;
  border-radius: 36px;
  background: rgba(217, 217, 217, 0.1);
  border: 1.848px solid #f7e1ff;
  &:hover {
    background-color: rgba(235, 235, 235, 0.689);
    color: black;
  }
`
const NavItem = styled.li`
  float: left;
  display: block;
  color: #d9d9d91a;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
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
        <a href="/">
          <Image
            src="https://res.cloudinary.com/dhnkuonev/image/upload/v1699458313/hnlogo_ei64kd.png"
            alt="HN-logo"
            height={68}
            width={68}
          />
        </a>
      </NavItem>
      <NavItem>
        <NavHeading>HACKNITR 5.0</NavHeading>
      </NavItem>
      {!currentUser && (
        <NavItem>
          <a href="/signup">
            <NavButton>Sign in</NavButton>
          </a>
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

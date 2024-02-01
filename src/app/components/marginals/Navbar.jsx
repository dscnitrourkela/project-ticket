import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import '../../styles/globals.css'
import styled from 'styled-components'
import { GlobalButton } from '../shared/GlobalButton'

import { auth } from '../../../firebase/firebase'
import { AuthContext } from '../../context/AuthContext'

const LogoImg = styled.img`
  width: 77px;
  height: 77px;
  @media (max-width: 680px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
  }
`
const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2vw 0vw;
  padding: 0vw 4vw;
  overflow: hidden;
  border: 2px solid;
  border-image-source: linear-gradient(
    270deg,
    rgba(221, 221, 221, 0) 0%,
    rgba(237, 194, 252, 0.38) 51.35%,
    rgba(239, 192, 255, 0.464552) 56.36%,
    rgba(221, 221, 221, 0) 96.88%
  );
  border-image-slice: 1;
`

const NavItem = styled.li`
  border: 0px solid pink;
  list-style: none;
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 0vw 2vw;

  &:hover {
    border-bottom: 2px solid rgba(218, 115, 255, 0.8);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  //window.alert('MyTicketPage - currentUser:', currentUser.name)
  /* var currentUser = {
    name: 'uder1',
    mail: 'hey@gmail.com'
  }*/
  const handleSignOut = () => {
    signOut(auth)
      .then(() => window.alert('signed out'))
      .catch((error) => console.error('Sign out error:', error))
  }

  return (
    <StyledNavbar>
      <NavItem>
        <a href="/">
          <LogoImg
            src="https://res.cloudinary.com/djl2ulktr/image/upload/v1706421438/HN_logo_bswqp2.png"
            alt="logo"
          />
        </a>
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

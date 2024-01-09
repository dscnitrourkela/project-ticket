import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { auth } from '../../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

const StyledNavbar = styled.nav`
  padding: 2%;
  // padding-top:9%;
  padding-left: 8%;
  background-color: #04040d;
  overflow: hidden;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.li`
  float: left;
  display: flex;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  a {
    color: inherit;
    text-decoration: none;
  }
`
const NavTitle = styled.div`
  margin-top: 15px;
  background: linear-gradient(180deg, #cd4ff9 0%, #fff 146.39%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  font-weight: bold;
`
const SignOutButton = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  border-radius: 5rem;
  border: none;
  position: relative;
  background: #100720;
  transition: 0.1s;
  border-radius: 2.23356rem;
  border: 1.848px solid #f7e1ff;

  background: rgba(217, 217, 217, 0.1);

  box-shadow: 0px -3.697px 10.66px 0px rgba(225, 140, 255, 0.35) inset;
  backdrop-filter: blur(7.702038764953613px);
  &:hover {
    background: #f7e1ff;
    color: black;
    font-weight: bold;
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
        <Image
          src="https://res.cloudinary.com/dra96qhox/image/upload/v1704704471/Component_6_yxzutx.png"
          alt=""
          width={70}
          height={70}
        />
      </NavItem>
      <NavItem>
        <Image
          src="https://res.cloudinary.com/dra96qhox/image/upload/v1704775140/Line_48_qqi6yv.png"
          alt=""
          width={2}
          height={100}
        />
      </NavItem>
      {!currentUser && (
        <NavItem>
          <NavTitle>HACKNITR 5.0</NavTitle>
        </NavItem>
      )}
      <NavItem>
        <Image
          src="https://res.cloudinary.com/dra96qhox/image/upload/v1704775140/Line_48_qqi6yv.png"
          alt=""
          width={2}
          height={100}
        />
      </NavItem>
      <NavItem Sign>
        <Image
          src="https://res.cloudinary.com/dra96qhox/image/upload/v1704775140/Line_48_qqi6yv.png"
          alt=""
          width={2}
          height={80}
        />
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
        <Image
          src="https://res.cloudinary.com/dra96qhox/image/upload/v1704775140/Line_48_qqi6yv.png"
          alt=""
          width={2}
          height={80}
        />
      </NavItem>
    </StyledNavbar>
  )
}

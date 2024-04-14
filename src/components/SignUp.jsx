/* eslint-disable @next/next/no-img-element */
'use client'
import '../styles/globals.css'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { Input, FormText } from './shared/FormElements'
import { SubmitButton } from './shared/SubmitButton'
import { Headings, SubHead, HeadBox, Title, TitleCont } from './shared/Heading'
import {
  AuthButton,
  CenterText,
  AuthLogoImg,
  Hero,
  FormBox,
  ButtonBox,
  ToggleButton,
  Btn,
  CardsA,
  CardsB,
  CardImage,
  InputGroup
} from './signup.styles'

import { AuthLogoLinks } from '../config/AuthProviders'

import {
  signUpWithEmailAndPassword,
  signUpWithGitHub,
  signUpWithGoogle,
  signInWithEmailAndPass
} from '../firebase/signupAuth'

const SignUp = () => {
  const [loginFormLeft, setLoginFormLeft] = useState('18%')
  const [registerFormLeft, setRegisterFormLeft] = useState('-80vw')
  const [zStyle, setZStyle] = useState({ left: '0' })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const user = await signUpWithEmailAndPassword(email, password, name)
      if (user) {
        router.push('/myticket')
      }
    } catch (error) {
      console.error('Signup error:', error.message)
      if (error.code === 'auth/invalid-email') {
        document.getElementById('signup-email').style.border = '1px solid red'
      } else if (error.code === 'auth/weak-password') {
        document.getElementById('signup-password').style.border = '1px solid yellow'
      }
    }
  }
  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPass(email, password)
      if (user) {
        router.push('/myticket')
      }
    } catch (error) {
      console.error('Signin error:', error.message)
      document.getElementById('signin-password').style.border = '1px solid red'
      document.getElementById('signin-email').style.border = '1px solid red'
    }
  }
  const handleGoogleSignup = async () => {
    try {
      const user = await signUpWithGoogle()
      if (user) {
        router.push('/myticket')
      }
    } catch (error) {
      console.error('Signup failed:', error.message)
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const switchToRegister = () => {
    setLoginFormLeft('-80vw')
    setRegisterFormLeft('18%')
    setZStyle({ left: '50%' })
  }

  const switchToLogin = () => {
    setLoginFormLeft('18%')
    setRegisterFormLeft('450px')
    setZStyle({ left: '0' })
  }

  return (
    <Hero>
      <HeadBox>
        <Headings>HACKNITR 5.0</Headings>
        <SubHead>Presents</SubHead>
        <TitleCont>
          <Title>Tickets</Title>
        </TitleCont>
      </HeadBox>

      <CardsA>
        <CardImage
          src="https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/blue_zpasbi.png"
          alt="Card A"
        />
      </CardsA>
      <CardsB>
        <CardImage
          src="https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/magenta_dgiq85.png"
          alt="Card B"
        />
      </CardsB>
      <FormBox>
        <ButtonBox>
          <Btn style={zStyle}></Btn>
          <ToggleButton onClick={switchToLogin}>Sign Up</ToggleButton>
          <ToggleButton onClick={switchToRegister}>Sign In</ToggleButton>
        </ButtonBox>

        <InputGroup style={{ left: loginFormLeft }}>
          <AuthButton type="submit" onClick={handleGoogleSignup}>
            <AuthLogoImg src={AuthLogoLinks[0].url} alt="Google" />
            Sign up with Google
          </AuthButton>
          <AuthButton type="submit" onClick={signUpWithGitHub}>
            <AuthLogoImg src={AuthLogoLinks[1].url} alt="Github" />
            Sign up with Github
          </AuthButton>

          <CenterText>Or</CenterText>
          <FormText>Your Name:</FormText>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <FormText>Email:</FormText>
          <Input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <FormText>Password:</FormText>
          <Input
            id="signup-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <SubmitButton onClick={handleSignUp}>Sign up</SubmitButton>
        </InputGroup>

        <InputGroup style={{ left: registerFormLeft }}>
          <AuthButton type="submit" onClick={handleGoogleSignup}>
            <AuthLogoImg src={AuthLogoLinks[0].url} alt="Google" />
            Sign in with Google
          </AuthButton>
          <AuthButton type="submit" onClick={signUpWithGitHub}>
            <AuthLogoImg src={AuthLogoLinks[1].url} alt="Github" />
            Continue with Github
          </AuthButton>

          <CenterText>Or</CenterText>
          <FormText>Email:</FormText>
          <Input
            id="signin-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <FormText>Password:</FormText>
          <Input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <SubmitButton onClick={handleSignIn}>Sign in</SubmitButton>
        </InputGroup>
      </FormBox>
    </Hero>
  )
}

export default SignUp

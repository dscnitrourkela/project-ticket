/* eslint-disable @next/next/no-img-element */
'use client'
import './signup.css'
import '../styles/globals.css'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { Input, FormText } from './shared/FormElements'
import { SubmitButton } from './shared/SubmitButton'
import { AuthButton, CenterText, AuthLogoImg } from './signup.styles'

import { AuthLogoLinks } from '../../config/AuthProviders'

import {
  signUpWithEmailAndPassword,
  signUpWithGitHub,
  signUpWithGoogle
} from '../../firebase/signupAuth'

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
      await signUpWithEmailAndPassword(email, password, name)
      router.push('/myticket')
    } catch (error) {
      console.error('Signup error:', error.message)
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
    <div className="hero">
      <div className="cards_a">
        <img
          src="https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/blue_zpasbi.png"
          alt="Card A"
        />
      </div>
      <div className="cards_b">
        <img
          src="https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/magenta_dgiq85.png"
          alt="Card B"
        />
      </div>
      <div className="form-box">
        <div className="button-box">
          <div id="btn" style={zStyle}></div>
          <button type="button" className="toggle-btn" onClick={switchToLogin}>
            Sign Up
          </button>
          <button type="button" className="toggle-btn" onClick={switchToRegister}>
            Sign In
          </button>
        </div>

        <div id="login" className="input-group" style={{ left: loginFormLeft }}>
          <AuthButton className="extsign" type="submit" onClick={handleGoogleSignup}>
            <AuthLogoImg src={AuthLogoLinks[0].url} alt="Google" />
            Sign up with Google
          </AuthButton>
          <AuthButton className="extsign" type="submit" onClick={signUpWithGitHub}>
            <AuthLogoImg src={AuthLogoLinks[1].url} alt="Github" />
            Sign up with Github
          </AuthButton>
          <CenterText>Or</CenterText>
          <FormText>Your Name:</FormText>
          <Input
            className="holder"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <FormText>Email:</FormText>
          <Input
            className="holder"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <FormText>Password:</FormText>
          <Input
            className="holder"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <SubmitButton className="signupbutton" type="submit" onClick={handleSignUp}>
            Sign up
          </SubmitButton>
        </div>

        <div id="register" className="input-group" style={{ left: registerFormLeft }}>
          <AuthButton className="extsign" type="submit" onClick={handleGoogleSignup}>
            <AuthLogoImg src={AuthLogoLinks[0].url} alt="Google" />
            Sign in with Google
          </AuthButton>
          <AuthButton className="extsign" type="submit" onClick={signUpWithGitHub}>
            <AuthLogoImg src={AuthLogoLinks[1].url} alt="Github" />
            Continue with Github
          </AuthButton>
          <CenterText>Or</CenterText>
          <FormText>Email:</FormText>
          <Input
            className="holder"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <FormText>Password:</FormText>
          <Input
            className="holder"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <SubmitButton className="signupbutton" type="submit" onClick={handleSignUp}>
            Sign in
          </SubmitButton>
        </div>
      </div>
    </div>
  )
}

export default SignUp

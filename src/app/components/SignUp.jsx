/* eslint-disable @next/next/no-img-element */
'use client'
import './signup.css'

import { useRouter } from 'next/navigation'
// import React from 'react';
import React, { useState } from 'react'

import {
  signUpWithEmailAndPassword,
  signUpWithGitHub,
  signUpWithGoogle
} from '../../firebase/signupAuth'

const SignUp = () => {
  const [loginFormLeft, setLoginFormLeft] = useState('50px')
  const [registerFormLeft, setRegisterFormLeft] = useState('-400px')
  const [zStyle, setZStyle] = useState({ left: '0' })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      await signUpWithEmailAndPassword(email, password, name)
      router.push('/myticket')
      //window.alert('User signed up successfully:', user)
    } catch (error) {
      //window.alert('Signup error:', error.message)
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
    setLoginFormLeft('-400px')
    setRegisterFormLeft('50px')
    setZStyle({ left: '110px' })
  }

  const switchToLogin = () => {
    setLoginFormLeft('50px')
    setRegisterFormLeft('450px')
    setZStyle({ left: '0' })
  }

  return (
    <div className="hero">
      <div className="cards_a">
        <img
          src="https://res.cloudinary.com/dra96qhox/image/upload/v1705344262/card.png"
          alt="Card A"
        />
      </div>
      <div className="cards_b">
        <img
          src="https://res.cloudinary.com/dra96qhox/image/upload/v1705344262/card.png"
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
        <form id="login" className="input-group" style={{ left: loginFormLeft }}>
          Your Name:
          <input
            className="holder"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          Email:
          <input
            className="holder"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          Password:
          <input
            className="holder"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="signupbutton" type="submit" onClick={handleSignUp}>
            Sign up
          </button>
          <button className="extsign" type="submit" onClick={handleGoogleSignup}>
            Sign up with Google
          </button>
          <button className="extsign" type="submit" onClick={signUpWithGitHub}>
            Sign up with Github
          </button>
        </form>
        <form id="register" className="input-group" style={{ left: registerFormLeft }}>
          Email:
          <input
            className="holder"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          Password:
          <input
            className="holder"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="signupbutton" type="submit" onClick={handleSignUp}>
            Sign in
          </button>
          <button className="extsign" type="submit" onClick={handleGoogleSignup}>
            Continue with Google
          </button>
          <button className="extsign" type="submit" onClick={signUpWithGitHub}>
            Continue with Github
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp

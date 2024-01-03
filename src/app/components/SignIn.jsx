'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  signUpWithEmailAndPassword,
  signUpWithGitHub,
  signUpWithGoogle
} from '../../firebase/signupAuth'

import {
  signInContainer,
  inputContainer,
  sigInButtonContainer,
  socialButtonContainer
} from './style'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      await signUpWithEmailAndPassword(email, password)
      router.push('/myticket')
    } catch (error) {
      console.error('Sign in error:', error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signUpWithGoogle()
      router.push('/myticket')
    } catch (error) {
      console.error('Google Sign in failed:', error.message)
    }
  }

  const handleGitHubSignIn = async () => {
    try {
      await signUpWithGitHub()
    } catch (error) {
      console.error('GitHub Sign in failed:', error.message)
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div style={signInContainer}>
      <div style={inputContainer}>
        <h1>User Sign in</h1>
        email:
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        password:
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div style={sigInButtonContainer}>
        <button className="signinbutton" type="submit" onClick={handleSignIn}>
          Sign in
        </button>
      </div>
      <div style={socialButtonContainer}>
        <button className="extsign" type="submit" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        <button className="extsign" type="submit" onClick={handleGitHubSignIn}>
          Sign in with GitHub
        </button>
      </div>
    </div>
  )
}

export default SignIn

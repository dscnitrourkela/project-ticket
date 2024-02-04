/* eslint-disable @next/next/no-img-element */
'use client'
import './signup.css'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import {
  signUpWithEmailAndPassword,
  signUpWithGitHub,
  signUpWithGoogle
} from '../../firebase/signupAuth'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeForm, setActiveForm] = useState('signup') // 'signup' or 'signin'
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

  const toggleForm = (form) => {
    setActiveForm(form)
  }

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" />
          <button
            type="button"
            className={`toggle-btn ${activeForm === 'signup' ? 'active' : ''}`}
            onClick={() => toggleForm('signup')}
          >
            {activeForm === 'signup' ? 'Sign Up' : 'Sign In'}
          </button>
          <button
            type="button"
            className={`toggle-btn ${activeForm === 'signin' ? 'active' : ''}`}
            onClick={() => toggleForm('signin')}
          >
            {activeForm === 'signup' ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        {activeForm === 'signup' && (
          <form id="signup" className="input-group">
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
        )}
        {activeForm === 'signin' && (
          <form id="signin" className="input-group">
            {/* Signin form */}
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
            <button className="extsign" type="submit" onClick={signUpWithGoogle}>
              Sign in with Google
            </button>
            <button className="extsign" type="submit" onClick={signUpWithGitHub}>
              Sign in with Github
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default SignUp

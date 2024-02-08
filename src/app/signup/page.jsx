'use client'
//import { useEffect } from 'react';
//import { auth, database } from '../path-to-firebase-file/firebase';
import '../components/signup.css'

import React, { useState } from 'react'

import {
  signUpWithEmailAndPassword,
  signUpWithGitHub,
  signUpWithGoogle
} from '../../firebase/signupAuth'
import { Navbar } from '../components/marginals/Navbar'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    try {
      await signUpWithEmailAndPassword(email, password, name)
      //window.alert('User signed up successfully:', user)
    } catch (error) {
      //window.alert('Signup error:', error.message)
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

  return (
    <>
      <Navbar />
      <div className="signContainer">
        <div className="sign-form">
          <h1>User signup</h1>
          name:
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
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
          <button className="signupbutton" type="submit" onClick={handleSignUp}>
            Sign up
          </button>
          <button className="extsign" type="submit" onClick={signUpWithGoogle}>
            Sign up with Google
          </button>
          <button className="extsign" type="submit" onClick={signUpWithGitHub}>
            Sign up with Github
          </button>
        </div>
      </div>
    </>
  )
}

export default SignUp

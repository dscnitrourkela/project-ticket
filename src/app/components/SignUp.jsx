import React from 'react'
//import { useEffect } from 'react';
//import { auth, database } from '../path-to-firebase-file/firebase';
import './signup.css'

const SignUp = () => {
  return (
    <div className="signContainer">
      <form className="sign-form">
        <h1>User signup</h1>
        name:
        <input type="text" placeholder="Enter your name" />
        email:
        <input type="email" placeholder="Enter your email" />
        password:
        <input type="password" placeholder="Enter your password" />
      </form>
    </div>
  )
}

export default SignUp

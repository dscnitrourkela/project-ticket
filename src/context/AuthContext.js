'use client'
import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'

import { auth } from '../firebase/firebase'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //console.log('Auth State Changed:', user)
      setCurrentUser(user)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { get, ref, set } from 'firebase/database'

import { auth, database } from './firebase'

export const signUpWithEmailAndPassword = async (email, password, name) => {
  try {
    // Creating user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // adding name to db
    const userRef = ref(database, `users/${user.uid}`)
    console.log('adding name to db', user.uid)
    await set(userRef, {
      name: name,
      email: user.email
    })
    return user
  } catch (error) {
    //console.error('Error signing up:', error.message)
    throw error
  }
}

export const signInWithEmailAndPass = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    return user
  } catch (error) {
    throw error
  }
}

// signup with google function
export const signUpWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()

    // Sign in with Google
    const userCredential = await signInWithPopup(auth, provider)
    const user = userCredential.user

    const userRef = ref(database, `users/${user.uid}`)
    const snapshot = await get(userRef)

    // adding user to db in users/
    if (!snapshot.exists()) {
      await set(userRef, {
        name: user.displayName,
        email: user.email
      })
    }

    return user
  } catch (error) {
    //console.error('Error signing up with Google:', error.message)
    throw error
  }
}

// signup with github function
export const signUpWithGitHub = async () => {
  const provider = new GithubAuthProvider()

  try {
    await signInWithPopup(auth, provider)
    //console.log('User signed up with GitHub:', result.user)
  } catch (error) {
    //console.error('Error signing up with GitHub:', error.message)
  }
}

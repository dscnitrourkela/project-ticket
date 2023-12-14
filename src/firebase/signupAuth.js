// auth.js
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import { auth, database } from './firebase'

const signUpWithEmailAndPassword = async (email, password, displayName) => {
  try {
    // Create user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Set additional user information in the database
    const userRef = ref(database, `users/${user.uid}`)
    await set(userRef, {
      displayName: displayName || null,
      email: user.email
    })

    return user
  } catch (error) {
    console.error('Error signing up:', error.message)
    throw error
  }
}

export { signUpWithEmailAndPassword }

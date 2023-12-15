import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set } from 'firebase/database'

import { auth, database } from './firebase'

export const signUpWithEmailAndPassword = async (email, password, name) => {
  try {
    // Creating user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // adding name to db
    const userRef = ref(database, `users/${user.uid}`)
    await set(userRef, {
      name: name || null,
      email: user.email
    })

    return user
  } catch (error) {
    console.error('Error signing up:', error.message)
    throw error
  }
}

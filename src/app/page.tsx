'use client'
import { AuthProvider } from '../context/AuthContext'
import Homepage from './Homepage'

export default function Home() {
  return (
    <AuthProvider>
      <Homepage />
    </AuthProvider>
  )
}

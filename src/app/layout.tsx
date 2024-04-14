import { Metadata } from 'next'
import { AuthProvider } from '../context/AuthContext'

export const metadata: Metadata = {
  title: 'Ticket | HackNITR 5.0',
  description: 'Ticket for HackNITR 5.0',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  )
}

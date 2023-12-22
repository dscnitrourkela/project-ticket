// Import the necessary functions from the Firebase library
'use client'
import React, { useState } from 'react'

import { createThis } from '../../firebase/createTicket.js'
import { Navbar } from '../components/Navbar'

const CreateTicket = () => {
  const [name, setName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createThis(name, teamName, email)
    // console.log('Ticket Created:', { name, teamName, email })
    setName('')
    setTeamName('')
    setEmail('')
  }

  return (
    <>
      <Navbar />

      <div className="form-cont">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Team Name:
            <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
          </label>
          <br />
          <label>
            Email ID:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <button type="submit">Create Ticket</button>
        </form>
      </div>
    </>
  )
}

export default CreateTicket

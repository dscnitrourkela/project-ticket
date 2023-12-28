'use client'
import { push, ref } from 'firebase/database'
import React, { useState } from 'react'

import { database } from '../../firebase/firebase'

const CreateTicket = () => {
  const [name, setName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const ticketRef = ref(database, 'tickets')

    push(ticketRef, {
      name,
      teamName,
      email
    })

    // console.log('Ticket Created:', { name, teamName, email })

    setName('')
    setTeamName('')
    setEmail('')
  }

  return (
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
  )
}

export default CreateTicket

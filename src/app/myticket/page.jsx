/* eslint-disable max-len */
'use client'
// import React, { useState } from 'react'

// import { createThis } from '../../firebase/createTicket.js'
// import { Navbar } from '../components/Navbar'

// const CreateTicket = () => {
//   const [name, setName] = useState('')
//   const [teamName, setTeamName] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     createThis(name, teamName, email)
//     // console.log('Ticket Created:', { name, teamName, email })
//     setName('')
//     setTeamName('')
//     setEmail('')
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="form-cont">
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Team Name:
//             <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Email ID:
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <br />
//           <button type="submit">Create Ticket</button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default CreateTicket
import { get, push, ref } from 'firebase/database'
import html2canvas from 'html2canvas'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { database } from '../../firebase/firebase'
import Modal from '../components/modal'
import { Navbar } from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'

const TicketContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 20px;
`

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const TicketPreview = styled.div`
  flex: 1;
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  min-height: 200px;
`

const GenerateButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`

const MyTicketPage = () => {
  const { currentUser } = useContext(AuthContext)
  const [ticketInfo, setTicketInfo] = useState({ name: '', teamName: '', email: '' })
  const [existingTicket, setExistingTicket] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [ticketImage, setTicketImage] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push('/')
      return
    }

    // Fetch existing ticket
    const ticketsRef = ref(database, `tickets/${currentUser.uid}`)
    get(ticketsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const tickets = snapshot.val()
        const lastTicketKey = Object.keys(tickets).pop()
        setExistingTicket(tickets[lastTicketKey])
      }
    })
  }, [currentUser, router])

  const handleChange = (e) => {
    setTicketInfo({ ...ticketInfo, [e.target.name]: e.target.value })
  }

  const generateTicket = () => {
    const ticketElement = document.getElementById('ticketPreview')
    html2canvas(ticketElement).then((canvas) => {
      const image = canvas.toDataURL('image/png')
      setTicketImage(image)
      setShowModal(true)

      if (currentUser) {
        const ticketRef = ref(database, `tickets/${currentUser.uid}`)
        push(ticketRef, {
          ...ticketInfo,
          ticketImage: image
        })
      }
    })
  }

  return (
    <>
      <Navbar />
      {existingTicket ? (
        <div>
          <h2>Your Existing Ticket</h2>
          <Image src={existingTicket.ticketImage} alt="Existing Ticket" width={500} height={250} />
        </div>
      ) : (
        <TicketContainer>
          <FormSection>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={ticketInfo.name}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="teamName"
              placeholder="Team Name"
              value={ticketInfo.teamName}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={ticketInfo.email}
              onChange={handleChange}
            />
            <GenerateButton onClick={generateTicket}>Generate Ticket</GenerateButton>
          </FormSection>
          <TicketPreview id="ticketPreview">
            <h2>{ticketInfo.name || 'Your Name'}</h2>
            <p>{ticketInfo.teamName || 'Your Team Name'}</p>
            <p>{ticketInfo.email || 'Your Email'}</p>
          </TicketPreview>
        </TicketContainer>
      )}

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {ticketImage && (
          <Image src={ticketImage} alt="Generated Ticket" width={1000} height={500} unoptimized />
        )}
      </Modal>
    </>
  )
}

export default MyTicketPage

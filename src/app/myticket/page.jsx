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
import { push, ref } from 'firebase/database'
import html2canvas from 'html2canvas'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

import { database } from '../../firebase/firebase'
import Modal from '../components/modal'
import { Navbar } from '../components/Navbar'

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
  const [ticketInfo, setTicketInfo] = useState({ name: '', teamName: '', email: '' })
  const [showModal, setShowModal] = useState(false)
  const [ticketImage, setTicketImage] = useState('')

  const handleChange = (e) => {
    setTicketInfo({ ...ticketInfo, [e.target.name]: e.target.value })
  }

  const generateTicket = () => {
    const ticketElement = document.getElementById('ticketPreview')
    html2canvas(ticketElement).then((canvas) => {
      const image = canvas.toDataURL('image/png')
      setTicketImage(image)
      setShowModal(true)

      // Optional: Store in Firebase
      const ticketRef = ref(database, 'tickets')
      push(ticketRef, {
        ...ticketInfo,
        ticketImage: image
      })
    })
  }

  return (
    <>
      <Navbar />
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

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Image src={ticketImage} alt="Generated Ticket" width={1000} height={500} />
      </Modal>
    </>
  )
}

export default MyTicketPage

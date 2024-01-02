/* eslint-disable max-len */
'use client'
import { get, push, ref, update } from 'firebase/database'
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
  padding: 2vw 4vw;
  border-radius: 10px;
`

const Input = styled.input`
  padding: 10px;
  margin: 7px 0px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const TicketPreview = styled.div`
  flex: 1;
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  padding: 2vw 4vw;
  border-radius: 20px;
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
  const [ticketInfo, setTicketInfo] = useState({
    name: '',
    teamName: '',
    email: '',
    bgcolor: '',
    ticketImage: ''
  })
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [existingTicketKey, setExistingTicketKey] = useState(null)
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
        setTicketInfo({
          name: tickets[lastTicketKey].name,
          teamName: tickets[lastTicketKey].teamName,
          email: tickets[lastTicketKey].email,
          bgcolor: tickets[lastTicketKey].bgcolor,
          ticketImage: tickets[lastTicketKey].ticketImage
        })
        setExistingTicketKey(lastTicketKey)
        setShowModal(true)
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

      if (currentUser) {
        const ticketRef = ref(database, `tickets/${currentUser.uid}`)
        const updateRef = existingTicketKey
          ? ref(database, `tickets/${currentUser.uid}/${existingTicketKey}`)
          : push(ticketRef)
        update(updateRef, {
          ...ticketInfo,
          ticketImage: image
        }).then(() => {
          setTicketInfo({ ...ticketInfo, ticketImage: image })
          setShowModal(true)
          setEditMode(false)
        })
      }
    })
  }

  return (
    <>
      <Navbar />
      {editMode ? (
        <TicketContainer>
          <FormSection style={{ background: ticketInfo.bgcolor ? ticketInfo.bgcolor : '#ffffff' }}>
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
            choose Background:
            <Input type="color" name="bgcolor" value={ticketInfo.bgcolor} onChange={handleChange} />
            <GenerateButton onClick={generateTicket}>
              {existingTicketKey ? 'Update Ticket' : 'Generate Ticket'}
            </GenerateButton>
          </FormSection>

          <TicketPreview
            id="ticketPreview"
            style={{ background: ticketInfo.bgcolor ? ticketInfo.bgcolor : '#ffffff' }}
          >
            <h2>{ticketInfo.name || 'Your Name'}</h2>
            <p>{ticketInfo.teamName || 'Your Team Name'}</p>
            <p>{ticketInfo.email || 'Your Email'}</p>
          </TicketPreview>
        </TicketContainer>
      ) : (
        <>
          <button onClick={() => setEditMode(true)}>Edit Ticket</button>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            {ticketInfo.ticketImage && (
              <Image
                src={ticketInfo.ticketImage}
                alt="Generated Ticket"
                width={1000}
                height={500}
                unoptimized
              />
            )}
          </Modal>
        </>
      )}
    </>
  )
}

export default MyTicketPage

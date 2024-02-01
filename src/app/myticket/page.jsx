/* eslint-disable max-len */
'use client'
import { get, push, ref, update } from 'firebase/database'
import html2canvas from 'html2canvas'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import '../styles/globals.css'
import { SubmitButton } from '../components/shared/SubmitButton'

import { database } from '../../firebase/firebase'
import Modal from '../components/Ticket/modal'
import InnerTicket from '../components/Ticket/ticketComp'
import { Navbar } from '../components/marginals/Navbar'
import { AuthContext } from '../context/AuthContext'
import { GlobalButton } from '../components/shared/GlobalButton'
import {
  TicketPage,
  TicketContainer,
  FormBg,
  FormSection,
  FormText,
  Input,
  PreviewBg,
  PreviewCont,
  GridCont,
  GridLines,
  TicketCompontent,
  ArrayHolder,
  ColorText,
  ColorArray,
  ClrButton,
  PreviewButton,
  ShareButton,
  ModalPage
} from './ticket.styles'

const MyTicketPage = () => {
  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']
  const ticketUrls = [
    'https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/blue_zpasbi.png',
    'https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/light_izvbcd.png',
    'https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/magenta_dgiq85.png',
    'https://res.cloudinary.com/djl2ulktr/image/upload/v1706380517/ejsd4w2xsqhowanwxjvz.png',
    'https://res.cloudinary.com/djl2ulktr/image/upload/v1706382432/green_zgppwy.png'
  ]
  const rows = 1
  const columns = 16
  const { currentUser } = useContext(AuthContext)

  const [ticketInfo, setTicketInfo] = useState({
    name: '',
    teamName: '',
    email: '',
    bgcolor: '',
    ticketImage: ''
  })

  const [selectedColor, setSelectedColor] = useState(0)

  const [showModal, setShowModal] = useState(true)
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
          ticketId: tickets[lastTicketKey].ticketId,
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
          ticketImage: image,
          ticketId: ticketId++
        }).then(() => {
          setTicketInfo({ ...ticketInfo, ticketImage: image })
          setShowModal(true)
        })
      }
    })
  }

  return (
    <>
      <Navbar />
      <TicketPage>
        <TicketContainer>
          <FormBg>
            <FormSection>
              <FormText>Your name:</FormText>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={ticketInfo.name}
                onChange={handleChange}
              />
              <FormText>Team name:</FormText>
              <Input
                type="text"
                name="teamName"
                placeholder="Team Name"
                value={ticketInfo.teamName}
                onChange={handleChange}
              />

              <></>
              <SubmitButton
                onClick={() => {
                  generateTicket
                  setShowModal(true)
                }}
              >
                {existingTicketKey ? 'Update Ticket' : 'Generate Ticket'}
              </SubmitButton>
            </FormSection>
          </FormBg>

          <PreviewBg>
            <PreviewCont>
              <GridCont>
                {Array.from({ length: rows * columns }, (_, index) => (
                  <GridLines key={index}></GridLines>
                ))}
                <TicketCompontent>
                  <InnerTicket
                    user_name={ticketInfo.name || 'Your Name'}
                    team_name={ticketInfo.teamName || 'Your Team Name'}
                    ticket_num={ticketInfo.ticketId || '510000'}
                    ticket_img_url={ticketUrls[selectedColor]}
                    lightBg={selectedColor === 1 ? true : false}
                  />
                </TicketCompontent>
              </GridCont>
            </PreviewCont>
          </PreviewBg>
        </TicketContainer>
        <ArrayHolder>
          <ColorText>choose color: </ColorText>
          <ColorArray>
            {colors.map((c) => (
              <ClrButton
                key={c}
                style={{ backgroundColor: c }}
                onClick={() => {
                  setTicketInfo({ ...ticketInfo, bgcolor: c })
                  setSelectedColor(colors.indexOf(c))
                }}
              />
            ))}
          </ColorArray>
        </ArrayHolder>

        <PreviewButton onClick={() => setShowModal(true)}>Preview your Ticket</PreviewButton>
        <ShareButton>Share your Ticket</ShareButton>
      </TicketPage>

      <ModalPage style={showModal ? { display: 'block' } : { display: 'none' }}>
        <GlobalButton onClick={() => setShowModal(false)}>Edit Ticket</GlobalButton>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          {ticketInfo.ticketImage && (
            <InnerTicket
              user_name={ticketInfo.name || 'Your Name'}
              team_name={ticketInfo.teamName || 'Your Team Name'}
              ticket_num={ticketInfo.ticketId || '510000'}
              ticket_img_url={ticketUrls[selectedColor]}
              lightBg={selectedColor === 1 ? true : false}
            />
          )}
        </Modal>
      </ModalPage>
    </>
  )
}
export default MyTicketPage

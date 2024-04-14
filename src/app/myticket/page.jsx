/* eslint-disable */
'use client'
import { get, push, ref, update } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import '../../styles/globals.css'

import { database, auth } from '../../firebase/firebase'
import { Headings, HeadBox } from '../../components/shared/Heading'
import Modal from '../../components/Ticket/modal'
import InnerTicket from '../../components/Ticket/ticketComp'
import { Navbar } from '../../components/marginals/Navbar'
import { Footer } from '../../components/marginals/Footer'
import { AuthContext } from '../../context/AuthContext'
import { GlobalButton } from '../../components/shared/GlobalButton'
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
  UpdateButton,
  PreviewButton,
  ModalPage,
  ButtonsContainer,
  IconButton
} from './ticket.styles'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const MyTicketPage = () => {
  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']

  const rows = 1
  const columns = 16
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()

  const [ticketInfo, setTicketInfo] = useState({
    name: currentUser?.displayName || '',
    teamName: '',
    email: '',
    bgcolor: '',
    ticketId: ''
  })

  const [existingTicketKey, setExistingTicketKey] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/')
      }
    })
    return () => {
      unsubscribe()
    }
  }, [currentUser, router])

  useEffect(() => {
    if (currentUser === null) {
      // Authentication state is still loading
      return
    }
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
        const previousTicket = Object.keys(tickets)[Object.keys(tickets).length - 1]
        console.log('Last Ticket Key:', lastTicketKey)
        console.log('Previous Ticket:', previousTicket)
        setTicketInfo({
          name: tickets[lastTicketKey].name || currentUser.displayName,
          teamName: tickets[lastTicketKey].teamName,
          email: tickets[lastTicketKey].email,
          bgcolor: tickets[lastTicketKey].bgcolor,
          ticketId: tickets[lastTicketKey].ticketId
        })
        setExistingTicketKey(lastTicketKey)
      }
    })
  }, [currentUser, router])

  const [showModal, setShowModal] = useState(existingTicketKey ? true : false)

  const handleChange = (e) => {
    setTicketInfo({ ...ticketInfo, [e.target.name]: e.target.value })
  }

  const generateTicket = () => {
    if (currentUser) {
      const ticketRef = ref(database, `tickets/${currentUser.uid}`)
      const updateRef = existingTicketKey
        ? ref(database, `tickets/${currentUser.uid}/${existingTicketKey}`)
        : push(ticketRef)

      // promise for the update
      const updatePromise = update(updateRef, {
        ...ticketInfo,
        bgcolor: ticketInfo.bgcolor || colors[0],
        gmail: currentUser.email,
        googleName: currentUser.displayName,
        ticketId: existingTicketKey ? ticketInfo.ticketId : ticketInfo.ticketId + 1
      })
      updatePromise.then(() => {
        const newTicketKey = existingTicketKey || updateRef.key
        setShowModal(true)
        console.log('Ticket generated successfully', ticketInfo)
        console.log('with ID', newTicketKey, 'for User', currentUser.uid)
      })
    }
  }

  return (
    <div>
      <Navbar />
      <HeadBox>
        <Headings>Generate Your Ticket</Headings>
      </HeadBox>

      <TicketPage>
        <TicketContainer>
          <FormBg>
            <FormSection>
              <FormText>Your name:</FormText>
              <Input
                type="text"
                name="name"
                placeholder={ticketInfo.name ? ticketInfo.name : 'Name'}
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
              <UpdateButton
                onClick={() => {
                  generateTicket()
                  existingTicketKey ? setShowModal(true) : null
                }}
              >
                {existingTicketKey ? 'Update Ticket' : 'Generate Ticket'}
              </UpdateButton>
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
                    ticket_num={ticketInfo.ticketId || 550000}
                    ticket_img={ticketInfo.bgcolor || '#206EA6'}
                    lightBg={colors.indexOf(ticketInfo.bgcolor) === 1 ? true : false}
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
                }}
              />
            ))}
          </ColorArray>
        </ArrayHolder>

        <PreviewButton onClick={() => setShowModal(true)}>Preview your Ticket</PreviewButton>
        <ButtonsContainer>
          <Link
            href={`https://twitter.com/intent/post?text=I%20just%20created%20my%20ticket%20for%20HackNITR%205.0%20at%20https://ticket.hacknitr.com.%20You%20can%20view%20it%20at%20${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/preview/${currentUser?.uid}`}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <IconButton>
              <Icon icon="fa6-brands:x-twitter" color="#1DA1F2" width="2.5em" height="2.5em" />
            </IconButton>
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/preview/${currentUser?.uid}`}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <IconButton>
              <Icon icon="fa-brands:facebook" color="#4267B2" width="2.5em" height="2.5em" />
            </IconButton>
          </Link>
          <Link
            href={`https://wa.me/?text=I%20just%20created%20my%20ticket%20for%20HackNITR%205.0%20at%20https://ticket.hacknitr.com.%20You%20can%20view%20it%20at%20${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/preview/${currentUser?.uid}`}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <IconButton>
              <Icon icon="fa-brands:whatsapp" color="#25D366" width="2.5em" height="2.5em" />
            </IconButton>
          </Link>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/preview/${currentUser?.uid}`}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <IconButton>
              <Icon icon="fa-brands:linkedin" color="#0A66C2" width="2.5em" height="2.5em" />
            </IconButton>
          </Link>
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText(
                `${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/preview/${currentUser?.uid}`
              )
              alert('Link copied to clipboard')
            }}
          >
            <Icon icon="solar:copy-linear" color="#000" width="2.5em" height="2.5em" />
          </IconButton>
        </ButtonsContainer>
      </TicketPage>
      {showModal && (
        <ModalPage>
          <GlobalButton onClick={() => setShowModal(false)}>Edit Ticket</GlobalButton>
          <Modal
            show={showModal}
            onClick={() => {
              setShowModal(false)
            }}
            onClose={() => setShowModal(false)}
          >
            <InnerTicket
              user_name={ticketInfo.name || 'Your Name'}
              team_name={ticketInfo.teamName || 'Your Team Name'}
              ticket_num={ticketInfo.ticketId || 550000}
              ticket_img={ticketInfo.bgcolor || '#206EA6'}
              lightBg={colors.indexOf(ticketInfo.bgcolor) === 1 ? true : false}
              modalView={showModal}
            />
          </Modal>
        </ModalPage>
      )}
      <Footer />
    </div>
  )
}
export default MyTicketPage

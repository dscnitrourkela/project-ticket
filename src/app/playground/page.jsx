/* eslint-disable max-len */
'use client'
import { get, push, ref, update } from 'firebase/database'
import html2canvas from 'html2canvas'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import '../styles/globals.css'
import { SubmitButton } from '../components/shared/SubmitButton'

import { database } from '../../firebase/firebase'
import Modal from '../components/Ticket/modal'
import InnerTicket from '../components/Ticket/ticketComp'
import { Navbar } from '../components/marginals/Navbar'
import { AuthContext } from '../context/AuthContext'
import { GlobalButton } from '../components/shared/GlobalButton'

const TicketImgBg = styled.div`
  width: 660px;
  height: 390px;
  position: absolute;
  border: 4px solid hotpink;
  margin: 0px;
  border-radius: 5px;
`

const ShareButton = styled(GlobalButton)`
  background-color: pink;
  margin: 10vw 2vw;
`
const TicketPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 45px;
  padding: 40px 0px;
  border: 0px solid aqua;
`

const TicketContainer = styled.div`
  width: 98%;
  height: auto;
  border: 0px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`
const FormBg = styled.div`
  height: auto;
  width: auto;
  margin: 0vw 2.5vw;
  align-items: center;
  border: 1.5px solid;
  border-image-source: linear-gradient(212.47deg, #bd00ff 0%, rgba(0, 0, 0, 0) 44.37%);
  border-image-slice: 1;
  border-radius: 10px;

  background: linear-gradient(212.47deg, rgba(189, 0, 255, 0.2) 0%, rgba(0, 0, 0, 0) 44.37%);
  box-shadow: 0px 18px 59.599998474121094px 0px #cc3cff1a inset;

  @media (max-width: 980px) {
    margin: 2vw 0vw;
  }
  @media (max-width: 680px) {
    margin: 6vw 0vw;
  }
`
const FormSection = styled.div`
  opacity: 1;
  width: 458px;
  height: 278px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 3vw 1.5vw 1vw 1.5vw;
  background: linear-gradient(
    180deg,
    rgba(156, 154, 255, 0.1) 0%,
    rgba(234, 173, 255, 0.084) 123.17%
  );

  border-radius: 10px;
  box-shadow: -1px 2px 9.800000190734863px 0px #ffffff40 inset;

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 35vw;
  }
  @media (max-width: 680px) {
    width: 68vw;
    min-height: 40vw;
  }
  @media (max-width: 450px) {
    height: 64vw;
  }
`

const FormText = styled.p`
  border: 0px solid pink;
  margin: 20px 0px 5px 0px;
  @media (max-width: 680px) {
    height: 10px;
    margin: 3vw 2vw;
  }
`

const Input = styled.input`
  background: linear-gradient(0deg, rgba(225, 225, 225, 0.06), rgba(225, 225, 225, 0.06));
  height: 19px;
  padding: 10px;
  margin: 5px 0px 20px 0px;
  border-radius: 11px;
  border: 1.8px solid #e88eff33;

  &:focus {
    outline: none;
    background: linear-gradient(0deg, rgba(232, 142, 255, 0.2), rgba(232, 142, 255, 0.2));
    border-color: #e88eff;
  }

  @media (max-width: 680px) {
    margin: 1vw 2vw;
  }
  @media (max-width: 680px) {
    height: 10px;
  }
  @media (max-width: 460px) {
    height: 6px;
  }
`

const PreviewBg = styled.div`
  height: auto;
  width: auto;
  margin: 0vw 2.5vw;
  align-items: center;
  border: 1.5px solid;
  border-radius: 10px;
  border-image-source: linear-gradient(132.59deg, #bd00ff 1.4%, rgba(0, 0, 0, 0) 34.46%);
  border-image-slice: 1;

  background: linear-gradient(132.59deg, rgba(189, 0, 255, 0.2) 5.4%, rgba(0, 0, 0, 0) 34.46%);
  box-shadow: 0px 18px 59.599998474121094px 0px #cc3cff1a inset;

  @media (max-width: 980px) {
    margin: 2vw 0vw;
  }
`
const PreviewCont = styled.div`
  opacity: 1;
  width: 513px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: linear-gradient(
    180deg,
    rgba(156, 154, 255, 0.1) 0%,
    rgba(234, 173, 255, 0.084) 123.17%
  );

  border-radius: 10px;
  box-shadow: -1px 2px 9.800000190734863px 0px #ffffff40 inset;

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 35vw;
  }
  @media (max-width: 680px) {
    width: 68vw;
    min-height: 40vw;
  }
  @media (max-width: 450px) {
    height: 64vw;
  }
`
const GridCont = styled.div`
  position: relative;
  opacity: 1;
  width: 100%;
  height: 99%;
  margin: auto 0px;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1px;

  border: 0px solid red;
  border-radius: 10px;

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 35vw;
  }
  @media (max-width: 680px) {
    width: 68vw;
    min-height: 40vw;
  }
  @media (max-width: 450px) {
    height: 64vw;
  }
`
const GridLines = styled.div`
  width: 1.8vw;
  background-color: rgba(156, 154, 255, 0);
  border-right: 3px solid rgba(165, 148, 176, 0.3);
  height: 100%;

  @media (max-width: 680px) {
    min-height: 40vw;
  }
`
const TicketCompontent = styled(TicketImgBg)`
  border: 0px solid pink;
  position: absolute;
  left: 2.1vw;
  top: 2.5vw;
  width: 439px;
  height: 250px;
  transform: rotate(-5.4deg);
  &:hover {
    transform: rotate(0deg);
    transition: 0.2s;
  }

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 32vw;
    height: 20vw;
    top: 5vw;
    left: 1.5vw;
  }
  @media (max-width: 980px) {
    width: 50vw;
    height: 32vw;
    left: 4vw;
    top: 4vw;
  }
  @media (max-width: 680px) {
    width: 63vw;
    height: 42vw;
    top: 8vw;
    left: 2vw;
  }
`
const ArrayHolder = styled.div`
  width: 100%;
  border: 0px solid white;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  @media (max-width: 980px) {
    justify-content: center;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: space-around;
  }
`
const ColorText = styled.p`
  border: 0px solid pink;
`
const ColorArray = styled.div`
  border: 0px solid pink;
  flex: 0.4;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const ClrButton = styled.span`
  height: 25px;
  width: 25px;
  margin: 1.5vw 1vw;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 450px) {
    height: 18px;
    width: 18px;
    margin: 2vw 2vw;
  }
`

const ModalPage = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px;
`
const PreviewButton = styled.button`
  height: 52px;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  padding: 2.7px;
  padding: 0vw 2vw;
  background: linear-gradient(
    97.1deg,
    rgba(247, 225, 255, 0.38) 11.37%,
    rgba(218, 115, 255, 0.38) 102.95%
  );
`

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
  /*var currentUser = {
    name: 'uder1',
    mail: 'hey@gmail.com'
  }*/
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
              <SubmitButton onClick={generateTicket}>
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

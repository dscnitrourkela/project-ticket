'use client'
import React from 'react'
import { ticketUrls } from '../../config/TicketBackgrounds'
import {
  TicketImage,
  TicketText,
  Names,
  UserName,
  TeamName,
  DarkUserName,
  DarkTeamName,
  ModalNames,
  ModalUserNm,
  ModalTeamName,
  DarkModalUserNm,
  DarkModalTeamName
} from './ticket.styles'

const InnerTicket = ({ user_name, team_name, ticket_img, lightBg, modalView }) => {
  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']

  return (
    <>
      <TicketImage
        src={ticketUrls[colors.indexOf(ticket_img)]}
        width={100}
        height={100}
        alt="Ticket image"
      />
      {!lightBg ? (
        <TicketText>
          {modalView ? (
            <ModalNames>
              <ModalUserNm>{user_name}</ModalUserNm>
              <ModalTeamName>{team_name}</ModalTeamName>
            </ModalNames>
          ) : (
            <Names>
              <UserName>{user_name}</UserName>
              <TeamName>{team_name}</TeamName>
            </Names>
          )}
        </TicketText>
      ) : (
        <TicketText>
          {modalView ? (
            <ModalNames>
              <DarkModalUserNm>{user_name}</DarkModalUserNm>
              <DarkModalTeamName>{team_name}</DarkModalTeamName>
            </ModalNames>
          ) : (
            <Names>
              <DarkUserName>{user_name}</DarkUserName>
              <DarkTeamName>{team_name}</DarkTeamName>
            </Names>
          )}
        </TicketText>
      )}
    </>
  )
}

export default InnerTicket

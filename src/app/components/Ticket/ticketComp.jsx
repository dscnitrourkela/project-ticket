'use client'
import React from 'react'
import { ticketUrls } from '../../../config/TicketBackgrounds'
import {
  TicketImage,
  TicketText,
  Names,
  UserName,
  TeamName,
  TicketNum,
  DarkUserName,
  DarkTeamName,
  DarkTicketNum
} from './ticket.styles'
const InnerTicket = ({ user_name, team_name, ticket_num, ticket_img, lightBg }) => {
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
          <Names>
            <UserName>{user_name}</UserName>
            <TeamName>{team_name}</TeamName>
          </Names>
          <TicketNum>{ticket_num}</TicketNum>
        </TicketText>
      ) : (
        <TicketText>
          <Names>
            <DarkUserName>{user_name}</DarkUserName>
            <DarkTeamName>{team_name}</DarkTeamName>
          </Names>
          <DarkTicketNum>{ticket_num}</DarkTicketNum>
        </TicketText>
      )}
    </>
  )
}

export default InnerTicket

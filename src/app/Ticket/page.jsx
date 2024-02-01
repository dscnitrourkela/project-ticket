'use client'
import React from 'react'
import styled from 'styled-components'

const TicketImage = styled.img`
  width: 100%;
  height: 100%;
  border: 0px solid white;
  border-radius: 10px;
`
const TicketText = styled.div`
  position: absolute;
  top: 0vw;
  color: white;
  border: 0px solid black;
  width: 100%;
  height: 100%;
`

const Names = styled.div`
  position: absolute;
  bottom: 2vw;
  left: 1.5vw;
  color: white;
  border: 0px solid red;
  position: absolute;
  width: 40%;
  max-height: 40%;
  padding: 1vw;
`
const UserName = styled.h1`
  background: -webkit-linear-gradient(97.42deg, #e0e0e0 6.54%, rgba(174, 171, 171, 0.78) 124.9%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8vw;
  @media (max-width: 980px) {
    font-size: 3vw;
  }
`
const TeamName = styled.h2`
  border: 0px solid red;
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(253, 253, 253, 0.03) 4.11%,
    rgba(253, 253, 253, 0.9) 107.31%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Montserrat;
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 980px) {
    font-size: 2.8vw;
  }
`
const TicketNum = styled.span`
  border: 0px solid red;
  transform: rotate(-90deg);
  position: absolute;
  right: -1vw;
  bottom: 50%;
  color: white;
  padding: 2vw 0vw;

  background: -webkit-linear-gradient(
    91.7deg,
    rgba(253, 253, 253, 0.03) 4.11%,
    rgba(253, 253, 253, 0.9) 117.31%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Montserrat;
  font-size: 2vw;
  font-weight: 500;
  @media (max-width: 980px) {
    font-size: 3.5vw;
  }
`
const DarkUserName = styled(UserName)`
  background: -webkit-linear-gradient(97.42deg, #010101 6.54%, rgba(79, 82, 82, 0.78) 124.9%);
  background-clip: text;
`
const DarkTeamName = styled(TeamName)`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(0, 0, 0, 0.03) 4.11%,
    rgba(0, 0, 0, 0.9) 107.31%
  );
  background-clip: text;
`
const DarkTicketNum = styled(TicketNum)`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(0, 0, 0, 0.03) 4.11%,
    rgba(0, 0, 0, 0.9) 117.31%
  );
  background-clip: text;
`

const demo_name = 'Xori octacat'
const demo_team = 'DSC NITR'
const demo_num = 510000
const demo_img_url =
  'https://res.cloudinary.com/djl2ulktr/image/upload/v1706380517/ejsd4w2xsqhowanwxjvz.png'

const demo_lightBg = false

export const InnerTicket = ({
  user_name = demo_name,
  team_name = demo_team,
  ticket_num = demo_num,
  ticket_img_url = demo_img_url,
  lightBg = demo_lightBg
}) => {
  return (
    <>
      <TicketImage src={ticket_img_url} width={100} height={100} alt="green ticket" />
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

'use client'

import { database } from '@/firebase/firebase'
import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import { GridCont, GridLines, PreviewBg, PreviewCont, TicketCompontent } from '../ticket.styles'
import InnerTicket from '@/components/Ticket/ticketComp'

interface TicketPageProps {
  params: {
    slug: string
  }
}

export default function TicketPage({ params }: TicketPageProps) {
  const [ticket, setTicket] = useState({
    name: '',
    teamName: '',
    email: '',
    bgcolor: '',
    ticketId: ''
  })

  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']

  const rows = 1
  const columns = 16

  useEffect(() => {
    const ticketRef = ref(database, `tickets/${params.slug}`)
    onValue(ticketRef, (snapshot) => {
      const data = snapshot.val()
      setTicket(Object.values(data)[0] as any)
    })
  }, [params.slug])

  return (
    <div>
      <PreviewBg>
        <PreviewCont>
          <GridCont>
            {Array.from({ length: rows * columns }, (_, index) => (
              <GridLines key={index}></GridLines>
            ))}
            <TicketCompontent>
              <InnerTicket
                user_name={ticket.name}
                team_name={ticket.teamName}
                ticket_num={ticket.ticketId || 550000}
                ticket_img={ticket.bgcolor || '#206EA6'}
                lightBg={colors.indexOf(ticket.bgcolor) === 1 ? true : false}
              />
            </TicketCompontent>
          </GridCont>
        </PreviewCont>
      </PreviewBg>
    </div>
  )
}

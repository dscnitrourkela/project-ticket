/* eslint-disable max-len */
import { ImageResponse } from '@vercel/og'
import { TicketPageProps } from './page'
import { getTicketData } from '@/firebase/getTicket'

import InnerTicket from '@/components/Ticket/ticketComp'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

async function fetchTicketData(slug: string) {
  return await getTicketData(slug)
}

async function TicketImageComponent({ params }: TicketPageProps): Promise<ImageResponse> {
  const ticket = await fetchTicketData(params.slug)
  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']
  const { name, bgcolor, teamName } = ticket

  return new ImageResponse(
    (
      <InnerTicket
        user_name={name || 'Your Name'}
        team_name={teamName || 'Your Team Name'}
        ticket_img={bgcolor || '#206EA6'}
        lightBg={colors.indexOf(bgcolor) === 1 ? true : false}
        modalView={false}
      />
    ),
    { ...size }
  )
}

export default TicketImageComponent

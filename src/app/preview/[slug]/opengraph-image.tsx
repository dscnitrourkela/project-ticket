/* eslint-disable max-len */
import { ImageResponse } from '@vercel/og'
import { TicketPageProps } from './page'
import { ticketUrls } from '@/config/TicketBackgrounds'
import { getTicketData } from '@/firebase/getTicket'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

const ticketImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px'
}

const ticketTextStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0vw',
  color: 'white',
  width: '100%',
  height: '100%'
}

const namesStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: '160px',
  left: '130px',
  color: 'white',
  width: '40%',
  maxHeight: '70%',
  padding: '1vw'
}

const userNameStyle = {
  color: '#a9b7b9',
  textShadow: '0px 10px 4px rgba(0, 0, 0, 1)',
  fontSize: '80px'
}

const teamNameStyle = {
  color: '#a9b7b9',
  textShadow: '0px 10px 4px rgba(0, 0, 0, 1)',
  fontSize: '60px'
}

const ticketNumStyle = {
  transform: 'rotate(-90deg)',
  position: 'absolute',
  right: '30px',
  bottom: '50%',
  color: '#a9b7b9',
  padding: '2vw 0vw',
  fontFamily: 'Montserrat',
  fontSize: '2vw',
  fontWeight: '500'
}

export default async function Image({ params }: TicketPageProps): Promise<ImageResponse> {
  const ticket = await getTicketData(params.slug)
  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']
  const { name, bgcolor, teamName, ticketId } = ticket

  console.log('ticket', bgcolor)

  return new ImageResponse(
    (
      <div
        style={
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'black'
          } as React.CSSProperties
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ticketUrls[colors.indexOf(bgcolor)]}
          style={ticketImageStyle}
          alt="Ticket image"
        />
        <div style={{ ...ticketTextStyle } as React.CSSProperties}>
          <div style={{ ...namesStyle } as React.CSSProperties}>
            <h1 style={userNameStyle}>{name || ''}</h1>
            <h2 style={{ ...teamNameStyle } as React.CSSProperties}>{teamName || ''}</h2>
          </div>
          <span style={{ ...ticketNumStyle } as React.CSSProperties}>{ticketId || '550000'}</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}

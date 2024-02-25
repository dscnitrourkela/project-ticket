import {
  GridCont,
  GridLines,
  PreviewBg,
  PreviewCont,
  TicketCompontent
} from '../../myticket/ticket.styles'
import InnerTicket from '@/components/Ticket/ticketComp'
import { PreviewTicketContainer } from './styles'
import '../../../styles/globals.css'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getTicketData } from '@/firebase/getTicket'

export interface TicketPageProps {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: TicketPageProps): Promise<Metadata> => {
  const ticket = await getTicketData(params.slug)

  return {
    title: `${ticket.name}'s Ticket | HackNITR 5.0`,
    description: `Ticket for ${ticket.name} from ${ticket.teamName} for HackNITR 5.0`,
    icons: {
      icon: '/favicon.ico'
    },
    applicationName: 'HackNITR 5.0',
    openGraph: {
      title: `${ticket.name}'s Ticket | HackNITR 5.0`,
      description: `Ticket for ${ticket.name} from ${ticket.teamName} for HackNITR 5.0`,
      siteName: 'Ticket | HackNITR 5.0',
      type: 'website'
    }
  }
}

export default async function TicketPage({ params }: TicketPageProps) {
  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']

  const rows = 1
  const columns = 16

  const ticket = await getTicketData(params.slug)

  if (!ticket) return notFound()

  return (
    <PreviewTicketContainer>
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
                ticket_img={ticket.bgcolor || '#206EA6'}
                lightBg={colors.indexOf(ticket.bgcolor) === 1 ? true : false}
                modalView={true}
              />
            </TicketCompontent>
          </GridCont>
        </PreviewCont>
      </PreviewBg>
    </PreviewTicketContainer>
  )
}

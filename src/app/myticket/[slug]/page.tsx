import { database } from '@/firebase/firebase'
import { get, ref } from 'firebase/database'
import { GridCont, GridLines, PreviewBg, PreviewCont, TicketCompontent } from '../ticket.styles'
import InnerTicket from '@/components/Ticket/ticketComp'
import { PreviewTicketContainer } from './styles'
import '../../../styles/globals.css'
import { notFound } from 'next/navigation'

interface TicketPageProps {
  params: {
    slug: string
  }
}

export default async function TicketPage({ params }: TicketPageProps) {
  // const [ticket, setTicket] = useState({
  //   name: '',
  //   teamName: '',
  //   email: '',
  //   bgcolor: '',
  //   ticketId: ''
  // })

  const colors = ['#206EA6', '#BBD3D9', '#4C1077', '#FECF29', '#14F195']

  const rows = 1
  const columns = 16

  const ticketRef = ref(database, `tickets/${params.slug}`)
  const snapshot = await get(ticketRef)
  const value = await snapshot.val()
  const ticket = Object.values(value)[0] as {
    name: string
    teamName: string
    email: string
    bgcolor: string
    ticketId: string
  }

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
                ticket_num={ticket.ticketId || 550000}
                ticket_img={ticket.bgcolor || '#206EA6'}
                lightBg={colors.indexOf(ticket.bgcolor) === 1 ? true : false}
              />
            </TicketCompontent>
          </GridCont>
        </PreviewCont>
      </PreviewBg>
    </PreviewTicketContainer>
  )
}

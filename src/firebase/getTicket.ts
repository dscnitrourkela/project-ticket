import { database } from '@/firebase/firebase'
import { get, ref } from 'firebase/database'

export async function getTicketData(slug: string) {
  const ticketRef = ref(database, `tickets/${slug}`)
  const snapshot = await get(ticketRef)
  const value = await snapshot.val()
  const ticket = Object.values(value)[0] as {
    name: string
    teamName: string
    email: string
    bgcolor: string
    ticketId: string
  }

  return ticket
}

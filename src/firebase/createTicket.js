import { push, ref } from 'firebase/database'

import { database } from '../firebase/firebase.js'

export const createThis = (name, teamName, email) => {
  const ticketRef = ref(database, 'tickets')

  push(ticketRef, {
    name,
    teamName,
    email
  })
}

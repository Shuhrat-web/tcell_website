import UssdCommandsPage from '@/components/TcellWebsite/PrivateIndividuals/UssdCommands/UssdCommandsPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - Ussd commands',
  description: 'Tcell - Ussd commands',
}

const UssdCommands = () => {
  return (
    <UssdCommandsPage />
  )
}

export default UssdCommands
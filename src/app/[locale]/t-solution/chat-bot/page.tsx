import ChatBotPage from '@/components/TcellWebsite/TSolution/ChatBotPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - Chat bot',
  description: 'Tcell - Chat bot',
}

const Chatbot = () => {
  return (
    <ChatBotPage/>
  )
}

export default Chatbot
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/Header'
import { ReduxProvider } from '@/redux/features/provider'
import Sidenav from './components/Sidenav'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        
        <Header />
        <div className='flex'>
        <Sidenav />
        {children}
        </div>
        </ReduxProvider>
        </body>
    </html>
  )
}

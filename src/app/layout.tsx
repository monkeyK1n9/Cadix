import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Cadix',
  description: 'Dream once, design everywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

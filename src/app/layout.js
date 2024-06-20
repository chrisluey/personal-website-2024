import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Chris Luey',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}

import { ToasterComponent } from '@/componets/Toast'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs - React - Vercel - Form',
  description: 'This project have the intent to test the new functionalities of Vercel datastorep'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <ToasterComponent />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

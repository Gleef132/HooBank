import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/global.scss'
import Layout from '@/components/layout/Layout'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--poppins', display: 'swap' })

export const metadata: Metadata = {
  title: 'HooBank',
  description: 'Bank about Hoo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}><Layout>{children}</Layout></body>
    </html>
  )
}

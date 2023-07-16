import './globals.css'
import { Inter } from 'next/font/google'
import  AppContext  from '@/context/data'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rick and Morty | Lista de episodios',
  description: 'Lista de episódios de Rick e Morty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContext>
          <Header />
          {children}
        </AppContext>
      </body>
    </html>
  )
}

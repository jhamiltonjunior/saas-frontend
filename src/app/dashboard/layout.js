import { Inter } from 'next/font/google'
import Header from '../components/header/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Veja',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {<Header />}
        {children}
      </body>
    </html>
  )
}

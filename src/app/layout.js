import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Registre-se ou Entre no GimFit',
  description: 'Gerenciamento de academias e treinos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './css/bootstrap.css'
import './css/responsive.css'
import './css/page.module.css'
import './css/style.css'
import './css/style.scss'
import './css/style.css'
import './css/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unicorn Rust',
  description: 'Forge legendary tales with us on Unicorn Rust – where survival meets magic, and every player is part of the Rust family.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

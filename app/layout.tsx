import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Abhinav Portfolio',
  description: 'Crafted with Next.js 15 + Tailwind + Theme Toggle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

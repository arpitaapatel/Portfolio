import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arpita Patel - Software Developer & AI/ML Enthusiast',
  description: 'Portfolio of Arpita Patel, a passionate Software Developer and AI/ML Enthusiast. Explore my projects, skills, and experience in modern web development.',
  keywords: ['Software Developer', 'AI/ML', 'React', 'Next.js', 'Python', 'JavaScript', 'Portfolio'],
  authors: [{ name: 'Arpita Patel' }],
  creator: 'Arpita Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arpita-portfolio.vercel.app',
    title: 'Arpita Patel - Software Developer & AI/ML Enthusiast',
    description: 'Portfolio of Arpita, a passionate Software Developer and AI/ML Enthusiast. Explore my projects, skills, and experience in modern web development.',
    siteName: 'Arpita Patel Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arpita Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arpita Patel- Software Developer & AI/ML Enthusiast',
    description: 'Portfolio of Arpita Patel, a passionate Software Developer and AI/ML Enthusiast.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Pavan Eleti | Data Scientist Portfolio',
  description:
    'Portfolio website of Pavan Eleti, a Data Science graduate specializing in machine learning, NLP, and time series forecasting.',
  keywords: [
    'Pavan Eleti',
    'Data Scientist',
    'Machine Learning Portfolio',
    'Python Developer',
    'Hyderabad',
    'Amazon',
  ],
  authors: [{ name: 'Pavan Eleti', url: 'https://pavaneleti.me' }],
  creator: 'Pavan Eleti',
  publisher: 'Pavan Eleti',
  metadataBase: new URL('https://pavaneleti.me'),
  openGraph: {
    title: 'Pavan Eleti | Data Scientist Portfolio',
    description: 'Explore projects and skills of Pavan Eleti in ML, NLP, and AI.',
    url: 'https://pavaneleti.me',
    siteName: 'Pavan Eleti Portfolio',
    images: [
      {
        url: '/images/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Pavan Eleti Portfolio Screenshot',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavan Eleti | Data Scientist Portfolio',
    description: 'Showcasing projects and skills of a data-driven ML enthusiast.',
    images: ['/images/og-preview.jpg'],
    creator: '@yourtwitterhandle',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

        {/* JSON-LD for SEO */}
        <Script id="jsonld-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pavan Eleti",
            jobTitle: "Data Scientist",
            url: "https://pavaneleti.me",
            sameAs: [
              "https://github.com/PAVANKUMARELETI",
              "https://linkedin.com/in/pavan-kumar-eleti-800a48305"
            ]
          })}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-black dark:text-white transition-colors`}
      >
        <main className="min-h-screen">
          {children}
          <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
          <Analytics />
        </main>
      </body>
    </html>
  )
}

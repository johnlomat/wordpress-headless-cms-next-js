import { Metadata } from 'next'

export const robots: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nositelinkssearchbox: true,
      nosnippet: true,
      notranslate: true,
    },
  },
}

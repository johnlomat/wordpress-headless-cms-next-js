import type { Metadata } from 'next'
import Link from 'next/link'
import { robots } from '@/app/robots-metadata'

export const metadata: Metadata = {
  title: 'WordPress Headless CMS',
  description:
    'A project utilizing WordPress as a headless CMS with WPGraphQL, ACF, and Rank Math SEO',
  ...robots,
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-6 text-center shadow-md">
        <h1 className="mb-4 text-3xl font-bold">Welcome to My Project</h1>
        <p className="mb-6 text-lg">
          This project utilizes WordPress as a headless CMS, leveraging WPGraphQL to query data
          efficiently. Advanced Custom Fields (ACF) are employed to create custom content types,
          enhancing the flexibility and customization of the content. Rank Math SEO is integrated to
          optimize search engine visibility, ensuring the content is easily discoverable. The
          frontend is built using Next.js, providing a robust and scalable framework for delivering
          a dynamic and responsive user experience. This combination of technologies ensures a
          powerful and flexible setup, capable of handling diverse content requirements and
          delivering optimal performance.
        </p>
        <Link
          href="/rolex-watches"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Go to Next Page
        </Link>
      </div>
    </main>
  )
}

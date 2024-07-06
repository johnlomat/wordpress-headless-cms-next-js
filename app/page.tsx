import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WordPress Headless CMS",
  description:
    "A project utilizing WordPress as a headless CMS with WPGraphQL, ACF, and Rank Math SEO",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-6 text-center shadow-md">
        <h1 className="mb-4 text-3xl font-bold">Welcome to My Project</h1>
        <p className="mb-6 text-lg">
          This project utilizes WordPress as a headless CMS with WPGraphQL to
          query data, Advanced Custom Fields (ACF) for custom content types, and
          Rank Math SEO for optimizing search engine visibility.
        </p>
        <Link
          href="/rolex-watches"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Go to Next Page
        </Link>
      </div>
    </main>
  );
}

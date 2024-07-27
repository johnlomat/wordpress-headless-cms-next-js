import { WPGRAPHQL_API } from '@/utils/constants'

export const getImage = async (id: number) => {
  try {
    const response = await fetch(WPGRAPHQL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query Image($id: ID!) {
            mediaItemBy(mediaItemId: $id) {
              mediaDetails {
                width
                height
              }
              sourceUrl
              altText
            }
          }
        `,
        variables: {
          id: id,
        },
      }),
      next: {
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

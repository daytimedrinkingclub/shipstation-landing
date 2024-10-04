import { notFound } from 'next/navigation'
import { headers } from 'next/headers'

export default async function SitePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  console.log('Slug:', slug)

  if (!slug || slug === '[slug]') {
    console.error('Invalid slug:', slug)
    return notFound()
  }

  const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/shipstation-websites/websites`
  const url = `${baseUrl}/${slug}/index.html`
  console.log(url)

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch HTML')
    }
    const htmlContent = await response.text()

    // Set custom headers
    const headersList = headers()
    headersList.set('X-Custom-Page', 'true')
    headersList.set('Content-Type', 'text/html')

    // Return the HTML content directly
    return (
      <html dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
  } catch (error) {
    console.error('Error:', error)
    return notFound()
  }
}

export const dynamic = 'force-dynamic'
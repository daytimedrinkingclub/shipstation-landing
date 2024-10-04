import { notFound } from 'next/navigation'
import { use } from 'react'

async function fetchHtml(slug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/shipstation-websites/websites`
  const url = `${baseUrl}/${slug}/index.html`
  console.log(url)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch HTML')
  }
  return response.text()
}

export default function SitePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  console.log('Slug:', slug)

  if (!slug || slug === '[slug]') {
    console.error('Invalid slug:', slug)
    return notFound()
  }

  const htmlContent = use(fetchHtml(slug))

  return (
    <html dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}

export const dynamic = 'force-dynamic'
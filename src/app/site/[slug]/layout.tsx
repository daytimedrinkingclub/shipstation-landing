import { headers } from 'next/headers'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const isCustomPage = headersList.get('X-Custom-Page')

  if (isCustomPage) {
    return children
  }

  // Fallback layout for non-custom pages (if any)
  return <>{children}</>
}

export const dynamic = 'force-dynamic'
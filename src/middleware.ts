import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const customPageHeader = request.headers.get('X-Custom-Page')
  
  if (customPageHeader === 'true') {
    // For custom pages, return the response as-is without any Next.js processing
    return NextResponse.next()
  }

  // For all other routes, allow Next.js to handle the request normally
  return NextResponse.next()
}

export const config = {
  matcher: '/site/:path*',
}
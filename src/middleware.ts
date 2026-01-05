import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Get the path user is on
  const path = request.nextUrl.pathname;

  // 2. Define public paths
  const isPublicPath = path === '/login' || path === '/signup' || path === '/';

  // 3. Get the token from cookies (we will set this next)
  const token = request.cookies.get('auth_token')?.value || '';

  // 4. Redirect logic
  // If trying to access dashboard without a token -> Redirect to Login
  if (!isPublicPath && !token && path.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // If on Login/Signup pages BUT already has token -> Redirect to Dashboard
  if (isPublicPath && token && (path === '/login' || path === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }
}

// 5. Config: Match only specific paths
export const config = {
  matcher: [
    '/dashboard/:path*', // Matches /dashboard and /dashboard/settings
    '/login',
    '/signup'
  ]
}
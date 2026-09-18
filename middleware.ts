import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Check if it's the login page
  const isAuthPage = path === '/admin/login';
  
  // Check if the user has an active session cookie (set during login)
  const hasSession = request.cookies.has('admin_session');

  // Condition 1: Agar user already logged in hai aur wo /admin/login kholne ki koshish kare
  // -> Redirect to /admin dashboard
  if (isAuthPage && hasSession) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Condition 2: Agar user bina login ke /admin ya uske kisi route par jane ki koshish kare
  // -> Redirect to /admin/login
  if (path.startsWith('/admin') && !isAuthPage && !hasSession) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Agar dono conditions pass ho jayein, toh request aage badhne do
  return NextResponse.next();
}

// Ye middleware sirf /admin aur uske sub-routes par chalega, baaki public website fast rahegi
export const config = {
  matcher: ['/admin/:path*'],
};
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export { auth as middleware } from './auth'

export function securityMiddleware(request: NextRequest) {
  const cspHeader = "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"



  const response = NextResponse.next(request);

  // Set Content-Security-Policy header
  response.headers.set('Content-Security-Policy', cspHeader);


  // Set X-Frame-Options header to deny framing
  response.headers.set('X-Frame-Options', 'DENY');

  // Set X-Content-Type-Options header to prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Set Referrer-Policy header to control referrer information
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Set Permissions-Policy header to control various permissions
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  return response;
}

export default securityMiddleware;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|roadmap|about|home).*)']
}




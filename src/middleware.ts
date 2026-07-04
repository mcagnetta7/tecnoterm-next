import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Reindirizza pagine non disponibili
  if (request.nextUrl.pathname === '/contatti' || request.nextUrl.pathname === '/recensioni') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ⚠️ CAMBIA QUESTO A true PER ATTIVARE MANUTENZIONE
  const maintenanceMode = false ;

  if (maintenanceMode) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
}

export const config = {
  matcher: ['/((?!maintenance|_next|api|static).*)'],
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // ⚠️ CAMBIA QUESTO A true PER ATTIVARE MANUTENZIONE
  const maintenanceMode = true;

  if (maintenanceMode) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
}

export const config = {
  matcher: ['/((?!maintenance|_next|api|static).*)'],
};

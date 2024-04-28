import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get('token')?.value;
  if (!token) return NextResponse.redirect(new URL('/login', req.url));

  NextResponse.next();
};

export const config = {
  matcher: [
    '/home',
    '/new-analysis',
    '/my-account',
    '/settings',
    '/historic/:id*',
  ],
};

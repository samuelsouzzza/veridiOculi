import { NextRequest, NextResponse } from 'next/server';
import { getToken } from './app/actions/getToken';

export const middleware = async (req: NextRequest) => {
  if (!(await getToken()))
    return NextResponse.redirect(new URL('/login', req.url));

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

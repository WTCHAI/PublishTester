import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    // User is logged in and trying to access login page or home page, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Allow access to other pages for both logged in and non-logged in users
  return NextResponse.next();
};


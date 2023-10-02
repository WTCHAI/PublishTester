import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isLoggedIn = false ; // Replace with your authentication logic to determine if the user is logged in

  if (!isLoggedIn && (pathname === '/dashboard' || pathname === '/search/:path')) {
    // User is not logged in and trying to access dashboard or search page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isLoggedIn && (pathname === '/login' || pathname === '/')) {
    // User is logged in and trying to access login page or home page, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Allow access to other pages for both logged in and non-logged in users
  return NextResponse.next();
};


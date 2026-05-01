import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const isLoggedIn = !!session;
  const pathname = request.nextUrl.pathname;

  // /products/1, /products/2 etc. — details page protect
  // কিন্তু /products (all products page) open
  const isProductDetailsPage = /^\/products\/\w+/.test(pathname);

  const protectedRoutes = ["/profile"];

  if (
    !isLoggedIn &&
    (isProductDetailsPage ||
      protectedRoutes.some((route) => pathname.startsWith(route)))
  ) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // logged in user কে /login এ যেতে দেবে না
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path+", "/profile", "/login"],
};

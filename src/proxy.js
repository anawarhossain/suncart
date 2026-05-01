import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session, "session");

  const isLoggedIn = !!session;
  const pathname = request.nextUrl.pathname;

  // protect routes
  if (!isLoggedIn && pathname.startsWith("/products")) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // prevent logged user from login page
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/profile", "/login"],
};
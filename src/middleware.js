import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const token = request.cookies.get("token") || null;
  const url = request.nextUrl;

  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && url.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard",
    "/dashboard/users",
    "/dashboard/products",
  ],
};

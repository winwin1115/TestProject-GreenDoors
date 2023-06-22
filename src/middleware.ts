/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { protectedRoutes } from "./router/routes";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;
  if (protectedRoutes.includes(request.nextUrl.pathname) && !currentUser) {
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/signup", request.url));
    response.cookies.delete("currentUser");
    return response;
  }
}

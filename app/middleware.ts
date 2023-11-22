import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Middleware executed...");
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }

  //return NextResponse.redirect(new URL("/home", request.url));
  return NextResponse.json(
    { success: false, message: "authentication failed" },
    { status: 401 }
  );
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "*",
};

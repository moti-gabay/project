import { safeNext } from "@/lib/redircts";
import { NextRequest, NextResponse } from "next/server";




export function GET(request: NextRequest) {
    const url = new URL("/login", request.url);

    url.searchParams.set("next", safeNext(request.nextUrl.searchParams.get("next")));

    url.searchParams.set("expired", "1");

    const response = NextResponse.redirect(url);
    // response.cookies.delete('token');
    return response;

}
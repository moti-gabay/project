import { NextRequest, NextResponse } from "next/server";

const PROTECTED = ["/tasks"];

const AUTH_PAGES = ["/login", "/register"];


function startWithAny(path: string, prefixes: string[]) {
    prefixes.some((p) => path === p || p.startsWith(`${p}/`));
}

export function proxy(request: NextRequest) {

    const { pathname, search } = request.nextUrl;

    const hasToken = request.cookies.get("token");

    if (!hasToken && startWithAny(pathname, PROTECTED)) {
        const url = new URL("/login", request.url);

        url.searchParams.set("next", pathname + search);

        return NextResponse.redirect(url);
    }

    if (hasToken && AUTH_PAGES.includes(pathname)) {
        return NextResponse.redirect(new URL("/tasks", request.url))
    }

    return NextResponse.next();
    

}
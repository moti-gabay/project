
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LogoutButton from "@/components/forms/LogoutButton";


export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">

        <nav style={{ background: `var(--primery-color)`, color: "white" }} className="algin-center bold flex gap-4 border-b p-4 w-full ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tasks">Tasks</Link>
          <Link href="/addTask">Add Task</Link>
          <LogoutButton></LogoutButton>
        </nav>

        {children}
      </body>
    </html>
  );
}

"use client"
import { logout } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React from 'react'

function LogoutButton() {
    const router = useRouter();
    async function OnLogout() {
        try {
            await logout()
            router.refresh()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={OnLogout}>LogoutButton</button>
    )
}

export default LogoutButton
import { cookies } from "next/headers";

const API_URL = process.env.API_URL || "http://localhost:3001";

async function apiFetch(path: string) :Promise<Response>{
    const cookieStore = await cookies();
    return fetch(`${API_URL}/api/${path}`,{
        headers:{Cookie:cookieStore.toString()}
    })
}





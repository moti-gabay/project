import { LoginValues, RegisterValues, User } from "@/types/types";
import { api } from "./api";



export function login(values: LoginValues) {
    return api<{ user: User }>("/auth/login", { method: "POST", body: JSON.stringify(values) })

}

export function registerReq(values: RegisterValues) {
    return api<{ user: User }>("/auth/register", { method: "POST", body: JSON.stringify(values) })

}

export function logout() {
    return api<void>("/auth/logout", { method: "POST" })

}
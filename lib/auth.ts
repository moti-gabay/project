import { User } from "../types/types";
import { api } from "./api";
import { LoginValues, RegisterValues } from "./types";



export function login(values: LoginValues) {
    return api<{ user: User }>("/auth/login", { method: "POST", body: JSON.stringify(values) })

}

export function registerReq(values: RegisterValues) {
    return api<{ user: User }>("/auth/register", { method: "POST", body: JSON.stringify(values) })

}

export function logout() {
    return api<void>("/auth/logout", { method: "POST" })

}
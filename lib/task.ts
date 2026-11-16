import { NewTask, Task } from "@/types/types";
import { api } from "./api";



export async function getTasks() {
    return await api<Task[]>(`/tasks`, { method: "GET", credentials: "include" })
}

export async function addTask(task: NewTask) {
    return await api<Task>(`/tasks`, { method: "POST", body: JSON.stringify(task), credentials: "include" })
}

export async function deleteTask(id: string) {
    return await api(`/tasks/${id}`, { method: "DELETE", credentials: "include" })
}


export class ApiError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message)
        this.status = status
    }
}

function errorText(body: unknown): string {
    if (typeof body === "object" && body !== null && "error" in body && typeof body.error === "string") {
        return body.error;
    }
    return "Request faild"
}

const API_URL = "http://localhost:3001"

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
    let res: Response;
    try {
        res = await fetch(`${API_URL}/api${path}`, {
            ...options,
            credentials: "include",
            headers: { 'Content-Type': "application/json", ...options.headers }
        });
    } catch (error) {
        throw new ApiError(0, "Nekork Error")
    }

    if (res.status === 204) return undefined as T;
    const body: unknown = await res.json().catch(() => null);
    if (!res.ok) throw new ApiError(res.status, errorText(body));
    return body as T

}



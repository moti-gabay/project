
export const HOME_AFTER_LOGIN = "/tasks"

export function safeNext(next: string | null): string {
    return next && /^\/(?![/\\])/.test(next) ? next : HOME_AFTER_LOGIN;

}
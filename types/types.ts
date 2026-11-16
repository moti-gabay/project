export type User = {
    _id?: string;
    name: string;
    email: string;
    password: string;
}

export type RegisterValues = Pick<User, "name" | "email" | "password">;
export type LoginValues = Omit<RegisterValues, "name">;

export type Task = {
    _id?: string;
    title: string;
    done: boolean;
    userId: string
}

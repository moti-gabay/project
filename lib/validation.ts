import { UserLoginType } from "@/types/types";

export const logInValidate = (values: UserLoginType) => {
    const regex = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;"
    const errors = { email: "", password: "" }
    if (!values.email.includes("@")) {
        errors.email = "email is must includes @"
    }
    if (values.password?.length < 8) {
        errors.password = "password must be long then 7 chars"
    }
    return errors;

}
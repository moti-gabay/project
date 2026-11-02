'use client'

import { logInValidate } from "@/lib/validation"
import Filed from "./Filed"
import { error } from "console"
import { useState } from "react"
import { UserLoginType } from "@/types/types"




function LoginForm() {
    const [errors, setErrors] = useState<UserLoginType>()

    function handelSubmit(e: any) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const email = String(formData.get("email") ?? "").trim();
        const password = String(formData.get("password") ?? "").trim();

        const error = logInValidate({ email, password });
        
        if (errors) {
            setErrors(error)
        }
        console.log({ email, password, error: error.email })

    }


    return (
        <div>

            <form onSubmit={handelSubmit} >


                <Filed error={errors?.email} label="Email" name="email" style="w-full rounded-lg border px-3 py-2" />

                <Filed label="Password" name="password" style="w-full rounded-lg border px-3 py-2" />

                <button className="border border-black-300 rounded-lg bg-green-400 w-50 m-2 p-2 mx-auto" type="submit">Sent</button>

            </form>
        </div>
    )
}

export default LoginForm
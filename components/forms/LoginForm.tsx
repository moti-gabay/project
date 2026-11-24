'use client'

import Filed from "./Filed"
import Link from "next/link";


import { useForm } from "react-hook-form";
import { LoginValues } from "@/types/types"
import { login } from "@/lib/auth"
import { useRouter } from 'next/navigation'
import SubmitButton from "./SubmitButton"

function LoginForm() {
    const router = useRouter();
    const { register, handleSubmit, resetField } = useForm<LoginValues>({
        defaultValues: { email: "", password: "" }
    })

    async function onSubmit(values: LoginValues) {
        console.log(values);
        try {
            const res = await login(values);

            console.log(res);

            router.push('/tasks')
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <h2 className="mx-auto w-[20%] font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Filed {...register('email')} label="Email" name="email" style="w-full rounded-lg border px-3 py-2" />
                <Filed type="password" {...register('password')} label="Password" name="password" style="w-full rounded-lg border px-3 py-2" />
                <SubmitButton>Send</SubmitButton>
            </form>

            <Link href={"/register"}>to Register</Link>
        </div>
    )
}

export default LoginForm
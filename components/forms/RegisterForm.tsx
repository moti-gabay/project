"use client";

import React, { useState } from 'react'
import Filed from './Filed';
import { useForm } from "react-hook-form"
import { LoginValues, RegisterValues } from '@/lib/types';
import SubmitButton from './SubmitButton';
import Link from 'next/link';
import { registerReq} from "../../lib/auth"

function RegisterForm() {

    const { register, handleSubmit,reset } = useForm<RegisterValues>({
        defaultValues: { name: "", email: "", password: "" }
    })

    const onSubmit = async (valuse: RegisterValues) => {
        console.log(valuse);
        const res = await registerReq(valuse)
        console.log(res);
        reset()
    }
    return (
        <div className='mx-auto max-w-sm space-y-4 m-3 p-3   rounded-lg'>
            <h1 className='mx-auto'>Register Form</h1>

            <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>

                <Filed {...register('name')}  label='Name' name='name' style='w-full rounded-lg border px-3 py-2' />

                <Filed {...register('email')}  label='Email' name='email' style='w-full rounded-lg border px-3 py-2' />

                <Filed {...register("password")} type='password' label='Password' name='password' style='w-full rounded-lg border px-3 py-2' />


                <SubmitButton>send</SubmitButton>

                <Link href={"/login"}>to Login </Link>

            </form>
        </div>
    )
}

export default RegisterForm;
"use client";

import React, { useState } from 'react'
import Filed from './Filed';
import { useForm } from "react-hook-form"
import { RegisterValues } from '@/types/types';
import SubmitButton from './SubmitButton';
import Link from 'next/link';
import { registerReq } from "../../lib/auth"

export const filedStyle = "w-full rounded-lg border px-3 py-2"
function RegisterForm() {


    const { register, handleSubmit, reset } = useForm<RegisterValues>({
        defaultValues: { name: "", email: "", password: "" }
    })

    const onSubmit = async (values: RegisterValues) => {
        console.log(values);
        const res = await registerReq(values)
        console.log(res);
        reset()
    }
    return (
        <div className='mx-auto max-w-sm space-y-4 m-3   rounded-lg'>
            <h1 className='mx-auto w-[20%] font-bold'>Register</h1>

            <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>

                <Filed {...register('name')} label='Name' name='name' style={filedStyle} />

                <Filed {...register('email')} label='Email' name='email' style={filedStyle} />

                <Filed {...register("password")} type='password' label='Password' name='password' style={filedStyle} />


                <SubmitButton>send</SubmitButton>

                <Link href={"/login"}>to Login </Link>

            </form>
        </div>
    )
}

export default RegisterForm;
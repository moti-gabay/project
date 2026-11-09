"use client";

import React, { useState } from 'react'
import Filed from './Filed';
import { useForm } from "react-hook-form"
import { LoginValues } from '@/lib/types';
import SubmitButton from './SubmitButton';

function Form() {
    const { register, handleSubmit } = useForm<LoginValues>({
        defaultValues: { email: "", password: "" }
    })

    const [sent, setSent] = useState({})
    const [error, setError] = useState("");



    const onSubmit = (valuse: LoginValues) => {
        console.log(valuse);

    }
    return (
        <div className='mx-auto max-w-sm space-y-4 m-8 p-8  border border-black rounded-lg'>
            <h1 className='mx-auto'>Login</h1>
            <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>

                <Filed {...register('email')} error={error} label='Email' name='email' style='w-full rounded-lg border px-3 py-2' />

                <Filed {...register("password")} type='password' label='Password' name='password' style='w-full rounded-lg border px-3 py-2' />


                <SubmitButton>send</SubmitButton>

            </form>
            {sent && <p>{JSON.stringify(sent)}</p>}
        </div>
    )
}

export default Form;
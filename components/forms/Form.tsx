"use client";

import React, { useState } from 'react'
import Filed from './Filed';

function Form() {

    const [sent, setSent] = useState({})
    const [error, setError] = useState("");



    const handleSubmit = (e: any) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const email = String(formData.get("email") ?? "").trim();
        if (!email.includes('@')) {
            setError("Email is invalide!")
        }

        const password = String(formData.get("password") ?? "").trim();
        setSent({ email, password })
        console.log({ email, password });


    }
    return (
        <div className='mx-auto max-w-sm space-y-4 m-8 p-8  border border-black rounded-lg'>
            <h1 className='mx-auto'>Form</h1>
            <form className='space-y-3' onSubmit={handleSubmit}>
               
                <Filed error={error} label='Email' name='email' style='w-full rounded-lg border px-3 py-2' />

                <Filed  type='password' label='Password' name='password' style='w-full rounded-lg border px-3 py-2' />
                            
              

                <button className='border border-black rounded-lg w-full bg-green-300' type='submit'>send</button>
            </form>
            {sent && <p>{JSON.stringify(sent)}</p>}
        </div>
    )
}

export default Form;
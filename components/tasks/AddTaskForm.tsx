'use client';
import { NewTask } from '@/types/types';
import React from 'react'
import { useForm } from "react-hook-form";
import Filed from '../forms/Filed';
import SubmitButton from '../forms/SubmitButton';
import { filedStyle } from '../forms/RegisterForm';
import { addTask } from '@/lib/task';





function AddTaskForm() {

    const { register, handleSubmit, reset } = useForm<NewTask>({
        defaultValues: {
            title: ""
        }
    })

    const onSubmit = async (values: NewTask) => {
        try {
            const res = await addTask(values);
            console.log(res);
            
            reset()
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='mx-auto w-[20%]'>Add New Task</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Filed {...register("title")} style={filedStyle} name="title" label='title' />
                <SubmitButton >Add Task</SubmitButton>
            </form>
        </div>
    )
}

export default AddTaskForm
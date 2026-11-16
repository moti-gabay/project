'use client';
import { Task } from '@/types/types';
import React from 'react'
import { useForm } from "react-hook-form";
import Filed from '../forms/Filed';
import SubmitButton from '../forms/SubmitButton';
import { filedStyle } from '../forms/RegisterForm';
import { addTask } from '@/lib/task';
import { log } from 'console';





function AddTaskForm() {

    const { register, handleSubmit, reset } = useForm<Task>({
        defaultValues: {
            title: ""
        }
    })

    const onSunmit = async (values: Task) => {
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
            <form onSubmit={handleSubmit(onSunmit)}>

                <Filed {...register("title")} style={filedStyle} name="title" label='title' />
                <SubmitButton >Add Task</SubmitButton>
            </form>
        </div>
    )
}

export default AddTaskForm
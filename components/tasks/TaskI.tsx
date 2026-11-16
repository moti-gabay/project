'use client';
import React from 'react'

import { Task } from '@/types/types';
import { deleteTask } from '@/lib/task';

function TaskItem({ task }: Task) {


    const { title, done, _id } = task;

    const onDelete = async (id: string) => {
        try {
            const res = await deleteTask(id);
            console.log(res);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <li className='m-3 w-full bg-red' > {title}  | <input checked={done} type="checkbox" />  <button className='bg-red border' onClick={() => onDelete(_id)}>DELETE</button></li>
    )
}

export default TaskItem;
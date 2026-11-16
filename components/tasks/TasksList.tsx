'use client'

import { getTasks } from '@/lib/task';
import { Task } from '@/types/types';
import React, { useEffect, useState } from 'react'
import TaskItem from './TaskI';

function TasksList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState("");

    const fetchTasks = async () => {
        try {
            setLoading(true);
            await getTasks().then((res) => {
                setTasks(res)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                console.log(err);

                setErrors(err)
            });


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchTasks()

    }, [])

    if (loading) {
        return (
            <h1>Loading ...</h1>
        )
    }

    if (errors) {
        return (
            <h1>{errors}</h1>
        )
    }

    return (
        <div>
            <h1>
                Tasks List
            </h1>

            <ul>
                {tasks && tasks.map((t: Task) => {
                    return (
                        <div key={t._id}>
                            <TaskItem task={t} />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default TasksList
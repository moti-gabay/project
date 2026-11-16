'use client'

import { getTasks } from '@/lib/task';
import { Task } from '@/types/types';
import { useEffect, useState } from 'react'
import TaskItem from './TaskI';

function TasksList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState("");

    useEffect(() => {
        let ignore = false;
        getTasks()
            .then(res => { if (!ignore) setTasks(res) })
            .catch((err: unknown) => {
                if (!ignore) setErrors(err instanceof Error ? err.message : "Failed to load tasks")
            })
            .finally(() => { if (!ignore) setLoading(false) });
        return () => { ignore = true };
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
                {tasks.map(t => <TaskItem key={t._id} task={t} />)}
            </ul>
        </div>
    )
}

export default TasksList

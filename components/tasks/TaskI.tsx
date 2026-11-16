import { Task } from '@/types/types';

function TaskItem({ task }: { task: Task }) {
    const { title, done } = task;
    return (
        <li className='m-3 w-full'><span>{title} | {done ? "V" : "X"}</span></li>
    )
}

export default TaskItem

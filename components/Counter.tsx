"use client"
import React, { useState } from 'react'
export default function Counter() {
    const [count, setCount] = useState(0);
    const AddCount = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    const minusCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>
                Counter {count}
            </h1>
            <button className="rounded bg-blue-600 px-4 py-2 text-white"
                onClick={AddCount}>+</button>
            <button className="rounded bg-red-600 px-4 py-2 text-white"
                onClick={minusCount}>-</button>
        </div>
    )
}

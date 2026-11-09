import React from 'react'

export default function SubmitButton({ children, onClick, type }: any) {
  return (
    <div>
      <button type={type} onClick={onClick} className='border border-black rounded-lg w-full bg-green-300'>{children}</button>
    </div>
  )
}

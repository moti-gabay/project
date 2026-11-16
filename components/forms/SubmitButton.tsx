import React from 'react'

export default function SubmitButton({ children, onClick, type }: any) {
  return (
    <div>
      <button style={{ background: "var(--primery-color)", color: "white" }} type={type} onClick={onClick} className='border border-black rounded-lg w-full my-3'>{children}</button>
    </div>
  )
}

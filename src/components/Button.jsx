import React from 'react'

export const Button = ({ text, func }) => {
  return (
    <button onClick={func} href="#" className='px-4 mx-auto py-4 rounded border-blue-400 border-solid border-2 bg-slate-950 blueShadow duration-200'><p>{text}</p></button>
  )
}

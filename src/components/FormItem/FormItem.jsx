import { textarea } from '@material-tailwind/react'
import React from 'react'

function FormItem({name, value, onChange, type, spanValue}) {
  return (
    <label htmlFor={name} className='h-30 flex flex-col w-full'>
          <span className='text-2xl font-light'>{spanValue}</span>
          {name === "message" ? (

            <textarea rows="4" cols="50" className='w-full border border-black focus:border-none px-5 text-lg' type={type} id={name} name={name} required value={value} onChange={onChange}/>
          ) : (

          <input className='w-full h-10 border border-black focus:border-none px-5 text-lg' type={type} id={name} name={name} required value={value} onChange={onChange}/>

          )}
        </label>
  )
}

export default FormItem
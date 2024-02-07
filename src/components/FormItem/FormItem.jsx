import React from 'react'

function FormItem({name, value, onChange, type, spanValue}) {
  return (
    <label htmlFor={name} className='h-30 flex flex-col'>
          <span className='text-2xl font-light'>{spanValue}</span>
          <input className='w-96 h-10 bg-blue-200 outline-none focus:border-none px-5 text-lg' type={type} id={name} name={name} required value={value} onChange={onChange}/>
        </label>
  )
}

export default FormItem
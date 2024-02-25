

function FormItem({name, value, onChange, type, spanValue}) {
  
  
  return (
    <label htmlFor={name} className='h-30 flex flex-col w-full focus:text-bold focus:text-teal-600'>
          <span className='md:text-2xl font-light'>{spanValue}</span>
          {name === "message" ? (

            <textarea rows="6" cols="50" draggable={false} className='w-full border-2 border-black pl-2 text-lg' type={type} id={name} name={name} required value={value} onChange={onChange}/>
          ) : (

          <input className={`w-2/3 focus:w-full outline-none focus:border-teal-400 transition-all delay-75 duration-300 h-10 border-b-2 border-black focus:outline-none focus:border-b-2 text-lg pl-2 `} type={type} id={name} name={name} required value={value} onChange={onChange}/>

          )}
        </label>
  )
}

export default FormItem
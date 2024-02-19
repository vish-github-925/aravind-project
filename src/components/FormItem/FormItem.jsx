

function FormItem({name, value, onChange, type, spanValue}) {
  
  
  return (
    <label htmlFor={name} className='h-30 flex flex-col w-full'>
          <span className='text-2xl font-light'>{spanValue}</span>
          {name === "message" ? (

            <textarea rows="6" cols="50" draggable={false} className='w-full border border-black focus:border-none px-5 text-lg' type={type} id={name} name={name} required value={value} onChange={onChange}/>
          ) : (

          <input className={`w-full h-10 border border-black focus:border-none px-5 text-lg `} type={type} id={name} name={name} required value={value} onChange={onChange}/>

          )}
        </label>
  )
}

export default FormItem
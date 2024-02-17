import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className=' min-h-20 px-20'>
       <p className='text-xl'> {quote}</p>
    </div>
  )
}

export default Quote
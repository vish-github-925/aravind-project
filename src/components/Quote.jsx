import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className='my-4 min-h-20'>
       <p className='text-xl'> {quote}</p>
    </div>
  )
}

export default Quote
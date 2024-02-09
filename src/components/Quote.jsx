import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className='py-5 px-6 rounded-lg border-2 my-8 min-h-20'>
       <p className='text-lg '> {quote}</p>
    </div>
  )
}

export default Quote
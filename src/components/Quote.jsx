import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className=' min-h-20 px-10'>
       <p className='md:text-xl text-lg'> {quote}</p>
    </div>
  )
}

export default Quote
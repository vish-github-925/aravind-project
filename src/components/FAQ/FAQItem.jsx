import React from 'react'
import { useState } from 'react'

function FAQItem({faqQuestion, faqAnswer}) {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    setOpened(prev => !prev)
  }
  
  return (
    <div className={`flex flex-col transition-all  w-full  border-b-[1px] border-teal-300 py-3`}>
        <div className='flex items-center justify-between '>
            <p className='text-lg h-10'>{faqQuestion}</p>
            {opened ? (
                <span className={`h-[30px] hover:cursor-pointer material-symbols-outlined`} onClick={handleOpen}>remove</span>
            ) : (
                <span className="h-[30px] hover:cursor-pointer material-symbols-outlined" onClick={handleOpen}>add</span>
            )} 
        </div>
        <div className={` ${ opened ? "block transition-all delay-150  duration-[2s] ease-in-out": "hidden"} `}>
         {faqAnswer}  
        </div>
    </div>
  )
}

export default FAQItem
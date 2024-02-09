import React from 'react'
import FormItem from './FormItem/FormItem'

function ContactFormHomePage({form, contactData, handleChange, handleSubmit}) {
  return (
    <form ref={form} action="post" className=' flex flex-col space-y-2 items-start border-2 p-10 rounded-s-lg bg-white my-5'>
        <span className='text-3xl font-medium h-20'>Contact for your right of free water !</span>
        <FormItem type={"text"} name={"firstname"} value={contactData.firstname} onChange={handleChange} spanValue={"First name: *"}/>
        <FormItem type={"text"} name={"lastname"} value={contactData.lastname} onChange={handleChange} spanValue={"Last name: *"}/>
        <FormItem type={"email"} name={"email"} value={contactData.email} onChange={handleChange} spanValue={"Email: *"}/>
        <FormItem type={"number"} name={"mobilenumber"} value={contactData.mobilenumber} onChange={handleChange} spanValue={"Mobile Number: *"}/>
        <FormItem type={"text"} name={"subject"} value={contactData.subject} onChange={handleChange} spanValue={"Subject: *"}/>
        <FormItem type={"text"} name={"message"} value={contactData.message} onChange={handleChange} spanValue={"Message: *"}/>
        <button type='submit' onClick={handleSubmit} className='rounded mt-10 text-white bg-blue-400 py-5 px-10 hover:cursor-pointer hover:text-blue-300 active:scale-95 transition-colors ease-linear'>Send</button>
      </form>
  )
}

export default ContactFormHomePage
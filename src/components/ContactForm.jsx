import React from 'react'
import FormItem from './FormItem/FormItem'
import { Button } from '@material-tailwind/react'

function ContactForm({form, contactData, handleChange, handleSubmit}) {

  let disabled = true
  if(contactData.firstname.length === 0 || contactData.lastname.length === 0 || contactData.message.length === 0 || contactData.email.length === 0 || contactData.mobilenumber.length === 0 || contactData.subject.length === 0)
  {
    disabled = true
  }else{
    disabled = false
  }
  console.log(disabled)
  return(
    <form ref={form} action="post" className='bg-white h-full flex flex-col space-y-5 items-start border-2 p-10 rounded-s-lg md:w-2/3 w-full'>
        <span className='border-b-2 border-b-slate-500 outline-none text-5xl font-medium h-14'>Contact </span>
        <FormItem type={"text"} name={"firstname"} value={contactData.firstname} onChange={handleChange} spanValue={"First name: *"}/>
        <FormItem type={"text"} name={"lastname"} value={contactData.lastname} onChange={handleChange} spanValue={"Last name: *"}/>
        <FormItem type={"email"} name={"email"} value={contactData.email} onChange={handleChange} spanValue={"Email: *"}/>
        <FormItem type={"number"} name={"mobilenumber"} value={contactData.mobilenumber} onChange={handleChange} spanValue={"Mobile Number: *"}/>
        <FormItem type={"text"} name={"subject"} value={contactData.subject} onChange={handleChange} spanValue={"Subject: *"}/>
        <FormItem type={"text"} name={"message"} value={contactData.message} onChange={handleChange} spanValue={"Message: *"}/>
        <Button type='submit' onClick={handleSubmit} disabled={disabled} className={`rounded mt-10 text-white bg-blue-400 py-5 px-10 hover:cursor-pointer  active:scale-95 transition-colors ease-linear ${disabled ? 'hover:cursor-not-allowed':''}`}>Send</Button>

      </form>
  )
}

export default ContactForm
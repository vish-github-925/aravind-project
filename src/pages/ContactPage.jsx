import React from 'react'
import { useState } from 'react'
import FormItem from '../components/FormItem/FormItem'

function ContactPage() {
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    subject: "",
    message: ""
  })
  const handleChange = (e) => {
    setContactData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()


  }
  return (
    <main className='min-h-[100vh] flex py-10  px-5 md:px-52 ' >
      {/* Contact form */}
      <form action="post" className='bg-white h-full flex flex-col space-y-5 items-start border-2 p-10 rounded-s-lg md:w-2/3 w-full'>
        <span className='text-3xl font-medium h-20'>Contacts</span>
        <FormItem type={"text"} name={"firstname"} value={contactData.firstname} onChange={handleChange} spanValue={"First name: *"}/>
        <FormItem type={"text"} name={"lastname"} value={contactData.lastname} onChange={handleChange} spanValue={"Last name: *"}/>
        <FormItem type={"email"} name={"email"} value={contactData.email} onChange={handleChange} spanValue={"Email: *"}/>
        <FormItem type={"number"} name={"mobilenumber"} value={contactData.mobilenumber} onChange={handleChange} spanValue={"Mobile Number: *"}/>
        <FormItem type={"text"} name={"subject"} value={contactData.subject} onChange={handleChange} spanValue={"Subject: *"}/>
        <FormItem type={"text"} name={"message"} value={contactData.message} onChange={handleChange} spanValue={"Message: *"}/>
        <button type='submit' onClick={handleSubmit} className='rounded mt-10 text-white bg-blue-400 py-5 px-10 hover:cursor-pointer hover:text-blue-300 active:scale-95 transition-colors ease-linear'>Send</button>

      </form>
      {/* For image to the right hand side */}
      <div className='hidden md:block'>
        <img src="src/assets/bottle.jpg" alt="Bottle Image" className='h-[799.5px] pt-[2px] rounded-e-lg
        ' />
      </div>
    </main>
  )
}

export default ContactPage
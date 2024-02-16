import React, { useRef } from 'react'
import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import emailjs from '@emailjs/browser'

import Header from '../components/Header/Header'

function ContactPage() {
  const form = useRef()
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
    console.log(form.current)
    emailjs.sendForm("service_4wxmoyk","template_k7yo06o", form.current, '5J6qgLSSL6Pj0wij5').then((result) => {console.log("Email sent"+result)})
    setContactData({
      firstname: "",
      lastname: "",
      email: "",
      mobilenumber: "",
      subject: "",
      message: ""
    })
  }
  return (
    
    <main className='min-h-[100vh] flex flex-col' >

      {/* Contact form */}
      <Header t={"text-slate-700 hover:text-black"} />

    <div className='px-20  flex items-center justify-center'>
      <ContactForm form={form} contactData={contactData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* For image to the right hand side */}
      <div className='hidden md:block'>
        <img src="/images/bottle.jpg" alt="Bottle Image" className='h-[799.5px] pt-[2px] rounded-e-lg
        ' />
      </div>
      </div>
      
    </main>
  )
}

export default ContactPage
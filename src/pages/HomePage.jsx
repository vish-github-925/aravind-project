import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Quote from '../components/Quote'
// import { Fade } from 'react-awesome-reveal'
import { Fade } from 'react-swift-reveal'

import ContactForm from '../components/ContactForm'
import Header from '../components/Header/Header'

function HomePage() {
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
    <Fade>
    <main className='min-h-[100vh]'>
  
      <section className='md:flex md:flex-col md:items-center justify-between md:space-x-10  w-screen mb-5'>
        <div className='h-[350px] w-full flex  items-center justify-center -space-x-32'>
          <div>
        <img src="/images/aqua_wave.png" alt="Aqua Wave" className='h-72 w-64 mt-10'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <p style={{fontFamily: "Conquera Medium"}} className='text-[75px] text-center'>AQUA ADS</p>
        <p style={{fontFamily: "Conquera Medium"}} className='text-[15px] text-center'>MAKING WAVES IN ADVERTISING</p>
        </div>
        </div>
        <div className='w-full h-[600px] px-20'>
        <img src="/images/Grassfieldphoto.jpg" alt="Water vector 1" className='rounded h-full w-full pr-[50px]'/>
        </div>
      </section>

      {/* Right to Free Water */}
      <section id='howwework' className='mt-20 px-20 h-[550px] '>
        <span className='text-4xl font-medium text-blue-500 my-5 h-16 border-b-2 border-b-teal-500'>Right to Free Water</span>

        <div className='flex space-x-20 w-full'>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center w-1/2'>
        Through partnerships with local communities, nonprofits, and businesses, we identify areas with limited access to clean water and distribute our water bottles and supply bottles directly to those in need. We prioritize areas where water scarcity poses significant challenges to daily life, such as remote villages, disaster-stricken regions, and underserved urban areas.
        </p>
        <div className='w-1/2 flex flex-col items-center ml-10'>
          <span style={{fontFamily: 'League Spartan'}} className='text-3xl font-bold'>RIGHT TO</span>
          <span style={{fontFamily: 'League Spartan'}} className='text-3xl font-bold mt-2'>FREE WATER</span>
          <span style={{fontFamily: 'League Spartan'}} className='text-sm font-bold'>FREE DRINKING MINERAL WATER</span>
        <img src="/images/logo.png" alt="Partnership" className='h-[400px] w-full rounded-lg object-cover'/>
        </div>
        </div>
      
      </section>
      <img src="/images/illustrations/2/21.png" alt="Quote" className='h-10 w-15 px-20 mt-20'/>
      
      <Quote quote={"Water, a fundamental natural resource essential to life, is not readily available to all. It should be freely accessible to everyone, as clean and filtered water is a basic human right.💪"}/>

      {/* Mission */}
      <section id='mission' className='mb-24 h-[500px] flex flex-col items-end justify-center space-y-8 px-20'>
        <span className='text-4xl flex items-center justify-center  font-medium text-blue-500 hover:cursor-pointer h-[50px] border-b-2 border-b-teal-500'>Our Mission 
        
      <img src="/images/illustrations/2/25.png" alt="Quote" className='h-10 w-15 px-4'/>
        
        </span>

        <div className='flex space-x-20 w-full'>
        <img src="/images/waterdrinking.jpg" alt="Child drinking water" className='h-[300px] w-1/2 rounded-lg object-cover'/>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center w-1/2'>
          Our mission is simple yet profound: to ensure that no one goes thirsty. We strive to make clean water accessible to all, regardless of geographical location, socioeconomic status, or any other barriers they may face. By providing free water bottles and supply bottles, we aim to quench the thirst of those in need and contribute to a healthier, more equitable world.</p>
        </div>
        
        </section>

      {/* How we work */}
      <section id='howwework' className='my-20 px-20'>
        <span className='text-4xl font-medium text-blue-500 my-5 h-16 border-b-2 border-b-teal-500'>How we work</span>

        <div className='flex space-x-20 w-full'>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center w-1/2'>
        Through partnerships with local communities, nonprofits, and businesses, we identify areas with limited access to clean water and distribute our water bottles and supply bottles directly to those in need. We prioritize areas where water scarcity poses significant challenges to daily life, such as remote villages, disaster-stricken regions, and underserved urban areas.
        </p>
        <img src="/images/partnership.jpg" alt="Partnership" className='h-[300px] w-1/2 rounded-lg object-cover'/>
        </div>
      
      </section>
      
      <div className=''>
      <img src="/images/illustrations/2/21.png" alt="Quote" className='h-10 w-15  px-20'/>

      <Quote quote={`From keeping us hydrated and clean, to preventing the spread of deadly diseases, clean water is an essential that has such a huge ripple effect around the world. Tragically, almost 1 in 10 people lack clean water close to home, and climate change is only making things worse.`}/>
      </div>
      <Quote quote={"Together we can make clean water the star of the show, and make sure it's in reach for everyone, everywhere."}>

      </Quote>
      
      <div className='h-30 w-full flex items-center justify-center space-x-10 '>

      <p className='text-[50px] text-teal-400  font-medium'>Want to work with us!! </p>
      <img src="/images/illustrations/2/22.png" alt="" className='h-20 w-20'/>

      </div>
      
      <div className='flex items-center justify-center space-x-10 my-14 px-40'>

      <ContactForm form={form} contactData={contactData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* <img src="/images/illustrations/2/23.gif" alt="" className='h-[500px]'/> */}
      </div>
    </main>
    </Fade>
  )
}

export default HomePage
import React, { useRef } from 'react'
import { useState } from 'react'
import ContactFormHomePage from '../components/ContactFormHomePage'
import emailjs from '@emailjs/browser'
import Quote from '../components/Quote'
// import { Fade } from 'react-awesome-reveal'
import { Fade } from 'react-swift-reveal'

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
    <main className='px-20 md:px-72 min-h-[100vh] bg-slate-100 py-10'>

      <h1 className='text-center text-blue-400 font-bold text-3xl h-20'>Right to Free Water.</h1>

      <h2 className='text-center font-bold text-2xl h-20'>Yes, you heard it right. IT IS OUR RIGHT!</h2>
      
      <div className=''>
      <Quote quote={"Water, a fundamental natural resource essential to life, is not readily available to all. It should be freely accessible to everyone, as clean and filtered water is a basic human right.💪"}/>
      <Quote quote={`From keeping us hydrated and clean, to preventing the spread of deadly diseases, clean water is an essential that has such a huge ripple effect around the world. Tragically, almost 1 in 10 people lack clean water close to home, and climate change is only making things worse.`}/>
      </div>
      <Quote quote={"Together we can make clean water the star of the show, and make sure it's in reach for everyone, everywhere."}>

      </Quote>

      {/* Mission */}
      <section id='mission' className='my-20'>
        <h3 className='text-3xl font-medium text-teal-400 my-5 h-10 border-none border-b-2 border-b-purple-400'>Our Mission</h3>
        <div className='flex space-x-10'>
        <img src="/images/waterdrinking.jpg" alt="Child drinking water" className='h-60 w-[1500px] rounded-lg'/>
        <p className='text-lg my-2'>
          Our mission is simple yet profound: to ensure that no one goes thirsty. We strive to make clean water accessible to all, regardless of geographical location, socioeconomic status, or any other barriers they may face. By providing free water bottles and supply bottles, we aim to quench the thirst of those in need and contribute to a healthier, more equitable world.</p>
        </div>
        
        </section>

      {/* How we work */}
      <section id='howwework' className='my-20'>
        <h3 className='text-3xl font-medium text-teal-400 my-5 h-10'>How we work</h3>
        <div className='flex space-x-10'>
        <p className='text-lg my-2'>
        Through partnerships with local communities, nonprofits, and businesses, we identify areas with limited access to clean water and distribute our water bottles and supply bottles directly to those in need. We prioritize areas where water scarcity poses significant challenges to daily life, such as remote villages, disaster-stricken regions, and underserved urban areas.
        </p>
        <img src="/images/partnership.jpg" alt="Partnership" className='h-60 w-[1500px] rounded-lg'/>
        </div>
      
      </section>
      
      {/* Impact */}
      {/* <section id='impact' className=''>
        <h3>Our Impact</h3>
        <p>

        </p>

      </section> */}
      
      <p className='text-center text-3xl text-teal-400 h-10 font-medium'>Want to work with us!! </p>
      
      <ContactFormHomePage form={form} contactData={contactData} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </main>
    </Fade>
  )
}

export default HomePage
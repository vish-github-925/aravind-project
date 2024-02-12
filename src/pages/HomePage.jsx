import React, { useRef } from 'react'
import { useState } from 'react'
import ContactFormHomePage from '../components/ContactFormHomePage'
import emailjs from '@emailjs/browser'
import Quote from '../components/Quote'
// import { Fade } from 'react-awesome-reveal'
import { Fade } from 'react-swift-reveal'
import ContactForm from '../components/ContactForm'

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
    <main className='px-20 md:px-40 min-h-[100vh] py-10 '>

      <section className='min-h-[40vh] md:flex md:items-center justify-between md:space-x-10 '>
        <div className='h-[500px] w-[500px] '>
          <h1 className='text-[75px] h-full w-full font-bold  text-emerald-500'>Aqua Ads Right to free water</h1>
        </div>
        <div className='min-h-full w-1/3'>
          <img src="/images/illustrations/1/1.png" alt="Water vector 1" className='rounded-lg h-96 w-full'/>
        </div>
      </section>

      {/* <h1 className='text-center text-blue-400 font-bold text-3xl h-20'>Right to Free Water.</h1>

      <h2 className='text-center font-bold text-2xl h-20'>Yes, you heard it right. IT IS OUR RIGHT!</h2> */}
      
      <Quote quote={"Water, a fundamental natural resource essential to life, is not readily available to all. It should be freely accessible to everyone, as clean and filtered water is a basic human right.💪"}/>

      {/* Mission */}
      <section id='mission' className='mb-24 h-[500px] flex flex-col items-end justify-center space-y-8'>
        <span className='text-4xl font-medium text-blue-500 hover:cursor-pointer h-[50px] border-b-2 border-b-teal-500'>Our Mission</span>
        <div className='flex space-x-20 w-full'>
        <img src="/images/waterdrinking.jpg" alt="Child drinking water" className='h-[300px] w-1/2 rounded-lg object-cover'/>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center w-1/2'>
          Our mission is simple yet profound: to ensure that no one goes thirsty. We strive to make clean water accessible to all, regardless of geographical location, socioeconomic status, or any other barriers they may face. By providing free water bottles and supply bottles, we aim to quench the thirst of those in need and contribute to a healthier, more equitable world.</p>
        </div>
        
        </section>

      {/* How we work */}
      <section id='howwework' className='my-20'>
        <span className='text-4xl font-medium text-blue-500 my-5 h-16 border-b-2 border-b-teal-500'>How we work</span>
        <div className='flex space-x-20 w-full'>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center w-1/2'>
        Through partnerships with local communities, nonprofits, and businesses, we identify areas with limited access to clean water and distribute our water bottles and supply bottles directly to those in need. We prioritize areas where water scarcity poses significant challenges to daily life, such as remote villages, disaster-stricken regions, and underserved urban areas.
        </p>
        <img src="/images/partnership.jpg" alt="Partnership" className='h-[300px] w-1/2 rounded-lg object-cover'/>
        </div>
      
      </section>
      
      <div className=''>
      <img src="/images/illustrations/2/21.png" alt="Quote" className='h-10 w-15'/>

      <Quote quote={`From keeping us hydrated and clean, to preventing the spread of deadly diseases, clean water is an essential that has such a huge ripple effect around the world. Tragically, almost 1 in 10 people lack clean water close to home, and climate change is only making things worse.`}/>
      </div>
      <Quote quote={"Together we can make clean water the star of the show, and make sure it's in reach for everyone, everywhere."}>

      </Quote>

      
      {/* Impact */}
      {/* <section id='impact' className=''>
        <h3>Our Impact</h3>
        <p>

        </p>

      </section> */}
      
      <div className='h-30 w-full flex items-center justify-center space-x-10 '>

      <p className='text-[50px] text-teal-400  font-medium'>Want to work with us!! </p>
      <img src="/images/illustrations/2/22.png" alt="" className='h-20 w-20'/>

      </div>
      
      <div className='flex items-center justify-center space-x-10 mt-14'>
      <ContactForm form={form} contactData={contactData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* <img src="/images/illustrations/2/23.gif" alt="" className='h-[500px]'/> */}
      </div>
    </main>
    </Fade>
  )
}

export default HomePage
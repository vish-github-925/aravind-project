import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Quote from '../components/Quote'
// import { Fade } from 'react-awesome-reveal'
import { Fade } from 'react-swift-reveal'
import { Carousel } from "@material-tailwind/react";

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
    <main className='min-h-[100vh] md:px-20'>
  
      {/* <section className='md:flex md:flex-col md:items-center justify-between md:space-x-10  w-screen mb-5'>
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
      </section> */}

      {/* Carousel */}
      {/* <section className='md:flex md:items-center justify-between mb-5 h-[500px]'>
        <div className='h-full w-1/2 flex flex-col items-center justify-center'>
          <h1 className='text-3xl'>WE PROMOTE YOUR BRAND AS EVERYONE'S DAILY NEED</h1>
          <h2>Here is the future of advertising</h2>
        </div>
        <Carousel className='w-[750px] h-full bg-black'>
        <img src="/images/Grassfieldphoto.jpg" alt="Water vector 1" className='h-full w-full rounded object-contain'/>
        <img src="/images/logo.png" alt="Water vector 1" className='h-full w-full rounded object-contain'/>
        </Carousel>
      </section> */}

      {/* Main section Carousel */}
      <Carousel  className='w-full rounded transition-all duration-200 ' autoplay={true} interval={2000} loop>
        
        <img src="/images/zomatoFILE.jpg" alt="Zomato Ad" className='h-full w-full object-cover'/>
        <img src="/images/SWIGGY LABEL.jpg" alt="Swiggy Ad" className='h-full w-full object-cover'/>
        <img src="/images/RAPIDOlabel.jpg" alt="Rapido Ad" className='h-full w-full object-cover'/>
      </Carousel>

      <div className='w-full py-4 flex items-end justify-end'>
        <p className='text-sm md:text-lg'>* For demonstration purpose only</p>
      </div>

      {/* Right to Free Water */}
      <section id='howwework' className='flex flex-col md:items-center md:flex-row md:justify-between w-full mt-10 items-center justify-center'>
      
        <div className='flex flex-col h-full md:w-1/2'>
          <div className='flex flex-col items-center'>
          <h1 className='md:text-[75px] text-[45px]'>RIGHT TO</h1>
          <h1 className='md:text-[75px] text-[45px]'>FREE WATER</h1>
          </div>
        <p className='md:text-xl text-lg tracking-wide px-20 mb-20 md:mb-0'>
        Right to free water is a campaign for a cause and Innovative advertising solution. Which brings impactful visibility to the targeted customers.
        </p>
        </div>   
        <div className='flex flex-col items-center md:w-1/2  h-full '>
          <div className='flex flex-col items-center'>
          <span className='text-4xl font-extrabold font-serif'>RIGHT TO</span>
          <span  className='text-4xl  font-serif font-extrabold mt-2'>FREE WATER</span>
          <span  className='text-sm  font-serif font-bold'>FREE DRINKING MINERAL WATER</span>
          </div>
        <img src="/images/logo1.png" alt="Partnership" className='h-[200px] rounded-lg object-cover'/>
        </div>    
        
        
      
      </section>
      <div className='h-10 w-full px-20 flex items-end mt-20'>
      <img src="/images/illustrations/2/21.png" alt="Quote" className='h-1/2 md:h-full w-10 md:w-20'/>
      </div>
      <Quote quote={"Water, a fundamental natural resource essential to life, is not readily available to all. It should be freely accessible to everyone, as clean and filtered water is a basic human right.💪"}/>

      {/* Mission */}
      <section id='mission' className='flex md:flex-col flex-col md:items-end items-center justify-center space-y-8 px-20 py-10'>
        <span className='text-[40px] flex items-center justify-center  font-medium text-blue-500 hover:cursor-pointer  border-b-2 border-b-teal-500'>Our Mission 
        
      <img src="/images/illustrations/2/25.png" alt="Quote" className='h-10 w-15 px-4'/>
        
        </span>

        <div className='flex flex-col md:flex-row md:space-x-20 w-full'>
        <img src="/images/waterdrinking.jpg" alt="Child drinking water" className='h-[300px] md:w-1/2  rounded-lg object-cover'/>
        <p className='md:text-xl text-lg tracking-wide my-2 flex items-center justify-center md:w-1/2'>
          Our mission is simple yet profound: to ensure that no one goes thirsty. We strive to make clean water accessible to all, regardless of geographical location, socioeconomic status, or any other barriers they may face. By providing free water bottles and supply bottles, we aim to quench the thirst of those in need and contribute to a healthier, more equitable world.</p>
        </div>
        
        </section>

      {/* How we work */}
      <section id='howwework' className='px-20'>
        <span className='text-[40px] font-medium text-blue-500 my-5 h-16 border-b-2 border-b-teal-500'>How we work</span>

        <div className='flex md:space-x-20 w-full md:flex-row flex-col'>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center md:w-1/2'>
        Through partnerships with local communities, nonprofits, and businesses, we identify areas with limited access to clean water and distribute our water bottles and supply bottles directly to those in need. We prioritize areas where water scarcity poses significant challenges to daily life, such as remote villages, disaster-stricken regions, and underserved urban areas.
        </p>
        <img src="/images/partnership.jpg" alt="Partnership" className='md:w-1/2 w-full  rounded-lg object-cover'/>
        </div>
      
      </section>
      
      <div className=''>
      <div className='h-10 w-full px-20 flex items-end mt-20'>
      <img src="/images/illustrations/2/21.png" alt="Quote" className='h-1/2 md:h-full w-10 md:w-20'/>
      </div>

      <Quote quote={`From keeping us hydrated and clean, to preventing the spread of deadly diseases, clean water is an essential that has such a huge ripple effect around the world. Tragically, almost 1 in 10 people lack clean water close to home, and climate change is only making things worse.`}/>
      </div>
      <Quote quote={"Together we can make clean water the star of the show, and make sure it's in reach for everyone, everywhere."}>

      </Quote>
      
      <div className='h-30 w-full flex items-center justify-center space-x-10 '>

      <p className='md:text-[50px] text-[40px] text-teal-400  font-medium mt-10'>Want to work with us!! </p>
      <img src="/images/illustrations/2/22.png" alt="" className='h-20 w-20 hidden md:block'/>

      </div>
      
      {/* Contact us section */}
      <div className='flex items-center justify-center md:space-x-10 my-5 px-10 md:px-0'>

      <ContactForm form={form} contactData={contactData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* <img src="/images/illustrations/2/23.gif" alt="" className='h-[500px]'/> */}
      </div>

      {/* FAQ Section */}

      {/* Certified images */}
      <section className='flex md:h-[200px] w-full items-center justify-between px-10 md:px-0'>
        <img src="/images/fssai.webp" alt="FSSAI" />
        <img src="/images/isi.webp" alt="ISI" />
        <img src="/images/mii.png" alt="Make In India" />
        <img src="/images/sb.png" alt="Swatch Bharat" />
        <img src="/images/pet.webp" alt="PET" />
      </section>
    </main>
    </Fade>
  )
}

export default HomePage
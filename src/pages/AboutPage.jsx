import React from 'react'
import Header from '../components/Header/Header'
import {useInView} from 'react-intersection-observer'
function AboutPage() {
  const {ref: sec2Ref, inView: sec2View} = useInView()
  const {ref: sec3Ref, inView: sec3View} = useInView()
  return (
    <main className='min-h-[100vh] bg-slate-100 md:px-20'>

      
     

      {/* How we work */}
      <section id='howwework' className={`px-10 ${sec3View ? 'animate-[wiggle_1s_ease-in-out]' : ''} py-10`} ref={sec3Ref}>
        <span className='text-[40px] font-medium text-blue-500 my-5 h-16 border-b-2 border-b-teal-500'>How we work</span>

        <div className='flex md:space-x-20 w-full md:flex-row flex-col'>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center md:w-1/2'>
        Through partnerships with the local communities, nonprofits, and businesses, we identify areas with limited access to clean water and distribute our water bottles and supply bottles directly to those in need. We prioritize areas where water scarcity poses significant challenges to daily life, such as remote villages, disaster-stricken regions, and underserved urban areas.
        </p>
        <img src="/images/partnership.jpg" alt="Partnership" className='md:w-1/2 w-full  rounded-lg object-cover'/>
        </div>
      
      </section>
      
       {/* Mission */}
       <section id='mission' ref={sec2Ref} className={`flex md:flex-col flex-col md:items-end items-center justify-center space-y-8 px-10 py-10 ${sec2View ? 'animate-[wiggle_1s_ease-in-out]' : ''}`}>
        <span className='text-[40px] flex items-center justify-center  font-medium text-blue-500 hover:cursor-pointer  border-b-2 border-b-teal-500'>Our Mission 
        
      <img src="/images/illustrations/2/25.png" alt="Quote" className='h-10 w-15 px-4'/>
        
        </span>

        <div className='flex flex-col md:flex-row md:space-x-20 w-full'>
        <img src="/images/waterdrinking.jpg" alt="Child drinking water" className='h-[300px] md:w-1/2  rounded-lg object-cover'/>
        <p className='md:text-xl text-lg tracking-wide my-2 flex items-center justify-center md:w-1/2'>
          Our mission is simple yet profound, to ensure that no one goes thirsty.   &nbsp;  We strive to make clean water accessible to all, regardless of geographical location, socioeconomic status, or any other barriers they may face. &nbsp; By providing free water bottles and supply bottles, we aim to quench the thirst of those in need and contribute to a healthier, more equitable world.</p>
        </div>
        
        </section>
     

    </main>
  )
}

export default AboutPage
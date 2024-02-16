import React from 'react'
import Header from '../components/Header/Header'
function AboutPage() {
  return (
    <main className='min-h-[100vh] bg-slate-100'>
             <Header t={"text-slate-700 hover:text-black"} />

      
      <section id='howwework' className='my-20 px-20'>
        <span className='text-4xl font-medium text-blue-500 my-5 h-16 border-b-2 border-b-teal-500'>How we work</span>
        <div className='flex space-x-20 w-full'>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center w-1/2'>
        Through partnerships with local communities, nonprofits, and businesses, we identify areas with limited access to clean water and distribute our water bottles and supply bottles directly to those in need. We prioritize areas where water scarcity poses significant challenges to daily life, such as remote villages, disaster-stricken regions, and underserved urban areas.
        </p>
        <img src="/images/partnership.jpg" alt="Partnership" className='h-[300px] w-1/2 rounded-lg object-cover'/>
        </div>
      
      </section>
      <section id='mission' className='mb-24 h-[500px] flex flex-col items-end justify-center space-y-8 px-20'>
        <span className='text-4xl font-medium text-blue-500 hover:cursor-pointer h-[50px] border-b-2 border-b-teal-500'>Our Mission</span>
        <div className='flex space-x-20 w-full'>
        <img src="/images/waterdrinking.jpg" alt="Child drinking water" className='h-[300px] w-1/2 rounded-lg object-cover'/>
        <p className='text-xl tracking-wide my-2 flex items-center justify-center w-1/2'>
          Our mission is simple yet profound: to ensure that no one goes thirsty. We strive to make clean water accessible to all, regardless of geographical location, socioeconomic status, or any other barriers they may face. By providing free water bottles and supply bottles, we aim to quench the thirst of those in need and contribute to a healthier, more equitable world.</p>
        </div>
        
        </section>
      
     

    </main>
  )
}

export default AboutPage
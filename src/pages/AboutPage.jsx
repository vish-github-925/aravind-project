import React from 'react'

function AboutPage() {
  return (
    <main className='px-20 md:px-80 min-h-[100vh] bg-slate-100 py-10'>
      
      <p>We are a group of friends who have similar thoughts and dreams in providing water freely.</p>
      <section id='mission' className=''>
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
    </main>
  )
}

export default AboutPage
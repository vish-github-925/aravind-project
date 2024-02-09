import React from 'react'
import Quote from '../components/Quote'

function InspirationPage() {
  return (
    <main className='px-20 md:px-80 min-h-[100vh] bg-slate-100 py-10'>
      <div>
        <Quote quote={`Our inspiration is our frustrated thoughts of why should we pay or buy which should be fundamentally free.`}></Quote>
        <Quote quote={`Our constant research, paved us a way which can help us in providing free water.`}></Quote>
        <Quote quote={`Our inspiration is the humanity of many like minded people who come forward and support us in this initiation. There are many beautiful souls who provide support and be behind us.`}></Quote>
        <Quote quote={`We hope you also support us and inspire us more in this right cause and let many beings enjoy water as it should.`}></Quote>
        <Quote quote={`Contact us for more information and be a part of such righteous cause. We are waiting for you 😁.`}></Quote>
      </div>
    </main>
  )
}

export default InspirationPage
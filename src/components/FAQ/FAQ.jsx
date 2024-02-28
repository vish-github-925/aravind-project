import React from 'react'
import FAQItem from './FAQItem'

function FAQ() {
  return (
    <div className='text-black flex flex-col space-y-5 items-center'>

        <h1 className='md:text-6xl text-4xl md:h-24 h-12 font-medium text-center mt-10'>FAQ s</h1>
        <FAQItem faqQuestion={"How is Aqua Ads free?"} faqAnswer={"Aqua Ads is paid for by ads that are printed directly onto aluminum bottles and paper cartons. Ten cents per beverage is donated to charity to fight the global water crisis."}/>
        <FAQItem faqQuestion={"Why BPA free?"} faqAnswer={"The majority of bottled water is contaminated with the chemical BPA. High levels of BPA have been linked to diseases such as hormonal disruption, diabetes, high blood pressure, infertility, breast cancer, and hazardous effects on the brain and behavior of infants and young children."}/>
        <FAQItem faqQuestion={"What charities do you donate to?"} faqAnswer={"We are currently contributing our donations to Well Aware and Charity Water."}/>
        <FAQItem faqQuestion={"How can I help Aqua Ads?"} faqAnswer={"Aqua Ads is the best brand loyalty platform on Earth and there are unique opportunities to incorporate this new and exciting medium into most ad budgets."}/>
        <FAQItem faqQuestion={"What charities do you donate to?"} faqAnswer={"We are currently contributing our donations to Customs Health Care Society."}/>
    </div>
  )
}

export default FAQ
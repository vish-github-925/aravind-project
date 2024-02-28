import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer/Footer'
import ErrorPage from './pages/ErrorPage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    
    <main className='h-screen w-full  bg-center bg-no-repeat bg-cover text-justify font-Conquera Medium text-[#6d7c90]' style={{fontFamily: "Lato Regular"}}>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage />} errorElement={<ErrorPage />}/>
      <Route path='/about' element={<AboutPage />}  errorElement={<ErrorPage />}/>
      <Route path='/contact' element={<ContactPage />} errorElement={<ErrorPage />}/>
      <Route path='/faq' element={<FAQPage />} errorElement={<FAQPage />}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    
    <Footer />
    </BrowserRouter>
    </main>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ContactUs from './components/ContactUS/ContactUs'
import Footer from './components/Footer/Footer'

function App() {
  return (
    
    <main className='h-screen w-full  bg-center bg-no-repeat bg-cover text-justify font-Conquera Medium' style={{fontFamily: "Product Sans Regular"}}>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
    
    <Footer />
    </BrowserRouter>
    </main>
  )
}

export default App
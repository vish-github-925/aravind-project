import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import InspirationPage from './pages/InspirationPage'
import Banner from './components/Banner/Banner'
import ContactUs from './components/ContactUS/ContactUs'

function App() {
  return (
    
    <main className='h-screen w-full  bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url("src/assets/water-bg.jpg")` }}>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/inspiration' element={<InspirationPage />} />
    </Routes>
    
    <Banner />
    <ContactUs />
    </BrowserRouter>
    </main>
  )
}

export default App
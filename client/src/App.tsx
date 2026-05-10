import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import SubmitCV from './pages/SubmitCV'
import BookConsultant from './pages/BookConsultant'
import HowItWorks from './pages/HowItWorks'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  const location = useLocation()
  return (
    <div className="bg-cream min-h-screen text-bark relative">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-cv" element={<SubmitCV />} />
          <Route path="/book-consultant" element={<BookConsultant />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

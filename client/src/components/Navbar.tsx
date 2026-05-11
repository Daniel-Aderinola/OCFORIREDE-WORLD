import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedLink, AnimatedButton } from './AnimatedButton'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)
  const location = useLocation()

  const isActive = (to: string)=> location.pathname === to

  const linkClass = (active: boolean)=> `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
    active
      ? 'bg-forest text-cream shadow-sm'
      : 'text-bark hover:text-forest hover:bg-white/80'
  }`

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY>80)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <header className={`fixed w-full z-40 backdrop-blur-md bg-cream/90 border-b border-sand transition-all ${scrolled? 'shadow-md py-3':'py-6'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 text-forest font-display text-xl">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="3" width="4" height="18" rx="1" fill="#1B4332"/><rect x="3" y="10" width="18" height="4" rx="1" fill="#1B4332"/></svg>
          NurseConnect
        </Link>
        <nav className="hidden md:flex gap-2 items-center">
          {navItems.map((item)=> (
            <Link key={item.label} to={item.to} className={linkClass(isActive(item.to))}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <AnimatedLink to="/submit-cv" className="inline-block bg-forest text-cream rounded-full px-4 py-2 text-sm hover:shadow-lg hover:bg-forest/90">Get Started</AnimatedLink>
        </div>
        <button className="md:hidden" onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
      </div>

      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-forest/30 backdrop-blur-sm z-40"
          />
          <motion.aside initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-cream p-6 shadow-lg z-50">
            <button onClick={()=>setOpen(false)} className="mb-6 text-xl text-forest hover:text-forest/60 transition" aria-label="Close menu">✕</button>
            <nav className="flex flex-col gap-2">
              {navItems.map((item)=> (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={()=>setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-medium transition-all ${isActive(item.to) ? 'bg-forest text-cream' : 'text-forest hover:bg-white'}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/submit-cv" onClick={()=>setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium text-forest hover:bg-white">Submit CV</Link>
              <Link to="/book-consultant" onClick={()=>setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium text-forest hover:bg-white">Book a Consultant</Link>
            </nav>
          </motion.aside>
        </>
      )}
    </header>
  )
}

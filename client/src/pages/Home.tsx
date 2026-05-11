import React from 'react'
import HeroSection from '../components/HeroSection'
import MarqueeTicker from '../components/MarqueeTicker'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import { motion } from 'framer-motion'

const page = { hidden:{opacity:0}, visible:{opacity:1, transition:{duration:0.4}} }
const section = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Home(){
  return (
    <motion.main initial="hidden" animate="visible" variants={page}>
      <HeroSection />
      <MarqueeTicker />
      <motion.section className="container mx-auto px-6 md:px-12 lg:px-6 py-8 md:py-12 lg:py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-forest">Everything You Need to Land Your Dream Role</h2>
        <p className="mt-4 text-base md:text-lg text-forest/70">From CV submission to interview prep — we support nurses at every stage of their career journey.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="CV Submission" body="Drop your CV and get matched with verified healthcare employers across Nigeria, the UK, and beyond." icon={<svg className="w-6 h-6"/>} link="#" />
          <ServiceCard title="Book a Consultant" body="1-on-1 sessions with nursing career experts to polish your application and prepare for interviews." icon={<svg className="w-6 h-6"/>} link="#" />
          <ServiceCard title="Job Matching" body="We partner with top hospitals and clinics to connect you with the right opportunities." icon={<svg className="w-6 h-6"/>} link="#" />
        </div>
      </motion.section>

      <motion.section className="container mx-auto px-6 md:px-12 lg:px-6 py-8 md:py-12 lg:py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-forest">Nurses Who Found Their Path With Us</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard avatar="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100" name="Amaka" specialty="Pediatric Nurse" quote="The team matched me with two great roles and supported my interviews." />
          <TestimonialCard avatar="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100" name="Grace" specialty="ICU Nurse" quote="My CV was rewritten and I felt confident in my interviews." />
          <TestimonialCard avatar="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100" name="Damilola" specialty="Midwifery" quote="The consultant's mock interview prepared me perfectly." />
        </div>
      </motion.section>
    </motion.main>
  )
}

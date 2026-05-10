import React from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from '../components/TestimonialCard'

const page = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
const section = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Testimonials(){
  return (
    <motion.main initial="hidden" animate="visible" variants={page} className="pt-32">
      <motion.section className="container mx-auto px-6 py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <h1 className="font-display text-6xl lg:text-7xl text-forest font-bold leading-tight">Success Stories</h1>
        <p className="mt-6 text-lg text-forest/70 max-w-2xl">Real nurses, real careers. Hear how NurseConnect helped them land their dream roles.</p>
      </motion.section>

      <motion.section className="container mx-auto px-6 py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <div className="grid lg:grid-cols-3 gap-6">
          <TestimonialCard
            avatar="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100"
            name="Amaka"
            specialty="Pediatric Nurse"
            quote="The team matched me with two great roles and supported my interviews. I couldn't have done it without NurseConnect."
          />
          <TestimonialCard
            avatar="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100"
            name="Grace"
            specialty="ICU Nurse"
            quote="My CV was completely rewritten and I felt so confident in my interviews. Highly recommend!"
          />
          <TestimonialCard
            avatar="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100"
            name="Damilola"
            specialty="Midwifery"
            quote="The consultant's mock interview prepared me perfectly. I got the job on the first try!"
          />
          <TestimonialCard
            avatar="https://images.unsplash.com/photo-1544933149-4f2c90ed6e74?w=100"
            name="Chioma"
            specialty="Emergency Nurse"
            quote="Fast, professional, and they really care. Worth every penny and more."
          />
          <TestimonialCard
            avatar="https://images.unsplash.com/photo-1559052676-37e8a69d2e3a?w=100"
            name="Oluwatoyin"
            specialty="Surgical Nurse"
            quote="Had my interview within two weeks of applying. Now working at my dream hospital!"
          />
          <TestimonialCard
            avatar="https://images.unsplash.com/photo-1583194984727-04eae2477113?w=100"
            name="Zainab"
            specialty="Geriatric Nurse"
            quote="The team understood my career goals and matched me with the perfect role."
          />
        </div>
      </motion.section>

      <motion.section className="container mx-auto px-6 py-16 bg-forest rounded-3xl text-cream" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <h2 className="font-display text-4xl text-cream font-bold">Ready to Join Them?</h2>
        <p className="mt-4 text-cream/80 max-w-2xl">Start your journey with NurseConnect today and land your dream nursing role.</p>
        <div className="mt-8 flex gap-4">
          <a href="/submit-cv" className="rounded-full bg-cream text-forest px-6 py-3 font-semibold">Submit Your CV</a>
          <a href="/book-consultant" className="rounded-full border border-cream text-cream px-6 py-3 font-semibold">Book a Consultant</a>
        </div>
      </motion.section>
    </motion.main>
  )
}

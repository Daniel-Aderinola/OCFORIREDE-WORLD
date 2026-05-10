import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'

const page = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
const section = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Services(){
  return (
    <motion.main initial="hidden" animate="visible" variants={page} className="pt-32">
      <motion.section className="container mx-auto px-6 py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <h1 className="font-display text-6xl lg:text-7xl text-forest font-bold leading-tight">Our Services</h1>
        <p className="mt-6 text-lg text-forest/70 max-w-2xl">Comprehensive support for nurses at every stage of their career journey.</p>
      </motion.section>

      <motion.section className="container mx-auto px-6 py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <div className="grid lg:grid-cols-3 gap-6">
          <ServiceCard
            title="CV Submission"
            body="Drop your CV and get matched with verified healthcare employers across Nigeria, the UK, and beyond."
            icon={<svg className="w-6 h-6" />}
            link="#"
          />
          <ServiceCard
            title="Book a Consultant"
            body="1-on-1 sessions with nursing career experts to polish your application and prepare for interviews."
            icon={<svg className="w-6 h-6" />}
            link="#"
          />
          <ServiceCard
            title="Job Matching"
            body="We partner with top hospitals and clinics to connect you with the right opportunities."
            icon={<svg className="w-6 h-6" />}
            link="#"
          />
        </div>
      </motion.section>

      <motion.section className="container mx-auto px-6 py-16 bg-cream/50 rounded-3xl" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <h2 className="font-display text-4xl text-forest font-bold">Why Choose NurseConnect?</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl text-forest font-bold">Expert Guidance</h3>
            <p className="mt-2 text-forest/70">Our team includes experienced nursing professionals and career coaches who understand the healthcare industry.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-forest font-bold">Verified Employers</h3>
            <p className="mt-2 text-forest/70">We work only with trusted healthcare institutions to ensure quality job opportunities.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-forest font-bold">Fast Results</h3>
            <p className="mt-2 text-forest/70">Most applications are reviewed within 48 hours, with interview prep starting immediately.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-forest font-bold">Global Opportunities</h3>
            <p className="mt-2 text-forest/70">Access to nursing positions across Africa, the UK, and beyond.</p>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedButton } from '../components/AnimatedButton'

const page = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
const section = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Contact(){
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent)=> {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(()=> setSubmitted(false), 3000)
  }

  return (
    <motion.main initial="hidden" animate="visible" variants={page} className="pt-32 pb-20">
      <motion.section className="container mx-auto px-6 md:px-12 lg:px-6 py-8 md:py-12 lg:py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-forest font-bold leading-tight">Get in Touch</h1>
        <p className="mt-6 text-base md:text-lg text-forest/70 max-w-2xl">Have questions? We'd love to hear from you. Reach out to our team.</p>
      </motion.section>

      <motion.section className="container mx-auto px-6 md:px-12 lg:px-6 py-8 md:py-12 lg:py-16" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="font-display text-3xl text-forest font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-forest mb-2">Email</h3>
                <p className="text-forest/70">hello@nurseconnect.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-2">Phone</h3>
                <p className="text-forest/70">+234 800 000 0000</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-2">Office Hours</h3>
                <p className="text-forest/70">Monday - Friday: 9am - 6pm (WAT)</p>
                <p className="text-forest/70">Saturday: 10am - 2pm (WAT)</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-2">Address</h3>
                <p className="text-forest/70">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 border border-sand rounded-3xl p-6 md:p-8">
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-2xl bg-green-100 border border-green-300 p-4 text-green-800"
              >
                ✓ Message sent! We'll get back to you soon.
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-forest mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-2xl border border-sand px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-2xl border border-sand px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-2xl border border-sand px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest mb-2">Message</label>
                <textarea
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-sand px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest"
                  placeholder="Tell us more..."
                />
              </div>
              <AnimatedButton
                type="submit"
                className="w-full rounded-full bg-forest text-cream px-6 py-3 font-semibold hover:bg-forest/90"
              >
                Send Message
              </AnimatedButton>
            </form>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

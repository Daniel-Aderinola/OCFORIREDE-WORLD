import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const headline = 'Your Next Nursing Career Starts Here'

const container = { visible: { transition: { staggerChildren: 0.06 } } }
const word = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function HeroSection(){
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-transparent flex items-center px-6 lg:px-20 pt-28 pb-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <span className="inline-block bg-white/70 border border-sand rounded-full px-4 py-2 text-xs text-forest font-medium shadow-sm">Trusted by nurses across Africa & UK</span>
          <motion.h1 className="font-display text-6xl lg:text-7xl text-forest font-bold leading-tight mt-6 overflow-hidden" initial="hidden" animate="visible" variants={container}>
            {headline.split(' ').map((w,i)=> (
              <motion.span
                key={i}
                className="inline-block mr-2 cursor-pointer origin-bottom"
                variants={word}
                whileHover={{ y: -6, scale: 1.05, rotate: -1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p className="mt-6 text-lg text-forest/70" initial={{opacity:0,y:12}} animate={{opacity:1,y:0,transition:{delay:0.6}}}>Submit your CV and get matched with top healthcare employers — or book an expert consultant to prepare your application and ace your interview.</motion.p>
          <div className="mt-6 flex gap-4">
            <Link to="/submit-cv" className="bg-forest text-cream rounded-full px-6 py-3 font-medium shadow-sm">Submit Your CV</Link>
            <Link to="/book-consultant" className="border border-sand text-forest rounded-full px-6 py-3 font-medium bg-white/60">▶ Book a Consultant</Link>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <div className="bg-white/70 border border-sand rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm">
              <div className="font-display text-2xl text-forest font-bold">2,400+</div>
              <div className="text-xs text-forest/70">Nurses Placed</div>
            </div>
            <div className="bg-white/70 border border-sand rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm">
              <div className="font-display text-2xl text-forest font-bold">98%</div>
              <div className="text-xs text-forest/70">Satisfaction Rate</div>
            </div>
            <div className="bg-white/70 border border-sand rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm">
              <div className="font-display text-2xl text-forest font-bold">50+</div>
              <div className="text-xs text-forest/70">Hospital Partners</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <motion.img
            loading="lazy"
            alt="nurse portrait"
            src="https://cdn.cosmos.so/d4a616e2-b7d7-477e-a4dc-d36c1169b283?format=jpeg"
            className="rounded-3xl object-cover object-center h-[520px] ml-32 ring-1 ring-white/20 shadow-[0_24px_64px_rgba(27,67,50,0.20)]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
  className="absolute -top-8 right-24 bg-[#C25B3F] rounded-2xl px-4 py-3 text-right"
  initial={{ opacity: 0, y: 18, rotate: 10}}
  animate={{ opacity: 1, y: 0, rotate: 10}}
  transition={{ delay: 0.5, duration: 0.5 }}
>
            <p className="text-white/60 text-xs uppercase tracking-widest  font-body font-medium">This Week</p>
            <p className="text-white font-display text-2xl font-bold">17 placements</p>
          </motion.div>
          <motion.div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-sand rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm "
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="text-forest font-medium text-sm font-body">Application reviewed in 48hrs</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

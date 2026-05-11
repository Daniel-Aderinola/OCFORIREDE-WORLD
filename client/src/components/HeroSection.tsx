import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const headline = 'Your Next Nursing Career Starts Here'

const container = { visible: { transition: { staggerChildren: 0.06 } } }
const word = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function HeroSection(){
  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.45)
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 18, mass: 0.3 })
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 18, mass: 0.3 })
  const patternX = useTransform(smoothX, [0, 1], [-32, 32])
  const patternY = useTransform(smoothY, [0, 1], [-28, 28])
  const glowX = useTransform(smoothX, [0, 1], [-48, 48])
  const glowY = useTransform(smoothY, [0, 1], [-42, 42])

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()

    if (!rect.width || !rect.height) return

    const nextX = (event.clientX - rect.left) / rect.width
    const nextY = (event.clientY - rect.top) / rect.height

    pointerX.set(Math.min(1, Math.max(0, nextX)))
    pointerY.set(Math.min(1, Math.max(0, nextY)))
  }

  const resetPointer = () => {
    pointerX.set(0.5)
    pointerY.set(0.45)
  }

  return (
    <section
      className="min-h-screen w-full relative overflow-hidden bg-transparent flex items-center px-6 lg:px-20 pt-28 pb-16"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(27,67,50,0.26)_1px,transparent_0)] bg-[length:24px_24px] opacity-80"
          style={{ x: patternX, y: patternY }}
        />
        <motion.div
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-cream via-cream/60 to-transparent blur-3xl opacity-90"
          style={{ x: glowX, y: glowY }}
        />
        <motion.div
          className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-terra/20 via-terra/10 to-transparent blur-3xl opacity-85"
          style={{ x: glowX, y: glowY }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-forest/8 via-forest/12 to-transparent blur-2xl opacity-60"
          style={{ x: glowX, y: glowY }}
        />
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="relative">
          <span className="inline-block bg-white/70 border border-sand rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-forest font-medium shadow-sm">Trusted by nurses across Africa & UK</span>
          <motion.h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest font-bold leading-tight mt-6 overflow-hidden" initial="hidden" animate="visible" variants={container}>
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
          <motion.p className="mt-6 text-base md:text-lg text-forest/70" initial={{opacity:0,y:12}} animate={{opacity:1,y:0,transition:{delay:0.6}}}>Submit your CV and get matched with top healthcare employers — or book an expert consultant to prepare your application and ace your interview.</motion.p>
          <motion.div className="mt-6 flex flex-col sm:flex-row gap-3 md:gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link to="/submit-cv" className="inline-block bg-forest text-cream rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium shadow-sm hover:shadow-lg hover:bg-forest/90">Submit Your CV</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link to="/book-consultant" className="inline-block border border-sand text-forest rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium bg-white/60 hover:bg-white/80 hover:shadow-md">▶ Book a Consultant</Link>
            </motion.div>
          </motion.div>
          <div className="mt-6 flex gap-2 lg:gap-4 flex-nowrap overflow-x-auto">
            <div className="bg-white/70 border border-sand rounded-2xl px-3 py-2 lg:px-5 lg:py-3 flex items-center gap-2 lg:gap-3 shadow-sm shrink-0">
              <div className="font-display text-lg lg:text-2xl text-forest font-bold">2,400+</div>
              <div className="text-xs text-forest/70">Nurses Placed</div>
            </div>
            <div className="bg-white/70 border border-sand rounded-2xl px-3 py-2 lg:px-5 lg:py-3 flex items-center gap-2 lg:gap-3 shadow-sm shrink-0">
              <div className="font-display text-lg lg:text-2xl text-forest font-bold">98%</div>
              <div className="text-xs text-forest/70">Satisfaction Rate</div>
            </div>
            <div className="bg-white/70 border border-sand rounded-2xl px-3 py-2 lg:px-5 lg:py-3 flex items-center gap-2 lg:gap-3 shadow-sm shrink-0">
              <div className="font-display text-lg lg:text-2xl text-forest font-bold">50+</div>
              <div className="text-xs text-forest/70">Hospital Partners</div>
            </div>
          </div>
          <motion.div
            className="lg:hidden mt-10 relative rounded-3xl overflow-hidden ring-2 ring-forest/30 shadow-[0_24px_60px_rgba(27,67,50,0.18)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none z-10" />
            <img
              loading="lazy"
              alt="nurse professional"
              src="../../images/nurse vest.jpg"
              className="w-full h-64 object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="hidden lg:block relative">
          <motion.img
            loading="lazy"
            alt="nurse portrait"
            src="https://cdn.cosmos.so/d4a616e2-b7d7-477e-a4dc-d36c1169b283?format=jpeg"
            className="rounded-3xl object-cover object-center h-[520px] ml-32 ring-2 ring-terra/30 shadow-[0_32px_80px_rgba(27,67,50,0.28)]"
            whileHover={{ scale: 1.03, y: -6, boxShadow: "0 40px 100px rgba(27, 67, 50, 0.35)" }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute -top-8 right-24 bg-gradient-to-br from-terra via-[#C25B3F] to-terra/80 rounded-2xl px-4 py-3 text-right shadow-lg border border-terra/20"
            initial={{ opacity: 0, y: 18, rotate: 10}}
            animate={{ opacity: 1, y: 0, rotate: 10}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-white/70 text-xs uppercase tracking-widest font-body font-bold">This Week</p>
            <p className="text-white font-display text-3xl font-bold">17 placements</p>
          </motion.div>
          <motion.div 
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-white to-cream border-2 border-sand rounded-2xl px-5 py-3 flex items-center gap-3 shadow-[0_16px_48px_rgba(27,67,50,0.16)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-forest/20 to-terra/10 flex items-center justify-center flex-shrink-0 border border-forest/30"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </motion.div>
            <p className="text-forest font-bold text-sm font-body">Application reviewed in 48hrs</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

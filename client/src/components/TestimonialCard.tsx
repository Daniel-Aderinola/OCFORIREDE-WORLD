import React from 'react'
import { motion } from 'framer-motion'

interface Props { avatar: string; name: string; specialty: string; quote: string }

export default function TestimonialCard({ avatar, name, specialty, quote }: Props){
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(27,67,50,0.08)] border border-sand transition-all duration-300"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <img src={avatar} loading="lazy" alt={`${name} avatar`} className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover ring-2 ring-sand shrink-0" />
        <div className="min-w-0">
          <div className="font-display text-base md:text-lg text-forest font-semibold">{name}</div>
          <div className="text-xs md:text-sm text-forest/70">{specialty}</div>
        </div>
      </div>
      <p className="mt-4 italic text-xs md:text-sm text-forest/75">"{quote}"</p>
      <div className="mt-4">{Array.from({length:5}).map((_,i)=>(<span key={i} className="text-terra">★</span>))}</div>
    </motion.div>
  )
}

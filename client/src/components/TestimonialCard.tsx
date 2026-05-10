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
      <div className="flex items-center gap-4">
        <img src={avatar} loading="lazy" alt={`${name} avatar`} className="w-12 h-12 rounded-full object-cover ring-2 ring-sand" />
        <div>
          <div className="font-display text-lg text-forest font-semibold">{name}</div>
          <div className="text-sm text-forest/70">{specialty}</div>
        </div>
      </div>
      <p className="mt-4 italic text-forest/75">"{quote}"</p>
      <div className="mt-4">{Array.from({length:5}).map((_,i)=>(<span key={i} className="text-terra">★</span>))}</div>
    </motion.div>
  )
}

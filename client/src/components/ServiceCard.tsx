import React from 'react'
import { motion } from 'framer-motion'

interface Props { title: string; body: string; icon?: React.ReactNode; link?: string }

export default function ServiceCard({ title, body, icon, link }: Props){
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_12px_30px_rgba(27,67,50,0.08)] border border-sand transition-all duration-300"
    >
      <div className="w-10 md:w-12 h-10 md:h-12 bg-cream border border-sand rounded-xl flex items-center justify-center text-forest">{icon}</div>
      <h3 className="font-display text-lg md:text-2xl text-forest mt-4 mb-2">{title}</h3>
      <p className="font-body text-forest/70 text-sm leading-relaxed">{body}</p>
      {link && <a className="text-terra hover:text-terra/80 font-medium text-sm mt-4 inline-block transition" href={link}>Explore →</a>}
    </motion.article>
  )
}

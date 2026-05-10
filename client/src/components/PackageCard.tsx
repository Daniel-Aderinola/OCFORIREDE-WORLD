import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedButton } from './AnimatedButton'

interface Props { name: string; duration: string; price: string; description: string; features: string[]; featured?: boolean; onSelect?: ()=>void }

export default function PackageCard({ name, duration, price, description, features, featured, onSelect }: Props){
  return (
    <motion.div 
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={featured ? 'bg-forest text-cream p-8 rounded-2xl shadow-[0_16px_40px_rgba(27,67,50,0.14)] transform scale-105' : 'bg-white p-8 rounded-2xl border border-sand shadow-[0_12px_30px_rgba(27,67,50,0.08)]'}
    >
      {featured && <div className="bg-terra text-white text-xs rounded-full px-3 py-1 inline-block">Most Popular</div>}
      <h3 className={`font-display text-2xl mt-4 ${featured ? 'text-cream' : 'text-forest'}`}>{name}</h3>
      <div className={`mt-2 text-sm ${featured ? 'text-cream/80' : 'text-forest/70'}`}>{duration}</div>
      <div className={`font-display text-4xl mt-4 ${featured ? 'text-cream' : 'text-forest'}`}>{price}</div>
      <p className={`mt-4 text-sm ${featured ? 'text-cream/75' : 'text-forest/70'}`}>{description}</p>
      <ul className={`mt-4 space-y-2 ${featured ? 'text-cream/80' : 'text-forest/70'}`}>
        {features.map((f,i)=>(<li key={i} className={`text-sm flex items-center gap-2`}><span className="text-terra">✓</span> {f}</li>))}
      </ul>
      <AnimatedButton onClick={onSelect} className={featured ? 'bg-terra hover:bg-terra/90 text-white rounded-full px-4 py-2 mt-6 w-full' : 'bg-forest text-cream rounded-full px-4 py-2 mt-6 w-full'}>Select This Package →</AnimatedButton>
    </motion.div>
  )
}

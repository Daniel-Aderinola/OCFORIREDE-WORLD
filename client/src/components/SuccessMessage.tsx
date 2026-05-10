import React from 'react'
import { motion } from 'framer-motion'

export default function SuccessMessage({ title='Success', body='Done.' }: { title?: string; body?: string }){
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto shadow-[0_12px_30px_rgba(27,67,50,0.08)] border border-sand">
      <motion.div 
        className="text-6xl flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        ✅
      </motion.div>
      <h2 className="font-display text-3xl text-forest mt-4">{title}</h2>
      <p className="mt-2 text-forest/70">{body}</p>
    </motion.div>
  )
}

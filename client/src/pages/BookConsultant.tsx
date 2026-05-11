import React, { useRef, useState } from 'react'
import PackageCard from '../components/PackageCard'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import api from '../utils/api'
import { AnimatedButton } from '../components/AnimatedButton'

const packages = [
  { name: 'Basic', duration: '45 minutes', price: '₦15,000 / £25', description: 'We rewrite and optimise your CV', features: ['CV rewrite','ATS optimisation'] },
  { name: 'Standard', duration: '60 minutes', price: '₦25,000 / £40', description: 'Mock interview + detailed feedback', features: ['Mock interview','Live feedback'], featured: true },
  { name: 'Premium', duration: '90 minutes', price: '₦40,000 / £65', description: 'Full package with follow-up', features: ['CV + Interview','7-day support'] }
]

export default function BookConsultant(){
  const formRef = useRef<HTMLFormElement | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const { register, handleSubmit, reset } = useForm()

  function onSelect(pkgName: string){
    setSelected(pkgName)
    setTimeout(()=> formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150)
  }

  async function onSubmit(data:any){
    if(selected) data.packageName = selected
    try{ await api.post('/api/bookings', data) ; reset(); alert('Booking confirmed — check your email.') }
    catch(e){ console.error(e); alert('Booking failed') }
  }

  return (
    <motion.main className="bg-transparent pt-32 px-6 md:px-12 lg:px-20 pb-16" initial={{opacity:0}} animate={{opacity:1}}>
      <div className="container mx-auto">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest">Book a Consultation Session</h1>
        <p className="mt-4 text-base md:text-lg text-forest/70">Work 1-on-1 with a nursing career expert. Choose the package that fits your needs.</p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p)=>(
            <PackageCard key={p.name} name={p.name} duration={p.duration} price={p.price} description={p.description} features={p.features} featured={!!p.featured} onSelect={()=>onSelect(p.name)} />
          ))}
        </section>

        <section className="mt-12 bg-white border border-sand rounded-2xl p-6 md:p-8 lg:p-10 shadow-[0_12px_30px_rgba(27,67,50,0.08)]">          <h2 className="font-display text-2xl md:text-3xl text-forest">Confirm your booking</h2>
          <form ref={formRef} className="mt-6 grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input {...register('fullName')} placeholder="Full name" className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest" />
            <input {...register('email')} placeholder="Email address" className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest" />
            <input {...register('phone')} placeholder="Phone number" className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest" />
            <select {...register('packageName')} value={selected || undefined} onChange={()=>{}} className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest">
              <option value="">Select package</option>
              {packages.map(p=>(<option key={p.name} value={p.name}>{p.name}</option>))}
            </select>
            <input {...register('date')} type="date" className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest" />
            <select {...register('timeSlot')} className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest">
              <option>Morning (9am–12pm)</option>
              <option>Afternoon (12pm–4pm)</option>
              <option>Evening (4pm–7pm)</option>
            </select>
            <div>
              <label className="block text-sm text-forest/80 font-medium mb-2">Session Format</label>
              <div className="flex gap-2 flex-wrap">
                <label className="bg-cream border border-sand px-4 py-2 rounded-full cursor-pointer transition"><input {...register('format')} type="radio" value="Zoom" className="mr-2" /> Zoom</label>
                <label className="bg-cream border border-sand px-4 py-2 rounded-full cursor-pointer transition"><input {...register('format')} type="radio" value="Phone" className="mr-2" /> Phone</label>
                <label className="bg-cream border border-sand px-4 py-2 rounded-full cursor-pointer transition"><input {...register('format')} type="radio" value="WhatsApp" className="mr-2" /> WhatsApp</label>
              </div>
            </div>
            <textarea {...register('notes')} placeholder="What do you need help with?" className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest" rows={5}></textarea>
            <AnimatedButton className="bg-forest text-cream rounded-full py-3 font-medium hover:bg-forest/90" type="submit">Confirm My Booking →</AnimatedButton>
          </form>
        </section>
      </div>
    </motion.main>
  )
}

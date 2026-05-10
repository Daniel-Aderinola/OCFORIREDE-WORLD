import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '../utils/api'
import { CVSubmission } from '../types'
import SuccessMessage from '../components/SuccessMessage'
import Spinner from '../components/Spinner'
import { motion } from 'framer-motion'

const schema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  specialty: z.string(),
  yearsExperience: z.string(),
  qualification: z.string(),
  currentLocation: z.string(),
  preferredLocation: z.string().optional(),
  availableFrom: z.string().optional(),
  notes: z.string().optional()
})

export default function SubmitCV(){
  const [submitting,setSubmitting] = useState(false)
  const [success,setSuccess] = useState(false)
  const [file,setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const { register, handleSubmit, formState:{errors} } = useForm<CVSubmission>({ resolver: zodResolver(schema) })

  async function onSubmit(data: CVSubmission){
    setSubmitting(true)
    try{
      const form = new FormData()
      Object.entries(data).forEach(([k,v])=>{ if(v) form.append(k, String(v)) })
      if(file) form.append('cv', file)
      await api.post('/api/cv', form, { headers: { 'Content-Type': 'multipart/form-data' } })
      setSuccess(true)
    }catch(err){
      console.error(err)
    }finally{ setSubmitting(false) }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>){
    const f = e.target.files?.[0]
    if(!f) return
    const allowed = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if(!allowed.includes(f.type)){
      alert('Only PDF or DOC files allowed')
      return
    }
    if(f.size > 5 * 1024 * 1024){ alert('File too large (max 5MB)'); return }
    setFile(f)
  }
  function removeFile(){ setFile(null); if(fileInputRef.current) fileInputRef.current.value = '' }

  if(success) return (
    <div className="container mx-auto px-6 py-20">
      <SuccessMessage title="CV Submitted Successfully!" body="We'll be in touch within 48 hours." />
    </div>
  )

  return (
    <motion.main className="bg-transparent" initial={{opacity:0}} animate={{opacity:1}}>
      <section className="pt-32 pb-16 px-6 lg:px-20 bg-cream border-b border-sand">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <div className="text-sm text-forest/70">Home / Submit CV</div>
            <h1 className="font-display text-6xl text-forest mt-4">Submit Your CV</h1>
            <p className="mt-4 text-forest/70">Fill in your details and upload your CV. Our team will review it within 48 hours and connect you with the right employers.</p>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm text-forest/80 font-medium">Full Name</label>
                <input {...register('fullName')} className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest" />
                {errors.fullName && <div className="text-terra text-xs mt-1">{errors.fullName.message as any}</div>}
              </div>
              <div>
                <label className="block text-sm text-forest/80 font-medium">Email Address</label>
                <input {...register('email')} className="w-full rounded-2xl border border-sand bg-white px-4 py-3 text-forest" />
                {errors.email && <div className="text-terra text-xs mt-1">{errors.email.message as any}</div>}
              </div>
              <div>
                <label className="block text-sm text-forest/80 font-medium">Upload CV</label>
                <div className="rounded-2xl p-6 text-center cursor-pointer transition-all bg-white border-2 border-dashed border-sand" onMouseEnter={(e)=>{
                  e.currentTarget.style.background = 'rgba(27, 67, 50, 0.12)'
                  e.currentTarget.style.borderColor = 'rgba(27, 67, 50, 0.50)'
                  e.currentTarget.style.boxShadow = '0 0 0 4px rgba(27, 67, 50, 0.08)'
                }} onMouseLeave={(e)=>{
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.borderColor = 'rgba(27, 67, 50, 0.25)'
                  e.currentTarget.style.boxShadow = 'none'
                }} onClick={()=>fileInputRef.current?.click()}>
                  {!file ? (
                    <div>
                      <div className="mb-2 text-forest">Drag your CV here or click to browse</div>\n                      <div className="text-xs text-forest/70">PDF or DOC up to 5MB</div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <div className="text-terra text-lg">✓</div>
                      <div className="text-sm text-forest">{file.name}</div>
                      <button type="button" onClick={(e)=>{e.stopPropagation(); removeFile()}} className="text-terra/80 hover:text-terra ml-4 text-sm transition\">Remove</button>
                    </div>
                  )}
                </div>
                <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden" />
              </div>
              <div>
                <button type="submit" disabled={submitting} className="bg-forest text-cream rounded-full w-full py-4 flex items-center justify-center font-medium">
                  {submitting? <><Spinner /> <span className="ml-3">Submitting...</span></>: 'Submit CV'}
                </button>
              </div>
            </form>
          </div>
          <aside className="sticky top-28">
            <div className="bg-forest text-cream rounded-2xl p-8">
              <h3 className="font-semibold">What happens next?</h3>
              <ol className="mt-4 text-sm space-y-2 text-cream/80">
                <li>1. CV reviewed</li>
                <li>2. Matched to employers</li>
                <li>3. You're contacted within 48 hours</li>
              </ol>
            </div>
            <div className="bg-white rounded-2xl p-4 mt-6 text-center text-sm text-forest/80 border border-sand">              🔒 Confidential · ✅ Expert Review · ⚡ 48hr Response
            </div>
          </aside>
        </div>
      </section>
    </motion.main>
  )
}

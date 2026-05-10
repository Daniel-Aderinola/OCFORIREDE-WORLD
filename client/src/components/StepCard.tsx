import React from 'react'

interface Props { step: number; title: string; body: string }

export default function StepCard({ step, title, body }: Props){
  return (
    <div className="bg-offwhite rounded-2xl p-6 text-center relative">
      <div className="font-display text-8xl text-forest/10 absolute -top-6 left-1/2 -translate-x-1/2">{step}</div>
      <div className="mt-12">
        <h4 className="font-display text-2xl text-forest">{title}</h4>
        <p className="mt-3 text-bark text-sm">{body}</p>
      </div>
    </div>
  )
}

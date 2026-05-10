import React from 'react'

export default function MarqueeTicker(){
  return (
    <div className="py-4 overflow-hidden border-t border-b border-white/10" style={{
      background: 'rgba(27, 67, 50, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)'
    }}>
      <div className="whitespace-nowrap animate-marquee text-cream/80 uppercase tracking-widest font-body text-sm">
        <div className="inline-block pr-10">CV SUBMISSION ✦ JOB PLACEMENT ✦ INTERVIEW COACHING ✦ APPLICATION SUPPORT ✦ CAREER GROWTH ✦ RELOCATION SUPPORT ✦</div>
        <div className="inline-block pl-6">CV SUBMISSION ✦ JOB PLACEMENT ✦ INTERVIEW COACHING ✦ APPLICATION SUPPORT ✦ CAREER GROWTH ✦ RELOCATION SUPPORT ✦</div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} .animate-marquee{display:flex;gap:2rem;animation:marquee 30s linear infinite}`}</style>
    </div>
  )
}

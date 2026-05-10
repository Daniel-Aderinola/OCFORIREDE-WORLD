import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatedButton, AnimatedLink } from './AnimatedButton'

export default function Footer(){
  return (
    <footer className="mt-20 bg-forest text-cream">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="font-display text-xl text-cream">NurseConnect</h3>
          <p className="mt-2 text-sm text-cream/60">Empowering nurses to build the careers they deserve.</p>
        </div>
        <div>
          <h4 className="font-semibold text-cream/90">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-cream/60">
            <li><Link to="/" className="hover:text-cream transition">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:text-cream transition">How It Works</Link></li>
            <li><Link to="/submit-cv" className="hover:text-cream transition">Submit CV</Link></li>
            <li><Link to="/book-consultant" className="hover:text-cream transition">Book a Consultant</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-cream/90">Contact</h4>
          <p className="mt-3 text-sm text-cream/60">hello@nurseconnect.com</p>
          <p className="text-sm text-cream/60">+234 800 000 0000</p>
        </div>
        <div>
          <h4 className="font-semibold text-cream/90">Newsletter</h4>
          <div className="mt-3 flex gap-2">
            <input className="rounded-full px-4 py-2 bg-cream text-forest placeholder-forest/40" placeholder="Email address" />
            <AnimatedButton className="bg-terra hover:bg-terra/90 text-white rounded-full px-4 py-2">Subscribe</AnimatedButton>
          </div>
        </div>
      </div>
      <div className="text-cream/60 text-center py-4 text-sm border-t border-white/10">© 2024 NurseConnect. All rights reserved.</div>
    </footer>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function HowItWorks(){
  return (
    <motion.main className="bg-transparent pt-32 px-6 lg:px-20 pb-20" initial={{opacity:0}} animate={{opacity:1}}>
      <div className="container mx-auto">
        <section className="bg-white rounded-2xl p-12 text-center mb-16 border border-sand shadow-[0_12px_30px_rgba(27,67,50,0.08)]">
          <h1 className="font-display text-5xl text-forest">We believe every nurse deserves a career that reflects their skill, dedication, and ambition.</h1>
          <p className="mt-4 text-forest/70">From CV submission to consulting, we support every step of your journey.</p>
        </section>
                
        <section className="mt-12">
          <h2 className="font-display text-4xl text-forest mb-8">Our Process</h2>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {step: '1', title: 'Upload Your CV', desc: 'Share your professional profile and career goals'},
              {step: '2', title: 'Expert Review', desc: 'Our team thoroughly reviews your qualifications'},
              {step: '3', title: 'Match & Connect', desc: 'We connect you with the right opportunities'},
              {step: '4', title: 'Land Your Role', desc: 'Secure your position with top employers'}
            ].map((item)=>(
              <motion.div key={item.step} className="bg-white rounded-2xl p-8 border border-sand shadow-[0_12px_30px_rgba(27,67,50,0.08)]" whileHover={{y:-4}}>
                <div className="w-14 h-14 rounded-full bg-cream border border-sand flex items-center justify-center font-display text-2xl text-forest font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="font-display text-xl text-forest mt-4">{item.title}</h3>
                <p className="text-forest/70 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
                
        <section className="mt-16">
          <h2 className="font-display text-4xl text-forest mb-8">Meet Our Consultants</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {name: 'Dr. Chioma Okafor', title: 'Chief Nursing Officer', bio: '15+ years in healthcare recruitment and career coaching.'},
              {name: 'Zainab Hassan', title: 'Career Consultant', bio: 'Specializes in UK and international nursing placements.'},
              {name: 'David Ogunleye', title: 'Interview Coach', bio: 'Expert in preparing nurses for high-stakes interviews.'}
            ].map((person)=>(
              <motion.div key={person.name} className="bg-white rounded-2xl overflow-hidden border border-sand shadow-[0_12px_30px_rgba(27,67,50,0.08)]" whileHover={{y:-4}}>
                <div className="h-40 bg-gradient-to-br from-forest/20 to-terra/20"></div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-forest">{person.name}</h3>
                  <p className="text-terra text-sm font-medium">{person.title}</p>
                  <p className="text-forest/70 text-sm mt-3">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
                
        <section className="mt-16">
          <h2 className="font-display text-4xl text-forest mb-8">Why NurseConnect</h2>
          <div className="bg-white rounded-2xl p-8 space-y-3 border border-sand shadow-[0_12px_30px_rgba(27,67,50,0.08)]">
            {[
              'Vetted healthcare employers worldwide',
              'Expert career consultants with 10+ years experience',
              'Personalized interview preparation',
              'CV optimization for international standards',
              '48-hour expert review guarantee',
              'Confidential and secure process'
            ].map((feature)=>(
              <div key={feature} className="flex gap-3 items-start">
                <span className="text-terra text-lg mt-0.5">✓</span>
                <span className="text-forest/80 font-body">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  )
}

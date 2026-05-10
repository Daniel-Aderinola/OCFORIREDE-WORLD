import React from 'react'

export default function StatsBadge({ number, label }:{ number: string; label: string }){
  return (
    <div className="bg-offwhite rounded-xl shadow-sm px-5 py-3 flex gap-3 items-center">
      <div className="font-display text-2xl text-forest font-bold">{number}</div>
      <div className="text-xs text-bark">{label}</div>
    </div>
  )
}

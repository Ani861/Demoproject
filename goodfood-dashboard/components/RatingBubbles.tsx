"use client"

import React from 'react'

export default function RatingBubbles({ ratings }: { ratings: { label: string; value: number; color: string }[] }) {
  return (
    <div className="d-flex gap-3 align-items-center">
      {ratings.map((r) => (
        <div key={r.label} className="rating-bubble text-center">
          <div
            className="bubble"
            style={{ ['--bubble-color' as any]: r.color, ['--bubble-val' as any]: r.value }}
          >
            <div className="bubble-inner">
              <div className="bubble-text">{r.value}%</div>
            </div>
          </div>
          <div className="small text-muted mt-2">{r.label}</div>
        </div>
      ))}
    </div>
  )
}

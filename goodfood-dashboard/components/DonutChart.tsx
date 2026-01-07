"use client"

import React, { useRef, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

if (typeof window !== 'undefined') {
  ChartJS.register(ArcElement, Tooltip, Legend)
} 

export default function DonutChart({ labels, dataPoints }: { labels: string[]; dataPoints: number[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const rect = containerRef.current?.getBoundingClientRect()
    console.log('DonutChart container size', rect)
    const canvas = containerRef.current?.querySelector('canvas')
    console.log('DonutChart canvas element', canvas)
  }, [])

  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        backgroundColor: ['#5062F9', '#8F9DFB', '#E9ECEF'],
        hoverOffset: 8,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  }

  return (
    <div className="card shadow-sm p-3 text-center">
      <small className="text-muted">Order Time</small>
      <div style={{ height: 160 }} className="my-2">
        <Doughnut data={data} options={options} />
      </div>
      <div className="d-flex justify-content-around small text-muted">
        {labels.map((l, i) => (
          <div key={l}>
            <div className="legend-dot" style={{ background: (data.datasets[0].backgroundColor as string[])[i] }} />
            <div>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

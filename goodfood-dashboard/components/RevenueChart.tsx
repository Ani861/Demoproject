"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React, { useRef, useEffect } from 'react'

if (typeof window !== 'undefined') {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
} 

export default function RevenueChart({ labels, series }: { labels: string[]; series: number[][] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const rect = containerRef.current?.getBoundingClientRect()
    console.log('RevenueChart container size', rect)
    const canvas = containerRef.current?.querySelector('canvas')
    console.log('RevenueChart canvas element', canvas)
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: 'Last 6 days',
        data: series[0],
        backgroundColor: '#5062F9',
        borderRadius: 4,
      },
      {
        label: 'Last Week',
        data: series[1],
        backgroundColor: '#E9ECEF',
        borderRadius: 4,
      },
    ],
  }

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false }, ticks: { beginAtZero: true } },
    },
  }

  return (
    <div className="card shadow-sm p-3">
      <small className="text-muted">Sales from 1–12 Dec, 2020</small>
      <div style={{ height: 220 }} ref={containerRef} className="chart-debug">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

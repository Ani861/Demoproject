"use client"

import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export default function SmallLineChart({ labels, dataPoints }: { labels: string[]; dataPoints: number[] }) {
  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        borderColor: '#5062F9',
        backgroundColor: 'rgba(80,98,249,0.08)',
        tension: 0.35,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  }

  return (
    <div className="card shadow-sm p-3">
      <small className="text-muted">Sales from 1–6 Dec, 2020</small>
      <div style={{ height: 100 }} className="my-2">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

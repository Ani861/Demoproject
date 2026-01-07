"use client"

import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js'

if (typeof window !== 'undefined') {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)
} 

export default function OrderSummaryCard({
  total,
  change,
  labels,
  dataPoints,
}: {
  total: number
  change: number
  labels: string[]
  dataPoints: number[]
}) {
  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        borderColor: change < 0 ? '#FF6B6B' : '#2ECC71',
        backgroundColor: change < 0 ? 'rgba(255,107,107,0.08)' : 'rgba(46,204,113,0.08)',
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
    <div className="card shadow-sm p-3 order-summary">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          <small className="text-muted">Order</small>
          <h4 className="mb-0">{total.toLocaleString()}</h4>
        </div>
        <div className="text-end">
          <button className="btn btn-outline-primary btn-sm">View Report</button>
        </div>
      </div>

      <div className="d-flex align-items-center mb-2">
        <div className={`me-3 ${change < 0 ? 'text-danger' : 'text-success'}`}>
          {change < 0 ? '↓' : '↑'} {Math.abs(change)}% vs last week
        </div>
      </div>

      <div style={{ height: 90 }}>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

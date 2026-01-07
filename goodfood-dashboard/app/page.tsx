'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import DashboardCard from '@/components/DashboardCard'
import OrderList from '@/components/OrderList'
import { revenueData, orders, revenueChart, orderTime, smallLine, ratings, orderSummary } from '@/data/mock'
import RevenueChart from '@/components/RevenueChart'
import DonutChart from '@/components/DonutChart'
import SmallLineChart from '@/components/SmallLineChart'
import RatingBubbles from '@/components/RatingBubbles'
import OrderSummaryCard from '@/components/OrderSummaryCard'

export default function DashboardPage() {
  const [search, setSearch] = useState('')

  const filteredOrders = orders.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="d-flex">
      <Sidebar />

      <main className="flex-grow-1 p-4">
        <Header onSearch={setSearch} />

        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <DashboardCard
              title="Revenue"
              value={revenueData.total}
              subtitle={`↑ ${revenueData.growth}% vs last week`}
            />
          </div>

          <div className="col-md-4 mb-3">
            <DashboardCard
              title="Orders"
              value={orderSummary.total.toLocaleString()}
              subtitle={`${orderSummary.change < 0 ? '↓' : '↑'} ${Math.abs(orderSummary.change)}% vs last week`}
            />
          </div>

          <div className="col-md-4 mb-3">
            <DashboardCard
              title="Avg Rating"
              value={`${Math.round(ratings.reduce((s, r) => s + r.value, 0) / ratings.length)}%`}
              subtitle="Based on recent reviews"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-8 mb-3">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <small className="text-muted">Revenue</small>
                <h3 className="mb-0">{revenueData.total}</h3>
                <div className="text-success">↑ {revenueData.growth}% vs last week</div>
              </div>
              <div>
                <button className="btn btn-outline-primary btn-sm">View Report</button>
              </div>
            </div>

            <RevenueChart labels={revenueChart.labels} series={revenueChart.series} />
          </div>

          <div className="col-lg-4">
            <DonutChart labels={orderTime.labels} dataPoints={orderTime.data} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <h6>Your Rating</h6>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
              <RatingBubbles ratings={ratings} />
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <OrderList orders={filteredOrders} />
          </div>

          <div className="col-md-4 mb-3">
            <OrderSummaryCard
              total={orderSummary.total}
              change={orderSummary.change}
              labels={smallLine.labels}
              dataPoints={smallLine.data}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

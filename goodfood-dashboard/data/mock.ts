export const revenueData = {
  total: 'IDR 7.852.000',
  growth: 2.1,
}

export const orders = [
  { id: 1, name: 'Fresh Salad Bowl', price: 45000, image: '/images/food1.svg' },
  { id: 2, name: 'Chicken Noodles', price: 75000, image: '/images/food2.svg' },
  { id: 3, name: 'Smoothie Fruits', price: 45000, image: '/images/food3.svg' },
  { id: 4, name: 'Hot Chicken Wings', price: 45000, image: '/images/food4.svg' },
]

export const revenueChart = {
  labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  series: [
    [30, 40, 35, 50, 45, 60, 55, 50, 60, 65, 70, 80], // last 6 days
    [20, 25, 28, 30, 35, 40, 38, 35, 40, 42, 45, 50], // last week
  ],
}

export const orderTime = {
  labels: ['Afternoon', 'Evening', 'Morning'],
  data: [40, 32, 28],
}

export const smallLine = {
  labels: ['01', '02', '03', '04', '05', '06'],
  data: [12, 15, 10, 18, 14, 22],
}

export const orderSummary = {
  total: 2568,
  change: -2.1,
}

export const ratings = [
  { label: 'Hygiene', value: 85, color: '#8F9DFB' },
  { label: 'Food Taste', value: 85, color: '#F6A623' },
  { label: 'Packaging', value: 92, color: '#4EC9D9' },
]

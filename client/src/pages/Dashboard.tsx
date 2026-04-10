import { useEffect, useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalClients: 0,
    totalDeals: 0,
    totalTasks: 0,
    totalEmployees: 0,
    revenueThisMonth: 0,
    conversionRate: 0,
  })

  useEffect(() => {
    // Fetch dashboard stats from API
    const fetchStats = async () => {
      try {
        const apiUrl = (import.meta.env.VITE_API_URL as string) || 'https://riwa-crm-api.onrender.com'
        const response = await fetch(`${apiUrl}/dashboard/stats`)
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
        // Set dummy data for now
        setStats({
          totalClients: 24,
          totalDeals: 12,
          totalTasks: 48,
          totalEmployees: 8,
          revenueThisMonth: 125000,
          conversionRate: 28,
        })
      }
    }
    fetchStats()
  }, [])

  const chartData = [
    { month: 'Jan', revenue: 45000, deals: 8 },
    { month: 'Feb', revenue: 52000, deals: 10 },
    { month: 'Mar', revenue: 48000, deals: 9 },
    { month: 'Apr', revenue: 61000, deals: 12 },
    { month: 'May', revenue: 55000, deals: 11 },
    { month: 'Jun', revenue: 67000, deals: 14 },
  ]

  const StatCard = ({ label, value, icon }: { label: string; value: string | number; icon: string }) => (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard label="Total Clients" value={stats.totalClients} icon="👥" />
        <StatCard label="Active Deals" value={stats.totalDeals} icon="💼" />
        <StatCard label="Pending Tasks" value={stats.totalTasks} icon="✓" />
        <StatCard label="Team Members" value={stats.totalEmployees} icon="👨‍💼" />
        <StatCard label="Revenue (This Month)" value={`$${stats.revenueThisMonth.toLocaleString()}`} icon="💰" />
        <StatCard label="Conversion Rate" value={`${stats.conversionRate}%`} icon="📈" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0066FF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Deals Chart */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Deals Closed</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="deals" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'New deal created', client: 'Acme Corp', time: '2 hours ago' },
            { action: 'Task completed', client: 'Tech Solutions', time: '4 hours ago' },
            { action: 'Client contacted', client: 'Global Industries', time: '6 hours ago' },
            { action: 'Document uploaded', client: 'StartUp Inc', time: '1 day ago' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 border-b last:border-b-0">
              <div>
                <p className="font-medium text-gray-900">{item.action}</p>
                <p className="text-sm text-gray-600">{item.client}</p>
              </div>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

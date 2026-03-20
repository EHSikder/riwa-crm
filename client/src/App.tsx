import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Deals from './pages/Deals'
import Tasks from './pages/Tasks'
import Employees from './pages/Employees'
import Documents from './pages/Documents'
import Layout from './components/Layout'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </Layout>
    </Router>
  )
}

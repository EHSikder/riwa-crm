import { useState } from 'react'
import { Plus, Search } from 'lucide-react'

export default function Clients() {
  const [clients] = useState([
    { id: 1, name: 'Acme Corp', industry: 'Technology', status: 'Active', lastContact: '2024-03-15' },
    { id: 2, name: 'Global Industries', industry: 'Manufacturing', status: 'Active', lastContact: '2024-03-10' },
    { id: 3, name: 'Tech Solutions', industry: 'Software', status: 'Prospect', lastContact: '2024-03-05' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
        <button className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Add Client</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search clients..."
          className="input-field pl-10"
        />
      </div>

      {/* Clients Table */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Company Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Industry</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Last Contact</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">{client.name}</td>
                <td className="py-3 px-4 text-gray-600">{client.industry}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">{client.lastContact}</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

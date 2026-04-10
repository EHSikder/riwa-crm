import { useState, useEffect } from 'react'
import { Plus, Search } from 'lucide-react'

interface Client {
  id: string
  name: string
  industry?: string
  status?: string
  lastContact?: string
}

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const apiUrl = (import.meta.env.VITE_API_URL as string) || 'https://riwa-crm-api.onrender.com'
        const response = await fetch(`${apiUrl}/clients`)
        if (response.ok) {
          const data = await response.json()
          setClients(data || [])
        } else {
          console.error('Failed to fetch clients:', response.status)
          setClients([])
        }
      } catch (error) {
        console.error('Error fetching clients:', error)
        setClients([])
      } finally {
        setLoading(false)
      }
    }

    fetchClients()
  }, [])

  const filteredClients = clients.filter(client =>
    client.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Clients Table */}
      <div className="card overflow-x-auto">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading clients...</div>
        ) : filteredClients.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No clients found</div>
        ) : (
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
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900">{client.name}</td>
                  <td className="py-3 px-4 text-gray-600">{client.industry || '-'}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {client.status || 'Unknown'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{client.lastContact || '-'}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

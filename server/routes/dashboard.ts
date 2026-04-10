import { Router, Request, Response } from 'express'
import { supabase } from '../../src/utils/supabase'

const router = Router()

router.get('/stats', async (req: Request, res: Response) => {
  try {
    const [clients, deals, tasks, employees] = await Promise.all([
      supabase.from('clients').select('id', { count: 'exact' }),
      supabase.from('deals').select('id', { count: 'exact' }),
      supabase.from('tasks').select('id', { count: 'exact' }),
      supabase.from('employees').select('id', { count: 'exact' }),
    ])

    res.json({
      totalClients: clients.count || 0,
      totalDeals: deals.count || 0,
      totalTasks: tasks.count || 0,
      totalEmployees: employees.count || 0,
      revenueThisMonth: 125000,
      conversionRate: 28,
    })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

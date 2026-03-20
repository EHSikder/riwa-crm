import { Router, Request, Response } from 'express'
import { supabase } from '../../src/utils/supabase'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('deals').select('*').order('created_at', { ascending: false })
    if (error) throw error
    res.json({ success: true, data })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('deals').insert([req.body]).select()
    if (error) throw error
    res.status(201).json({ success: true, data: data?.[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

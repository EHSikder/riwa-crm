import { Router, Request, Response } from 'express'
import { supabase } from '../../src/utils/supabase'
import { Client, CreateClientRequest } from '../../src/types'

const router = Router()

// Get all clients
router.get('/', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    res.json({
      success: true,
      data: data as Client[],
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

// Get single client
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error

    res.json({
      success: true,
      data: data as Client,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

// Create client
router.post('/', async (req: Request, res: Response) => {
  try {
    const payload: CreateClientRequest = req.body

    const { data, error } = await supabase
      .from('clients')
      .insert([payload])
      .select()

    if (error) throw error

    res.status(201).json({
      success: true,
      data: data?.[0] as Client,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

// Update client
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const updates = req.body

    const { data, error } = await supabase
      .from('clients')
      .update(updates)
      .eq('id', id)
      .select()

    if (error) throw error

    res.json({
      success: true,
      data: data?.[0] as Client,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

// Delete client
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id)

    if (error) throw error

    res.json({
      success: true,
      message: 'Client deleted successfully',
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

export default router

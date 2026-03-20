import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase configuration');
}

// Create Supabase client with service role key (for server-side operations)
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
  },
});

// Helper function to handle Supabase errors
export const handleSupabaseError = (error: any) => {
  console.error('Supabase error:', error);
  return {
    success: false,
    error: error.message || 'Database operation failed',
  };
};

// Generic query helper
export const query = async <T>(
  table: string,
  options?: {
    select?: string;
    filter?: Record<string, any>;
    limit?: number;
    offset?: number;
    order?: { column: string; ascending?: boolean };
  }
) => {
  try {
    let query = supabase.from(table).select(options?.select || '*');

    if (options?.filter) {
      Object.entries(options.filter).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
    }

    if (options?.order) {
      query = query.order(options.order.column, {
        ascending: options.order.ascending !== false,
      });
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    if (options?.offset) {
      query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }

    const { data, error } = await query;

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

// Create record
export const create = async <T>(
  table: string,
  data: Record<string, any>
): Promise<{ success: boolean; data?: T; error?: string }> => {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .insert([data])
      .select();

    if (error) throw error;
    return { success: true, data: result?.[0] as T };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

// Update record
export const update = async <T>(
  table: string,
  id: string,
  data: Record<string, any>
): Promise<{ success: boolean; data?: T; error?: string }> => {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select();

    if (error) throw error;
    return { success: true, data: result?.[0] as T };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

// Delete record
export const deleteRecord = async (
  table: string,
  id: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase.from(table).delete().eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

// Get single record
export const getOne = async <T>(
  table: string,
  id: string
): Promise<{ success: boolean; data?: T; error?: string }> => {
  try {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { success: true, data: data as T };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

// Search with full-text search
export const search = async <T>(
  table: string,
  searchTerm: string,
  searchColumns: string[]
): Promise<{ success: boolean; data?: T[]; error?: string }> => {
  try {
    let query = supabase.from(table).select('*');

    // Simple OR filter for multiple columns
    const filters = searchColumns
      .map((col) => `${col}.ilike.%${searchTerm}%`)
      .join(',');

    const { data, error } = await query;

    if (error) throw error;

    // Client-side filtering for now (can be optimized with PostgreSQL full-text search)
    const filtered = (data || []).filter((item: any) =>
      searchColumns.some((col) =>
        String(item[col] || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    return { success: true, data: filtered as T[] };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

// Organization & User Types
export interface Organization {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo_url?: string;
  website?: string;
  industry?: string;
  size?: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  phone?: string;
  organization_id: string;
  role: 'admin' | 'manager' | 'member';
  status: 'active' | 'inactive' | 'archived';
  created_at: string;
  updated_at: string;
}

// Employee & Team Types
export interface Employee {
  id: string;
  user_id: string;
  organization_id: string;
  department?: string;
  job_title?: string;
  manager_id?: string;
  phone?: string;
  email: string;
  hire_date?: string;
  status: 'active' | 'on_leave' | 'inactive';
  performance_score?: number;
  deals_closed: number;
  tasks_completed: number;
  created_at: string;
  updated_at: string;
}

export interface Team {
  id: string;
  organization_id: string;
  name: string;
  description?: string;
  team_lead_id?: string;
  created_at: string;
  updated_at: string;
}

// Client & Contact Types
export interface Client {
  id: string;
  organization_id: string;
  company_name: string;
  industry?: string;
  website?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  employee_count?: string;
  annual_revenue?: string;
  account_manager_id?: string;
  status: 'active' | 'inactive' | 'prospect' | 'archived';
  health_score?: number;
  last_contact_date?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  client_id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  job_title?: string;
  department?: string;
  is_primary: boolean;
  linkedin_url?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

// Lead & Deal Types
export interface Lead {
  id: string;
  organization_id: string;
  contact_id?: string;
  company_name: string;
  email?: string;
  phone?: string;
  source?: string;
  lead_score: number;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed_won' | 'closed_lost';
  assigned_to_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Deal {
  id: string;
  organization_id: string;
  client_id: string;
  lead_id?: string;
  title: string;
  description?: string;
  amount?: number;
  currency: string;
  stage: 'prospect' | 'qualification' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
  probability?: number;
  expected_close_date?: string;
  actual_close_date?: string;
  owner_id: string;
  status: 'open' | 'closed_won' | 'closed_lost';
  created_at: string;
  updated_at: string;
}

// Project & Task Types
export interface Project {
  id: string;
  organization_id: string;
  client_id?: string;
  name: string;
  description?: string;
  status: 'planning' | 'active' | 'on_hold' | 'completed' | 'archived';
  start_date?: string;
  end_date?: string;
  project_manager_id?: string;
  budget?: number;
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  organization_id: string;
  project_id?: string;
  deal_id?: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'review' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assigned_to_id?: string;
  due_date?: string;
  completed_at?: string;
  created_by_id: string;
  created_at: string;
  updated_at: string;
}

// Document & Communication Types
export interface Document {
  id: string;
  organization_id: string;
  client_id?: string;
  project_id?: string;
  title: string;
  description?: string;
  file_type?: string;
  file_size?: number;
  dropbox_path?: string;
  dropbox_link?: string;
  uploaded_by_id: string;
  key_points?: string;
  summary?: string;
  created_at: string;
  updated_at: string;
}

export interface Communication {
  id: string;
  organization_id: string;
  client_id?: string;
  contact_id?: string;
  type: 'email' | 'call' | 'meeting' | 'message' | 'other';
  subject?: string;
  content?: string;
  direction?: 'inbound' | 'outbound';
  from_email?: string;
  to_email?: string;
  communication_date?: string;
  duration_minutes?: number;
  recorded_by_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: string;
  organization_id: string;
  client_id?: string;
  deal_id?: string;
  contact_id?: string;
  title?: string;
  content: string;
  type: 'general' | 'meeting' | 'call' | 'email' | 'follow_up';
  created_by_id: string;
  created_at: string;
  updated_at: string;
}

// AI Types
export interface AISummary {
  id: string;
  organization_id: string;
  source_type: 'note' | 'communication' | 'document' | 'meeting';
  source_id: string;
  summary_text: string;
  key_points?: string[];
  action_items?: string[];
  sentiment?: 'positive' | 'neutral' | 'negative';
  generated_by: 'groq' | 'granola' | 'huggingface';
  model_used?: string;
  created_at: string;
}

export interface AIInsight {
  id: string;
  organization_id: string;
  insight_type: 'follow_up_needed' | 'deal_risk' | 'opportunity' | 'churn_risk' | 'general';
  title: string;
  description?: string;
  related_client_id?: string;
  related_deal_id?: string;
  priority: 'low' | 'medium' | 'high';
  is_read: boolean;
  created_at: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

// Request/Response DTOs
export interface CreateClientRequest {
  company_name: string;
  industry?: string;
  website?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  account_manager_id?: string;
}

export interface CreateDealRequest {
  client_id: string;
  title: string;
  description?: string;
  amount?: number;
  stage: string;
  owner_id: string;
  expected_close_date?: string;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  priority: string;
  assigned_to_id?: string;
  due_date?: string;
  project_id?: string;
  deal_id?: string;
}

export interface GenerateSummaryRequest {
  text: string;
  source_type: 'note' | 'communication' | 'document' | 'meeting';
  source_id: string;
}

export interface UploadDocumentRequest {
  title: string;
  description?: string;
  file_type?: string;
  dropbox_path: string;
  dropbox_link: string;
  client_id?: string;
  project_id?: string;
}

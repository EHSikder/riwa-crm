# RIWA CRM - API Documentation

## Base URL

```
https://riwa-crm-api.onrender.com/api
```

## Authentication

All API requests require a JWT token in the Authorization header:

```
Authorization: Bearer {token}
```

## Endpoints

### Health Check

```
GET /health
```

Returns server status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-03-18T10:30:00Z",
  "uptime": 3600
}
```

### API Version

```
GET /api/version
```

**Response:**
```json
{
  "version": "1.0.0",
  "name": "RIWA CRM API",
  "description": "Enterprise AI-Powered Customer Relationship Management System"
}
```

---

## Clients

### List Clients

```
GET /api/clients
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "company_name": "Acme Corp",
      "industry": "Technology",
      "status": "active",
      "created_at": "2024-03-18T10:00:00Z"
    }
  ]
}
```

### Get Client

```
GET /api/clients/{id}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "company_name": "Acme Corp",
    "industry": "Technology",
    "website": "https://acme.com",
    "phone": "+1-555-0100",
    "email": "contact@acme.com",
    "status": "active",
    "health_score": 4.5,
    "created_at": "2024-03-18T10:00:00Z"
  }
}
```

### Create Client

```
POST /api/clients
```

**Request Body:**
```json
{
  "company_name": "Acme Corp",
  "industry": "Technology",
  "website": "https://acme.com",
  "phone": "+1-555-0100",
  "email": "contact@acme.com",
  "address": "123 Main St",
  "city": "San Francisco",
  "country": "USA",
  "account_manager_id": "uuid"
}
```

**Response:** (201 Created)
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "company_name": "Acme Corp",
    ...
  }
}
```

### Update Client

```
PUT /api/clients/{id}
```

**Request Body:**
```json
{
  "company_name": "Acme Corp Updated",
  "status": "inactive"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

### Delete Client

```
DELETE /api/clients/{id}
```

**Response:**
```json
{
  "success": true,
  "message": "Client deleted successfully"
}
```

---

## Deals

### List Deals

```
GET /api/deals
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Enterprise License",
      "client_id": "uuid",
      "amount": 50000,
      "stage": "proposal",
      "probability": 0.75,
      "status": "open",
      "created_at": "2024-03-18T10:00:00Z"
    }
  ]
}
```

### Create Deal

```
POST /api/deals
```

**Request Body:**
```json
{
  "client_id": "uuid",
  "title": "Enterprise License",
  "description": "Annual enterprise license",
  "amount": 50000,
  "currency": "USD",
  "stage": "proposal",
  "probability": 0.75,
  "owner_id": "uuid",
  "expected_close_date": "2024-04-30"
}
```

**Response:** (201 Created)
```json
{
  "success": true,
  "data": { ... }
}
```

---

## Tasks

### List Tasks

```
GET /api/tasks
```

**Query Parameters:**
- `status`: Filter by status (todo, in_progress, completed)
- `assigned_to`: Filter by assignee ID
- `priority`: Filter by priority (low, medium, high, urgent)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Follow up with client",
      "status": "todo",
      "priority": "high",
      "due_date": "2024-03-20",
      "assigned_to_id": "uuid"
    }
  ]
}
```

### Create Task

```
POST /api/tasks
```

**Request Body:**
```json
{
  "title": "Follow up with client",
  "description": "Call to discuss proposal",
  "priority": "high",
  "status": "todo",
  "assigned_to_id": "uuid",
  "due_date": "2024-03-20",
  "project_id": "uuid",
  "deal_id": "uuid"
}
```

**Response:** (201 Created)
```json
{
  "success": true,
  "data": { ... }
}
```

---

## Dashboard

### Get Statistics

```
GET /api/dashboard/stats
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalClients": 24,
    "totalDeals": 12,
    "totalTasks": 48,
    "totalEmployees": 8,
    "revenueThisMonth": 125000,
    "conversionRate": 28
  }
}
```

---

## Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

### Common Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Missing or invalid token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 500 | Internal Server Error - Server error |

---

## Rate Limiting

- **Free Tier**: 100 requests per hour
- **Pro Tier**: 1000 requests per hour
- **Enterprise**: Unlimited

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
```

---

## Pagination

For list endpoints, use query parameters:

```
GET /api/clients?page=1&limit=20
```

**Response:**
```json
{
  "success": true,
  "data": [...],
  "total": 100,
  "page": 1,
  "limit": 20,
  "pages": 5
}
```

---

## Filtering

Use query parameters to filter results:

```
GET /api/clients?status=active&industry=technology
```

---

## Sorting

Use `sort` parameter:

```
GET /api/clients?sort=created_at&order=desc
```

---

## Webhooks

Subscribe to events:

```
POST /api/webhooks/subscribe
```

**Request Body:**
```json
{
  "event": "deal.created",
  "url": "https://your-app.com/webhook"
}
```

**Events:**
- `client.created`
- `client.updated`
- `deal.created`
- `deal.updated`
- `task.created`
- `task.completed`

---

## Code Examples

### JavaScript/Node.js

```javascript
const apiClient = axios.create({
  baseURL: 'https://riwa-crm-api.onrender.com/api',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

// Get clients
const clients = await apiClient.get('/clients')

// Create deal
const deal = await apiClient.post('/deals', {
  client_id: 'uuid',
  title: 'Enterprise License',
  amount: 50000,
  stage: 'proposal',
  owner_id: 'uuid'
})
```

### Python

```python
import requests

headers = {
    'Authorization': f'Bearer {token}'
}

# Get clients
response = requests.get(
    'https://riwa-crm-api.onrender.com/api/clients',
    headers=headers
)
clients = response.json()

# Create deal
deal = requests.post(
    'https://riwa-crm-api.onrender.com/api/deals',
    headers=headers,
    json={
        'client_id': 'uuid',
        'title': 'Enterprise License',
        'amount': 50000,
        'stage': 'proposal',
        'owner_id': 'uuid'
    }
)
```

### cURL

```bash
# Get clients
curl -X GET https://riwa-crm-api.onrender.com/api/clients \
  -H "Authorization: Bearer {token}"

# Create deal
curl -X POST https://riwa-crm-api.onrender.com/api/deals \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "uuid",
    "title": "Enterprise License",
    "amount": 50000,
    "stage": "proposal",
    "owner_id": "uuid"
  }'
```

---

## Support

For API issues and questions:
- Email: api-support@riwaai.com
- Documentation: https://docs.riwaai.com
- Status Page: https://status.riwaai.com

---

**Last Updated**: March 2026  
**API Version**: 1.0.0

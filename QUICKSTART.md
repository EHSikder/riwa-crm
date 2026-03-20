# RIWA CRM - Quick Start Guide

Get RIWA CRM up and running in 5 minutes!

## 🚀 Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Supabase account (already configured)
- Groq API key
- Dropbox account

## 📥 Installation

### 1. Clone Repository

```bash
git clone https://github.com/EHSikder/riwa-crm.git
cd riwa-crm
```

### 2. Install Dependencies

```bash
npm install
cd client && npm install && cd ..
```

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Supabase
SUPABASE_URL=https://auakpkiglwvhuswvnhin.supabase.co
SUPABASE_SERVICE_KEY=your_service_key

# Groq AI
GROQ_API_KEY=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

# Dropbox
DROPBOX_API_KEY=your_dropbox_key

# JWT
JWT_SECRET=your_secret_key_here
```

### 4. Start Development Server

```bash
npm run dev
```

This starts both backend (port 3000) and frontend (port 5173).

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000
- **API**: http://localhost:3000/api

## 🎯 First Steps

### 1. Access the Application

Open http://localhost:5173 in your browser

### 2. Explore the Dashboard

- View key metrics
- Check recent activity
- Review revenue trends

### 3. Add Your First Client

1. Click "Clients" in sidebar
2. Click "Add Client"
3. Fill in company details
4. Click "Create"

### 4. Create Your First Deal

1. Click "Deals" in sidebar
2. Click "Create Deal"
3. Select client
4. Set amount and stage
5. Click "Create"

### 5. Create a Task

1. Click "Tasks" in sidebar
2. Click "Create Task"
3. Assign to team member
4. Set due date
5. Click "Create"

## 📊 Key Features

### Dashboard
- Real-time metrics
- Revenue trends
- Deal pipeline
- Team performance

### Clients
- Comprehensive profiles
- Contact management
- Communication history
- Health scoring

### Deals
- Sales pipeline tracking
- Probability scoring
- Revenue forecasting
- Deal analytics

### Tasks
- Kanban board
- Priority management
- Team assignments
- Deadline tracking

### AI Features
- Auto-summarization
- Key point extraction
- Business insights
- Meeting analysis

### Integrations
- Dropbox file storage
- Groq AI summaries
- Granola meeting intelligence

## 🔧 Development Commands

```bash
# Start both frontend and backend
npm run dev

# Start backend only
npm run dev:server

# Start frontend only
npm run dev:client

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📦 Project Structure

```
riwa-crm/
├── client/              # React frontend
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   └── lib/        # Utilities
│   └── package.json
├── server/             # Express backend
│   ├── routes/         # API routes
│   └── index.ts        # Server entry
├── src/
│   ├── types/          # TypeScript types
│   └── utils/          # Utilities (Supabase, Groq, Dropbox)
└── package.json
```

## 🗄️ Database

The database is pre-configured with 18 tables:

- organizations, users
- employees, teams
- clients, contacts
- leads, deals
- projects, tasks
- documents, communications, notes
- ai_summaries, ai_insights
- activity_logs, integration_settings

All tables have Row Level Security (RLS) enabled.

## 🔐 Authentication

Currently using JWT tokens. To add user authentication:

1. Uncomment auth routes in `server/index.ts`
2. Create `/server/routes/auth.ts`
3. Implement login/signup endpoints
4. Add token validation middleware

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Push to GitHub
git push origin master

# Vercel auto-deploys from GitHub
# Configure env vars in Vercel dashboard
```

### Backend (Render)

```bash
# Push to GitHub
git push origin master

# Render auto-deploys from GitHub
# Configure env vars in Render dashboard
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📚 Documentation

- [README.md](./README.md) - Project overview
- [DOCUMENTATION.md](./DOCUMENTATION.md) - User guide
- [API.md](./API.md) - API reference
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide

## 🆘 Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database Connection Error

1. Check SUPABASE_URL and SUPABASE_SERVICE_KEY
2. Verify Supabase project is active
3. Check network connectivity

### Frontend Not Loading

1. Ensure backend is running on port 3000
2. Check VITE_API_URL in frontend env
3. Clear browser cache

## 📞 Support

- **Email**: support@riwaai.com
- **Documentation**: https://docs.riwaai.com
- **GitHub Issues**: https://github.com/EHSikder/riwa-crm/issues

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

## 📋 Next Steps

1. ✅ Install and run locally
2. ✅ Explore the dashboard
3. ✅ Add sample data (clients, deals, tasks)
4. ✅ Test AI features
5. ✅ Configure integrations
6. ✅ Deploy to production

## 🎉 You're Ready!

Your RIWA CRM is now running. Start managing your business relationships with AI-powered insights!

---

**Questions?** Check the [FAQ](./DOCUMENTATION.md#faq) or reach out to support.

**Happy CRMing!** 🚀

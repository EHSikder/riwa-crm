# RIWA CRM - Enterprise AI-Powered Customer Relationship Management System

A comprehensive, full-stack CRM platform designed for modern agencies and service providers. Manage clients, employees, leads, tasks, projects, and documents—all powered by AI-driven insights and automation.

## 🚀 Features

### Core CRM Functionality
- **Client Management**: Comprehensive client profiles with communication history
- **Contact Management**: Multiple contacts per client with detailed information
- **Sales Pipeline**: Visual lead tracking with deal stages and revenue forecasting
- **Employee Management**: Team structure, roles, and performance tracking
- **Project Management**: Organize tasks, set milestones, and track progress
- **Task Management**: Kanban-style task board with priorities and assignments
- **Document Hub**: Store files via Dropbox integration with AI-extracted insights

### AI-Powered Features
- **Groq API Integration**: Automatic summarization of notes, emails, and documents
- **Granola MCP**: Meeting transcript analysis and action item extraction
- **AI Insights**: Automatic recommendations (follow-ups, deal risks, opportunities)
- **Full-Text Search**: Intelligent search across clients, contacts, notes, and documents

### Integration Capabilities
- **Dropbox**: Seamless file storage and retrieval
- **Groq LLM**: Free-tier AI for summaries and insights
- **Supabase**: PostgreSQL database with real-time capabilities
- **Make.app**: Workflow automation and integrations

## 📋 Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **ORM**: Supabase SDK
- **Logging**: Pino

### Frontend
- **Framework**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context / TanStack Query
- **Build Tool**: Vite

### External Services
- **Database**: Supabase (Lythe organization)
- **AI**: Groq API (free tier)
- **File Storage**: Dropbox API
- **Meeting Intelligence**: Granola MCP
- **Deployment**: Vercel (frontend), Render (backend)
- **Version Control**: GitHub

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/pnpm
- Supabase account (Lythe organization)
- Groq API key
- Dropbox API credentials
- GitHub account for version control

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/riwa-crm.git
   cd riwa-crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Start development server**
   ```bash
   npm run dev:server
   ```

The API will be available at `http://localhost:3000`

### Frontend Setup

1. **Navigate to client directory**
   ```bash
   cd client
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

### Full Stack Development

```bash
npm run dev
```

This runs both backend and frontend concurrently.

## 📁 Project Structure

```
riwa-crm/
├── server/                 # Express backend
│   ├── index.ts           # Main server file
│   ├── routes/            # API routes (clients, deals, tasks, etc.)
│   ├── middleware/        # Custom middleware
│   └── controllers/       # Route handlers
├── client/                # React frontend
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities
│   └── vite.config.ts
├── src/
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Shared utilities (Supabase, etc.)
│   └── constants/        # Constants
├── scripts/              # Database scripts
│   ├── migrate.ts        # Migration runner
│   └── seed.ts           # Database seeding
├── .env.example          # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

## 🗄️ Database Schema

The Supabase database includes 18 tables:

- **organizations**, **users** - Core authentication & organization
- **employees**, **teams**, **team_members** - Team structure
- **clients**, **contacts** - Customer relationships
- **leads**, **deals** - Sales pipeline
- **projects**, **tasks** - Project management
- **documents**, **communications**, **notes** - Content & interactions
- **ai_summaries**, **ai_insights** - AI-generated content
- **activity_logs** - Audit trail
- **integration_settings** - External service credentials

All tables include Row Level Security (RLS) for data isolation.

## 🔌 API Endpoints

### Clients
- `GET /api/clients` - List all clients
- `POST /api/clients` - Create new client
- `GET /api/clients/:id` - Get client details
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Deals
- `GET /api/deals` - List all deals
- `POST /api/deals` - Create new deal
- `GET /api/deals/:id` - Get deal details
- `PUT /api/deals/:id` - Update deal
- `DELETE /api/deals/:id` - Delete deal

### Tasks
- `GET /api/tasks` - List all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### AI Features
- `POST /api/ai/summarize` - Generate AI summary
- `GET /api/ai/insights` - Get AI insights
- `POST /api/ai/extract-key-points` - Extract key points from document

### Documents
- `POST /api/documents/upload` - Upload document to Dropbox
- `GET /api/documents` - List documents
- `DELETE /api/documents/:id` - Delete document

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect Vercel to GitHub repository
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to `main` branch

### Backend (Render)
1. Create new Web Service on Render
2. Connect GitHub repository
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

## 📝 Environment Variables

See `.env.example` for all required variables:

```env
# Supabase
SUPABASE_URL=https://auakpkiglwvhuswvnhin.supabase.co
SUPABASE_SERVICE_KEY=your_key_here

# Groq AI
GROQ_API_KEY=your_key_here

# Dropbox
DROPBOX_API_KEY=your_key_here

# JWT
JWT_SECRET=your_secret_here
```

## 🔐 Security

- Row Level Security (RLS) on all database tables
- JWT-based authentication
- Environment variable encryption
- CORS configuration
- Input validation with Zod
- SQL injection prevention via Supabase SDK

## 📊 Development Roadmap

- [x] Database schema setup
- [x] Backend initialization
- [ ] Client management module
- [ ] Employee management module
- [ ] Leads & deals pipeline
- [ ] Task management
- [ ] Document storage integration
- [ ] Groq AI integration
- [ ] Granola MCP integration
- [ ] Frontend dashboard
- [ ] Testing suite
- [ ] Deployment

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For issues and questions:
- Email: support@riwaai.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/riwa-crm/issues)

## 🙏 Acknowledgments

- Supabase for database infrastructure
- Groq for AI capabilities
- Dropbox for file storage
- Vercel for frontend hosting
- Render for backend hosting

---

**Built with ❤️ by RIWA AI**

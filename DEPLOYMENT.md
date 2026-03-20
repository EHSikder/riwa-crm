# RIWA CRM - Deployment Guide

This guide covers deploying RIWA CRM to production using Vercel (frontend) and Render (backend).

## Prerequisites

- GitHub account with repository access
- Vercel account
- Render account
- Supabase project (already configured)
- Environment variables ready

## Frontend Deployment (Vercel)

### Step 1: Connect GitHub to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select "Import Git Repository"
4. Search for and select `riwa-crm` repository
5. Click "Import"

### Step 2: Configure Environment Variables

In Vercel project settings, add:

```
VITE_API_URL=https://riwa-crm-api.onrender.com
VITE_SUPABASE_URL=https://auakpkiglwvhuswvnhin.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 3: Configure Build Settings

- **Framework Preset**: Other
- **Build Command**: `npm run build:client`
- **Output Directory**: `client/dist`
- **Install Command**: `npm install`

### Step 4: Deploy

Click "Deploy" - Vercel will automatically build and deploy your frontend.

Your site will be available at: `https://riwa-crm.vercel.app` (or your custom domain)

## Backend Deployment (Render)

### Step 1: Create Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Select "Deploy an existing repository"
4. Search for and select `riwa-crm` repository
5. Click "Connect"

### Step 2: Configure Service

- **Name**: `riwa-crm-api`
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `master`
- **Build Command**: `npm install && npm run build:server`
- **Start Command**: `npm start`
- **Plan**: Free (or upgrade as needed)

### Step 3: Add Environment Variables

In Render environment settings, add:

```
NODE_ENV=production
PORT=3000
SUPABASE_URL=https://auakpkiglwvhuswvnhin.supabase.co
SUPABASE_SERVICE_KEY=your_supabase_service_key
GROQ_API_KEY=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
DROPBOX_API_KEY=your_dropbox_api_key
JWT_SECRET=your_jwt_secret_key
```

### Step 4: Deploy

Click "Create Web Service" - Render will automatically deploy your backend.

Your API will be available at: `https://riwa-crm-api.onrender.com`

## Custom Domain Setup

### For Vercel (Frontend)

1. In Vercel project settings, go to "Domains"
2. Click "Add Domain"
3. Enter your custom domain (e.g., `crm.riwaai.com`)
4. Follow DNS configuration instructions

### For Render (Backend)

1. In Render service settings, go to "Custom Domain"
2. Click "Add Custom Domain"
3. Enter your API domain (e.g., `api.crm.riwaai.com`)
4. Follow DNS configuration instructions

## Environment Variables Reference

### Frontend (Vercel)
```
VITE_API_URL=https://riwa-crm-api.onrender.com
VITE_SUPABASE_URL=https://auakpkiglwvhuswvnhin.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Backend (Render)
```
NODE_ENV=production
PORT=3000
SUPABASE_URL=https://auakpkiglwvhuswvnhin.supabase.co
SUPABASE_SERVICE_KEY=your_service_key
GROQ_API_KEY=your_groq_key
DROPBOX_API_KEY=your_dropbox_key
JWT_SECRET=your_jwt_secret
```

## Monitoring & Logs

### Vercel
- View logs in Vercel dashboard → "Functions" tab
- Real-time monitoring available

### Render
- View logs in Render dashboard → Service → "Logs"
- Automatic restart on crashes

## Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `client/dist` directory is created

### API Not Responding
- Check Render logs for errors
- Verify Supabase connection
- Ensure environment variables are correct

### CORS Issues
- Backend CORS is configured for all origins in development
- For production, update CORS in `server/index.ts`

## Continuous Deployment

Both Vercel and Render automatically deploy when you push to the `master` branch:

```bash
git push origin master
```

The deployment process:
1. GitHub receives push
2. Vercel & Render detect changes
3. Automatic build and deployment
4. Live update within 2-5 minutes

## Rollback

### Vercel
1. Go to "Deployments" tab
2. Find previous deployment
3. Click "..." → "Promote to Production"

### Render
1. Go to "Deploys" tab
2. Find previous deployment
3. Click "Deploy" to rollback

## Performance Optimization

### Frontend (Vercel)
- Enable automatic image optimization
- Use edge caching
- Enable compression

### Backend (Render)
- Monitor memory usage
- Enable auto-scaling if needed
- Optimize database queries

## Security Checklist

- [ ] All secrets in environment variables (never in code)
- [ ] HTTPS enabled on both frontend and backend
- [ ] CORS properly configured
- [ ] Database Row Level Security (RLS) enabled
- [ ] API rate limiting configured
- [ ] Input validation on all endpoints

## Support

For deployment issues:
- Vercel Support: https://vercel.com/support
- Render Support: https://render.com/docs
- Supabase Support: https://supabase.com/docs

---

**Deployment Status**: Ready for production 🚀

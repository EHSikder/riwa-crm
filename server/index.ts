import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pino from 'pino';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import routes
import clientRoutes from './routes/clients.js';
import dealRoutes from './routes/deals.js';
import taskRoutes from './routes/tasks.js';
import dashboardRoutes from './routes/dashboard.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Logger setup
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info({
    method: req.method,
    path: req.path,
    ip: req.ip,
  });
  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API version endpoint
app.get('/api/version', (req: Request, res: Response) => {
  res.json({
    version: '1.0.0',
    name: 'RIWA CRM API',
    description: 'Enterprise AI-Powered Customer Relationship Management System',
  });
});

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/dashboard', dashboardRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    path: req.path,
  });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error({
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error',
  });
});

// Serve client static files in production
if (process.env.NODE_ENV === 'production') {
  const clientPath = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(clientPath));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
}

// Start server
app.listen(port, () => {
  logger.info(`🚀 RIWA CRM API running on port ${port}`);
  logger.info(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.info(`🗄️  Database: Supabase (${process.env.SUPABASE_URL})`);
});

export default app;

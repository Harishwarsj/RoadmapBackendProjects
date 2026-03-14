import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

import errorHandler from './middleware/error.middleware.js';

const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/todos', todoRoutes);
app.use(errorHandler);

export default app;
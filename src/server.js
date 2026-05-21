import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.route.js"
import projectRoutes from "./routes/project.route.js"
import contactRoutes from "./routes/contact.route.js"
import analyticsRoutes from "./routes/analytics.route.js"


// TODO : importer vos routes au fur et à mesure

import {errorHandler} from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: [
    "http://localhost:5173"
  ]
}));
app.use(express.json());

app.set("trust proxy", true);

app.use('/api/auth', authRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/contact', contactRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🟢 Backend running on http://localhost:${PORT}`);
});
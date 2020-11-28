import express from 'express';
import linksRouter from './routes/links'


const app = express();
app.use(express.json());//usando formato json de dados
app.use(linksRouter);

export default app;

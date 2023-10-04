import express from 'express';
import morgan from 'morgan';
import mainRoutes from './routes/mainRoutes';
const app = express();
app.set('port', 3000);
//MIDDLEWARES
app.use(morgan('dev'));
app.use("/api/main",mainRoutes)
export default app;
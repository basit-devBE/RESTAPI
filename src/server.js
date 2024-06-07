import express from 'express';
import { StatusCodes } from 'http-status-codes';
import appRoutes from './routes.js';

const app = express();
app.use(express.json());
app.use('/v1', appRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

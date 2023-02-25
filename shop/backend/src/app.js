import express from 'express';

import { api, system } from './routes';

const app = express();

app.use('/api', api);
app.use('/system', system);


export default app;

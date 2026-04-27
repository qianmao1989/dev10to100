import express from 'express';
import usersRouter from './api/users';
import authRouter from './api/auth';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Workshop API running on http://localhost:${PORT}`);
  });
}

export default app;

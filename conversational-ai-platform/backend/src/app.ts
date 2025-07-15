import express from 'express';
import nluRouter from './routes/nlu';
import analyticsRouter from './routes/analytics';

const app = express();
app.use(express.json());

app.use('/nlu', nluRouter);
app.use('/analytics', analyticsRouter);

export default app;

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
}

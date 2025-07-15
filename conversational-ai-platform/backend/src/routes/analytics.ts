import { Router } from 'express';

interface LogEntry {
  session_id: string;
  timestamp: number;
  intent: string;
  confidence: number;
}

const logs: LogEntry[] = [];

const router = Router();

router.post('/log', (req, res) => {
  const entry = req.body as LogEntry;
  logs.push(entry);
  res.status(201).json({ status: 'logged' });
});

router.get('/dashboard', (_req, res) => {
  const intents: Record<string, number> = {};
  logs.forEach(l => {
    intents[l.intent] = (intents[l.intent] || 0) + 1;
  });
  res.json({ count: logs.length, intents });
});

export default router;

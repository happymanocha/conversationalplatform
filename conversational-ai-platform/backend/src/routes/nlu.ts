import { Router } from 'express';

const router = Router();

router.post('/intent', (req, res) => {
  const { utterance } = req.body;
  // Placeholder NLU integration
  const intent = utterance?.includes('pension') ? 'pension_eligibility' : 'unknown';
  res.json({ intent, replyText: `You said: ${utterance}` });
});

router.post('/event', (req, res) => {
  const { event } = req.body;
  res.json({ eventHandled: event });
});

export default router;

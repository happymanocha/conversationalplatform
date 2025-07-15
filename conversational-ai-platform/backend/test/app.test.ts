import request from 'supertest';
import app from '../src/app';

describe('API', () => {
  it('intent endpoint returns reply', async () => {
    const res = await request(app).post('/nlu/intent').send({ utterance: 'tell me about pension' });
    expect(res.body.intent).toBe('pension_eligibility');
  });

  it('analytics log and dashboard', async () => {
    await request(app).post('/analytics/log').send({ session_id: '1', timestamp: Date.now(), intent: 'test', confidence: 0.9 });
    const res = await request(app).get('/analytics/dashboard');
    expect(res.body.count).toBeGreaterThan(0);
  });
});

import express from 'express';
import { validateEmail, generateToken } from '../utils';

const router = express.Router();

// Simple in-memory session store (not for production!)
const sessions: Record<string, { userId: number; expiresAt: number }> = {};

// Hardcoded users for the workshop (in real apps, use a database + bcrypt)
const credentials: Record<string, { id: number; password: string }> = {
  'ana@example.com': { id: 1, password: 'password123' },
  'carlos@example.com': { id: 2, password: 'securepass' },
};

/**
 * POST /auth/login
 * Missing: rate limiting (Issue #7 — implement to prevent brute force)
 */
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const user = credentials[email];

  // Missing: no rate limiting — brute force is possible
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = generateToken(32);
  sessions[token] = {
    userId: user.id,
    expiresAt: Date.now() + 60 * 60 * 1000, // 1 hour
  };

  res.json({ token });
});

/**
 * POST /auth/logout
 */
router.post('/logout', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (token && sessions[token]) {
    delete sessions[token];
  }

  res.status(204).send();
});

/**
 * GET /auth/me
 * Missing: token expiry check
 */
router.get('/me', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token || !sessions[token]) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // BUG: no expiry check — expired tokens still work
  const session = sessions[token];

  res.json({ userId: session.userId });
});

export default router;

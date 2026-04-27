import express from 'express';
import { getPage } from '../utils';

const router = express.Router();

// In-memory "database" for the workshop
const users = [
  { id: 1, name: 'Ana García', email: 'ana@example.com', role: 'admin' },
  { id: 2, name: 'Carlos López', email: 'carlos@example.com', role: 'user' },
  { id: 3, name: 'María Rodríguez', email: 'maria@sub.example.com', role: 'user' },
];

let nextId = 4;

/**
 * GET /users
 * BUG: when the users array is empty, this throws instead of returning [].
 * Reproducir: vaciar el array `users` y llamar GET /users.
 */
router.get('/', (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  // BUG: accessing [0] without checking if array is empty
  const firstUser = users[0].name; // ← throws if users is empty
  console.log(`Fetching users, first user: ${firstUser}`);

  const paginated = getPage(users, page, pageSize);
  res.json(paginated);
});

/**
 * GET /users/:id
 */
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

/**
 * POST /users
 * Missing: input validation, duplicate email check
 */
router.post('/', (req, res) => {
  const { name, email, role } = req.body;

  // Missing validation — any input is accepted
  const newUser = { id: nextId++, name, email, role: role || 'user' };
  users.push(newUser);

  res.status(201).json(newUser);
});

/**
 * DELETE /users/:id
 */
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(index, 1);
  res.status(204).send();
});

export default router;

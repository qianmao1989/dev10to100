import request from 'supertest';
import app from '../src/server';

describe('GET /users', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // TODO: este test expone el bug — descomentar y hacer que pase
  // it('should return empty array when there are no users', async () => {
  //   const res = await request(app).get('/users');
  //   expect(res.status).toBe(200);
  //   expect(res.body).toEqual([]);
  // });

  it.todo('should support pagination via ?page=1&pageSize=2');
});

describe('GET /users/:id', () => {
  it('should return 404 for a non-existent user', async () => {
    const res = await request(app).get('/users/9999');
    expect(res.status).toBe(404);
  });

  // TODO: agregar test para usuario existente
  it.todo('should return the user when found');
});

describe('POST /users', () => {
  // TODO: todos estos tests están pendientes de implementar
  it.todo('should create a user with valid data');
  it.todo('should reject a user without email');
  it.todo('should reject a duplicate email');
});

describe('GET /health', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

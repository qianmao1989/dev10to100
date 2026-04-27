import { validateEmail, formatFullName, generateToken, isNonEmptyString, getPage } from '../src/utils';

describe('validateEmail', () => {
  it('should accept a simple email', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  it('should reject an email without @', () => {
    expect(validateEmail('notanemail')).toBe(false);
  });

  // TODO: este test falla — el bug de subdominios está en validateEmail
  it.todo('should accept emails with subdomains (e.g. user@mail.example.com)');

  // TODO: agregar test para emails con caracteres especiales válidos
  it.todo('should accept emails with + in local part (e.g. user+tag@example.com)');
});

describe('formatFullName', () => {
  it('should combine first and last name', () => {
    expect(formatFullName('Ana', 'García')).toBe('Ana García');
  });

  // TODO: agregar test para nombres con espacios extra
  it.todo('should trim extra whitespace from names');
});

describe('generateToken', () => {
  it('should return a token of the requested length', () => {
    const token = generateToken(32);
    expect(token).toHaveLength(32);
  });

  // TODO: verificar que el token solo contiene caracteres alfanuméricos
  it.todo('should only contain alphanumeric characters');
});

describe('isNonEmptyString', () => {
  // TODO: implementar tests para esta función
  it.todo('should return true for non-empty strings');
  it.todo('should return false for empty strings');
  it.todo('should return false for non-string values');
});

describe('getPage', () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // TODO: este test falla porque getPage tiene un bug de paginación
  it.todo('should return the first page (page 1, pageSize 3) → [1, 2, 3]');
  it.todo('should return the second page (page 2, pageSize 3) → [4, 5, 6]');
  it.todo('should return empty array when page exceeds total items');
});

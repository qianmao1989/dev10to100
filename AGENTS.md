# AGENTS.md

## Propósito de este archivo

Este archivo define cómo se comporta el agente de IA (Copilot CLI) en este repositorio.
Es un ejemplo de AGENTS.md — parte del contenido del Módulo 3 del workshop.

---

## Estilo de código

- TypeScript estricto, sin `any`
- Naming: `camelCase` para funciones y variables, `PascalCase` para clases e interfaces
- Agregar JSDoc a todas las funciones públicas en `src/`
- No usar `console.log` en producción (usar el logger si se agrega uno)

## Git

- Branches: `feature/`, `fix/`, `chore/`, `docs/`
- Commits: Conventional Commits — `feat:`, `fix:`, `chore:`, `docs:`, `test:`
- NUNCA hacer push directo a `main`
- PRs requieren descripción clara del cambio

## Tests

- Cada función pública nueva en `src/` debe tener test unitario en `__tests__/`
- Usar Jest con patrón `describe/it`
- Ejecutar `npm test` antes de hacer commit

## Restricciones

- No modificar `src/legacy/` directamente — ese código es parte de un ejercicio del Módulo 6
- No commitear archivos `.env` ni secrets
- No ejecutar comandos destructivos (`DROP TABLE`, `rm -rf`) sin confirmación explícita del usuario

# dev10to100 — Workshop GitHub Copilot CLI

**CleverIT Group · Workshop técnico de 1 día**

Aprende a usar GitHub Copilot CLI como un agente que actúa, no solo sugiere: escribe código, hace commits, abre PRs y automatiza tareas — todo en lenguaje natural desde tu terminal.

---

## Antes del workshop

Asegúrate de tener esto listo antes del día:

1. **Cuenta GitHub activa** (cualquier plan, Free funciona)
2. **Node.js >= 18** — verificar: `node --version`
3. **Git instalado** — verificar: `git --version`
4. **Terminal de tu preferencia** (bash, zsh, PowerShell)
5. **Copilot CLI instalado:**

```bash
# macOS / Linux
curl -fsSL https://gh.io/copilot-install | bash
# o via npm:
npm install -g @github/copilot

# Windows
npm install -g @github/copilot
```

6. **Clonar este repo:**

```bash
git clone https://github.com/karluiz/dev10to100
cd dev10to100
npm install
```

7. **Autenticar el CLI:**

```bash
copilot /login
```

---

## Estructura del repo

```
dev10to100/
├── src/                    # API Node.js/TypeScript de práctica
│   ├── server.ts           # Entry point
│   ├── utils.ts            # Funciones utilitarias (con bugs deliberados)
│   ├── api/
│   │   ├── users.ts        # Endpoints de usuarios
│   │   └── auth.ts         # Endpoints de autenticación
│   └── legacy/             # Código JS sin tipos (ejercicio Módulo 6)
├── __tests__/              # Tests incompletos (ejercicio Módulos 1-2)
├── docs/                   # Guías por módulo para participantes
├── scripts/                # Scripts de automatización (ejercicio Módulo 4)
├── instructor/             # Guía completa del instructor
├── AGENTS.md               # Ejemplo de instrucciones para el agente
└── docs/cheatsheet.md      # Comandos de referencia rápida
```

---

## Módulos del workshop

| # | Módulo | Duración | Docs |
|---|--------|----------|------|
| 0 | Setup del entorno | 45 min | [→](docs/modulo-0-setup.md) |
| 1 | Modo Interactivo: Fundamentos | 60 min | [→](docs/modulo-1-interactivo.md) |
| 2 | Capacidades Agénticas Core | 75 min | [→](docs/modulo-2-agente.md) |
| 3 | MCP y Extensibilidad | 60 min | [→](docs/modulo-3-mcp.md) |
| 4 | Workflows Avanzados y Automatización | 60 min | [→](docs/modulo-4-automatizacion.md) |
| 5 | Seguridad y Governance | 30 min | [→](docs/modulo-5-seguridad.md) |
| 6 | Caso Real y Cierre | 60 min | [→](docs/modulo-6-caso-real.md) |

📋 [Cheatsheet de comandos](docs/cheatsheet.md)

---

## Comandos del proyecto de práctica

```bash
npm install          # Instalar dependencias
npm test             # Ejecutar todos los tests
npm run test:watch   # Tests en modo watch
npm run dev          # Servidor en desarrollo (ts-node)
npm run build        # Compilar TypeScript
```

Ejecutar un test específico:
```bash
npx jest __tests__/utils.test.ts
npx jest --testNamePattern="validateEmail"
```

---

## Sobre el proyecto de práctica

La API en `src/` tiene **bugs deliberados** para los ejercicios del workshop:

| Archivo | Bug |
|---------|-----|
| `src/utils.ts` — `validateEmail` | Rechaza emails con subdominios (ej: `user@mail.example.com`) |
| `src/utils.ts` — `getPage` | Paginación 0-indexed cuando la API espera 1-indexed |
| `src/api/users.ts` — `GET /users` | Falla con error si la lista de usuarios está vacía |
| `src/api/auth.ts` — `GET /auth/me` | No verifica si el token ha expirado |

Los tests en `__tests__/` están incompletos a propósito. Completarlos es parte del ejercicio.

---

## Prerrequisitos técnicos

- Git básico (commit, branch, PR)
- Familiaridad con la terminal
- Leer y entender código TypeScript/JavaScript básico (no hace falta escribirlo, el agente lo hace)

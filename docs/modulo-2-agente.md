# Módulo 2 — Capacidades Agénticas Core

**Duración:** 75 min | **Tipo:** Demo + Lab

## Objetivos

- Entender el flujo de aprobación del agente
- Usar `--allow-tool` y `--deny-tool` para control granular
- Ejecutar tareas completas que involucran Git (commits, branches, PRs)
- Interactuar con GitHub.com desde el terminal

---

## Las herramientas del agente

El agente tiene acceso a un conjunto de "tools" internos:

| Tool | Qué puede hacer |
|------|----------------|
| `shell` | Ejecutar comandos de terminal |
| `write` | Leer y modificar archivos |
| `git` | Comandos git (commit, branch, push, etc.) |
| `gh` | Comandos GitHub CLI (issues, PRs, etc.) |
| MCP servers | Tools externos configurados (ver Módulo 3) |

---

## Control de permisos con flags

```bash
# Permitir sin confirmación
copilot --allow-tool='shell'
copilot --allow-tool='write'

# Bloquear completamente
copilot --deny-tool='shell(rm)'
copilot --deny-tool='git(push)'
copilot --deny-tool='gh(pr merge)'

# Combinaciones
copilot --allow-tool='shell' --deny-tool='shell(rm)' --deny-tool='git(push)'
```

**Tip:** `--deny-tool='shell(rm)'` hace que el agente reciba un error si intenta ejecutar `rm` y tenga que buscar una alternativa. Muy útil en demos y proyectos de clientes.

---

## Lab 2A — Git workflow completo en lenguaje natural

Prueba este prompt (en modo Normal para ver cada paso):

```bash
> Hay un bug en la función validateEmail en src/utils.ts que no valida
  correctamente emails con subdominios. Corrígelo, crea una rama con
  el fix y abre un pull request con una descripción clara del cambio.
```

El agente debería:
1. Leer `src/utils.ts`
2. Identificar y corregir el bug
3. Crear rama `fix/validate-email-subdomain`
4. Hacer commit con mensaje descriptivo
5. Ejecutar `gh pr create` con título y body generados

Observa el flujo de aprobación en cada paso.

---

## Lab 2B — Issues y fixes

El repo tiene issues abiertos con bugs documentados. Elige uno y resuélvelo:

```bash
# Ver los issues desde el CLI
> ¿Qué issues abiertos tiene este repositorio?

# Resolver un issue específico
> Resuelve el issue #2: el endpoint GET /users no maneja el caso
  de lista vacía. Crea rama, fix, commit y PR.
```

---

## Lab 2C — Tests automáticos

```bash
# Lanzar con permiso de shell para no aprobar cada test run
copilot --allow-tool='shell' --deny-tool='shell(rm)'

> Revisa los tests existentes en __tests__/, identifica qué funciones
  de src/ no tienen cobertura y escribe los tests que faltan.
  Ejecuta los tests para verificar que pasan.
```

**Checkpoint:** Deberías tener al menos un PR abierto en el repo antes de continuar.

---

➡️ Siguiente: [Módulo 3 — MCP y Extensibilidad](./modulo-3-mcp.md)

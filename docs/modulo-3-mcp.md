# Módulo 3 — MCP y Extensibilidad

**Duración:** 60 min | **Tipo:** Demo + Lab

## Objetivos

- Entender qué es MCP y por qué importa
- Usar el MCP server nativo de GitHub
- Configurar un MCP server externo
- Definir `AGENTS.md` para comportamiento consistente en repos

---

## ¿Qué es MCP?

**MCP = Model Context Protocol** — un estándar abierto para que agentes de IA se conecten a herramientas y servicios externos.

```
Sin MCP:
  copilot ←→ [solo tu filesystem + GitHub API básica]

Con MCP:
  copilot ←→ [filesystem]
           ←→ [GitHub issues, PRs, branches]  ← nativo, ya incluido
           ←→ [Jira, Linear, Asana]            ← servidores externos
           ←→ [Slack, Teams]                   ← servidores externos
           ←→ [tus propias APIs]               ← puedes construirlos
```

---

## MCP nativo de GitHub (ya incluido)

Desde el CLI puedes interactuar con GitHub en lenguaje natural:

```bash
> Muéstrame todos los issues abiertos asignados a mí
> ¿Cuántos PRs tienen más de 5 días sin revisión?
> Crea un issue "Mejorar manejo de errores en auth" con label "enhancement"
> ¿Algún PR tiene conflictos con main actualmente?
```

---

## Configurar MCP servers externos

Los servidores MCP se configuran en `~/.config/github-copilot/mcp.json`:

```json
{
  "mcpServers": {
    "mi-api-interna": {
      "type": "url",
      "url": "https://mi-servidor.com/mcp",
      "headers": {
        "Authorization": "Bearer ${MI_API_TOKEN}"
      }
    }
  }
}
```

**Ecosistema disponible:** Jira, Linear, Slack, Postgres, MongoDB, AWS, GCP, Figma, y más en el marketplace de GitHub.

---

## AGENTS.md — instrucciones persistentes por repo

El archivo `AGENTS.md` en la raíz del repo define cómo se comporta el agente en ese proyecto específico. Viaja con el repo: todo el equipo tiene el mismo comportamiento sin configuración extra.

```markdown
# AGENTS.md

## Estilo de código
- TypeScript estricto, sin `any`
- Naming: camelCase para funciones, PascalCase para clases
- Siempre agregar JSDoc a funciones públicas

## Git
- Branches: feature/, fix/, chore/, docs/
- Commits: Conventional Commits (feat:, fix:, chore:)
- NUNCA hacer push directo a main

## Tests
- Cada función nueva debe tener test unitario
- Usar Jest + describe/it pattern
- Coverage mínimo: 80%

## Restricciones
- No modificar archivos en /migrations sin aprobación explícita
- No ejecutar scripts que afecten la base de datos sin confirmar
```

---

## Lab 3A — Explorar MCP nativo

```bash
> Muéstrame el estado de todos los issues de este repo

> Asigna el issue #3 a mi usuario de GitHub

> ¿Algún PR tiene conflictos con main actualmente?
```

---

## Lab 3B — Crear AGENTS.md para el repo

Piensa en estas preguntas y crea tu `AGENTS.md`:

- ¿Qué convenciones de commits usa tu equipo?
- ¿Hay archivos que NUNCA deben modificarse sin revisión humana?
- ¿Qué estilo de código quieres que el agente respete?

**Truco — pedirle al agente que genere el borrador:**

```bash
> Analiza este proyecto y genera un AGENTS.md apropiado basado
  en las convenciones que observas en el código existente.
```

Luego refinarlo manualmente y verificar que funciona:

```bash
# Con AGENTS.md configurado con Conventional Commits:
> Crea una función de utilidad para formatear fechas y haz commit
# El commit debería seguir el formato: feat: add date formatting utility
```

---

➡️ Siguiente: [Módulo 4 — Automatización](./modulo-4-automatizacion.md)

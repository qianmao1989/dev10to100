# 📋 Cheatsheet — GitHub Copilot CLI

## Instalación y autenticación

```bash
curl -fsSL https://gh.io/copilot-install | bash   # Instalar (macOS/Linux)
npm install -g @github/copilot                      # Alternativa npm
copilot --version                                   # Verificar instalación
copilot /login                                      # Autenticar vía OAuth
export GH_TOKEN=ghp_xxx                             # Autenticar vía PAT
```

## Iniciar el CLI

```bash
copilot                                             # Modo interactivo
copilot -p "tarea aquí"                             # Modo headless (scripts/CI)
copilot --allow-tool='shell'                        # Sin confirmación en shell
copilot --deny-tool='shell(rm)'                     # Bloquear comando específico
copilot --deny-tool='git(push)'                     # Bloquear git push
copilot --connect SESSION_ID                        # Retomar sesión anterior
copilot --experimental                              # Activar features en preview
```

## Slash commands

```
/help          → Lista todos los comandos
/model         → Ver modelo LLM activo
/model auto    → Cambiar a selección automática
/model claude-sonnet-4.5  → Cambiar modelo específico
/plan          → Entrar en modo planificación
/session       → Info de sesión y uso de requests
/share         → Compartir sesión (Markdown / Gist)
/fleet         → Subagentes en paralelo (experimental)
/login         → Re-autenticar
/changelog     → Últimas novedades del CLI
/experimental  → Toggle features en preview
/feedback      → Enviar feedback a GitHub
```

## Modos de operación (ciclar con Shift+Tab)

```
Normal → Plan → Autopilot → Normal

Normal:    propone y pide aprobación en cada paso
Plan:      muestra el plan completo antes de ejecutar
Autopilot: trabaja de forma autónoma hasta completar la tarea
```

## Adjuntar contexto

```bash
@archivo.ts              # Adjuntar un archivo
@src/api/users.ts        # Ruta relativa al archivo
[drag & drop imagen]     # Arrastrar imagen al terminal
[Ctrl+V imagen]          # Pegar screenshot
```

## Configuración segura para proyectos de cliente

```bash
copilot \
  --deny-tool='shell(rm)' \
  --deny-tool='shell(sudo)' \
  --deny-tool='git(push)' \
  --deny-tool='gh(pr merge)' \
  --deny-tool='gh(issue delete)'
```

Alias útil en `.zshrc` / `.bashrc`:
```bash
alias copilot-safe='copilot \
  --deny-tool="shell(rm)" \
  --deny-tool="shell(sudo)" \
  --deny-tool="git(push)" \
  --deny-tool="gh(pr merge)"'
```

## AGENTS.md mínimo viable

```markdown
# AGENTS.md

## Commits
- Usar Conventional Commits: feat:, fix:, chore:, docs:
- NUNCA push directo a main

## Código
- TypeScript estricto, sin `any`
- Tests obligatorios para funciones nuevas
- JSDoc en todas las funciones públicas

## Restricciones
- No modificar /migrations sin confirmación explícita
- No ejecutar comandos que afecten la base de datos en producción
```

## Límites de uso por plan

| Plan     | Premium requests/mes |
|----------|---------------------|
| Free     | 50                  |
| Pro      | 300                 |
| Business | 1,000 por asiento   |

Ver uso actual: `/session`  
Cuando estés cerca del límite: usar `/model auto`

## Troubleshooting rápido

| Problema | Solución |
|----------|----------|
| `command not found` | `export PATH="$HOME/.local/bin:$PATH"` |
| Org deshabilitó CLI | Contactar admin → Settings → Copilot → CLI |
| No aparece `/fleet` | Ejecutar `/experimental` primero |
| Agente hace algo inesperado en Autopilot | `Ctrl+C` para interrumpir, luego `git diff` |
| Rate limit warning | Cambiar a `/model auto` |

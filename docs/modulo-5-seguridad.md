# Módulo 5 — Seguridad y Governance

**Duración:** 30 min | **Tipo:** Discusión guiada

## Objetivos

- Internalizar el trust model de directorios
- Configurar restricciones para uso en proyectos de clientes
- Entender qué queda registrado (auditoría)
- Conocer las políticas a nivel org/enterprise

---

## Los riesgos reales

### Riesgo 1: Lanzar desde el directorio incorrecto

```bash
# ❌ MAL: lanzar desde home
cd ~
copilot
# El agente tiene acceso a .ssh/, .aws/, .env files, todo

# ✅ BIEN: lanzar solo desde el proyecto
cd ~/repos/mi-proyecto
copilot
```

### Riesgo 2: Autopilot sin restricciones en repos sensibles

En modo Autopilot, el agente puede modificar múltiples archivos, ejecutar comandos, y hacer commits sin pedirte confirmación.

Para repos sensibles: usar siempre modo Normal, o combinar con `--deny-tool` para lo más crítico.

### Riesgo 3: MCP servers con permisos excesivos

Un MCP server de base de datos mal configurado podría dejar al agente ejecutar `DELETE` sin confirmación.

**Mitigación:** `--deny-tool='mcp-server-name(delete)'` o configurar el MCP server con permisos de solo lectura por defecto.

---

## Configuración segura para proyectos de cliente

```bash
copilot \
  --deny-tool='shell(rm)' \
  --deny-tool='shell(sudo)' \
  --deny-tool='git(push)' \
  --deny-tool='gh(pr merge)' \
  --deny-tool='gh(issue delete)'
```

Alias en `.zshrc` / `.bashrc`:
```bash
alias copilot-safe='copilot \
  --deny-tool="shell(rm)" \
  --deny-tool="shell(sudo)" \
  --deny-tool="git(push)" \
  --deny-tool="gh(pr merge)"'
```

---

## ¿Qué queda registrado?

| Qué | ¿Se registra? |
|-----|--------------|
| Solicitudes al modelo | ✅ Sí (para billing/auditoría de GitHub) |
| Acciones en GitHub (issues, PRs) | ✅ Sí (activity log normal) |
| Archivos locales leídos/modificados | ⚠️ Se usan como contexto para el modelo |
| Contenido de conversaciones | Revisar política de privacidad de GitHub Copilot |

**Recomendación:** Para proyectos con código muy sensible o bajo NDA estricto, revisar la política de datos de GitHub Copilot con el cliente antes de usar el CLI en ese repo.

---

## Políticas en org/enterprise

- El admin puede **deshabilitar el CLI completamente** para toda la org
- Las políticas se aplican automáticamente cuando el usuario está autenticado
- Considerar: quién puede usar Autopilot, qué MCP servers están permitidos

---

## Preguntas para reflexionar

1. ¿Tienes archivos con secrets en tu home directory? (`.env`, `.aws/credentials`, etc.)
2. ¿Qué pasa si el agente accede a esos archivos como contexto?
3. ¿Tu empresa/cliente tiene política de uso de IA? ¿Cómo encaja el CLI?
4. ¿Qué operaciones en tus proyectos NUNCA deberían ejecutarse sin revisión humana?

---

➡️ Siguiente: [Módulo 6 — Caso Real y Cierre](./modulo-6-caso-real.md)

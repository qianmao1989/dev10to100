# Módulo 4 — Workflows Avanzados y Automatización

**Duración:** 60 min | **Tipo:** Lab intensivo

## Objetivos

- Usar el modo headless (`-p`) para scripts y CI/CD
- Entender `/fleet` para ejecución en paralelo
- Gestionar sesiones con `/share` y `--connect`
- Conocer los límites de uso y cómo gestionarlos

---

## Modo programático (`-p`)

Permite usar el CLI en scripts, pipelines CI/CD y automatizaciones sin interactividad:

```bash
# Output estándar, exit codes semánticos
copilot -p "Revisa si hay vulnerabilidades de seguridad en src/"

# Con exit code para scripting
copilot -p "¿Pasan todos los tests?" && echo "OK" || echo "FALLO"

# Combinado con flags de herramientas
copilot -p --allow-tool='shell' "Ejecuta los tests y dame un reporte"
```

**Exit codes:**
- `0` → Tarea completada sin errores
- `1` → Error de permisos o comunicación
- `2` → Tarea completada con advertencias

**Ejemplo en GitHub Actions:**
```yaml
- name: AI Code Review
  run: |
    copilot -p --deny-tool='write' \
    "Revisa los archivos modificados en este PR y reporta
     cualquier problema de seguridad o buenas prácticas"
```

---

## `/share` — Persistir y compartir sesiones

```bash
/share
```

Opciones: guardar como Markdown local, subir como GitHub Gist (privado o público).

**Casos de uso:**
- Documentar una sesión de debug compleja
- Compartir con el equipo cómo se resolvió un problema
- Crear tutoriales a partir de sesiones reales

---

## `--connect` — Retomar sesiones

```bash
/session              # Ver ID de sesión actual
copilot --connect SESSION_ID   # Retomar desde otro terminal o máquina
```

Útil para: pair programming, handoff de contexto, continuar en otro dispositivo.

---

## `/fleet` — Subagentes en paralelo (experimental)

```bash
/experimental    # Activar primero
/fleet
```

Ejecuta múltiples subagentes en paralelo, cada uno con su propia tarea.
⚠️ Consume más premium requests.

---

## Lab 4A — Script de análisis automático

Ya existe en el repo: `scripts/ai-review.sh`. Ejecútalo:

```bash
chmod +x scripts/ai-review.sh
./scripts/ai-review.sh
```

Luego modifícalo para que también incluya una revisión de documentación:
```bash
> Modifica scripts/ai-review.sh para agregar una revisión de
  funciones públicas que no tienen JSDoc en src/
```

---

## Lab 4B — Sesión compartida

```bash
# Al final de tu sesión de trabajo del día:
/share

# Comparte la URL con el compañero de al lado.
# Debería poder ver el contexto completo de lo que hiciste.
```

---

## Lab 4C — Fleet (si hay tiempo)

```bash
/experimental
/fleet
> Propón dos implementaciones diferentes del sistema de caché
  para esta API: una con Redis y otra in-memory. Compáralas.
```

---

➡️ Siguiente: [Módulo 5 — Seguridad](./modulo-5-seguridad.md)

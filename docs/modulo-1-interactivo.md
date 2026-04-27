# Módulo 1 — Modo Interactivo: Fundamentos

**Duración:** 60 min | **Tipo:** Teoría + Lab

## Objetivos

- Dominar los slash commands más usados
- Entender los tres modos de operación
- Saber seleccionar y cambiar modelos
- Adjuntar contexto (archivos, imágenes, documentos)

---

## Los tres modos (Shift+Tab para ciclar)

```
Normal → Plan → Autopilot → Normal
```

**Modo Normal (default):**
El agente propone acciones y pide aprobación en cada paso. Úsalo cuando quieras control total.

**Modo Plan:**
El agente hace un outline completo del plan antes de ejecutar. Úsalo para tareas complejas: entiendes el scope antes de comprometerte.

**Modo Autopilot:**
El agente trabaja de forma autónoma hasta completar la tarea.
⚠️ Puede hacer muchos cambios sin pedir confirmación. Muy útil en repos de práctica — con cuidado en producción.

---

## Slash commands esenciales

| Comando | Qué hace |
|---------|----------|
| `/help` | Lista todos los comandos disponibles |
| `/model` | Ver o cambiar el modelo LLM activo |
| `/plan` | Entrar en modo planificación |
| `/session` | Ver info de la sesión y uso de requests |
| `/share` | Guardar sesión como Markdown o Gist |
| `/changelog` | Ver últimas novedades del CLI |
| `/experimental` | Activar features en preview |
| `/feedback` | Enviar feedback a GitHub |

---

## Selección de modelos

```bash
/model              # Ver modelo actual
/model auto         # Deja que Copilot elija el mejor para cada tarea
/model claude-sonnet-4.5    # Default del CLI
/model gpt-5        # Alternativa (disponibilidad según plan)
```

**¿Cuándo cambiar?**
- Para código puro: `auto` funciona bien
- Para razonamiento complejo o arquitectura: prueba ambos y compara
- Cuando estés cerca del límite de requests: `auto` usa modelos más eficientes

---

## Adjuntar contexto

```bash
# Adjuntar un archivo
> @src/utils.ts ¿hay bugs en esta función?

# Adjuntar múltiples archivos
> @src/api/users.ts @src/api/auth.ts ¿hay inconsistencias entre estos módulos?

# Imágenes (screenshot de un error)
> [pegar imagen con Ctrl+V] ¿qué está fallando?
```

---

## Lab 1 — Exploración del codebase

Trabaja en el repo `dev10to100`. Prueba estos prompts en orden:

```bash
# 1. Entender el proyecto
> ¿Qué hace este proyecto? Describe los módulos principales.

# 2. Encontrar problemas
> ¿Hay algún bug evidente en el código? Explícame los que encuentres.

# 3. Pedir documentación
> Genera un README.md completo para el módulo de usuarios.

# 4. Comparar modos — prueba esto en Normal y luego en Plan (Shift+Tab):
> Agrega manejo de errores consistente en todos los endpoints
```

**Checkpoint:** Antes de continuar deberías haber generado al menos una de estas cosas:
- Un análisis de bugs del código
- Documentación de una función
- Un README para algún módulo

---

➡️ Siguiente: [Módulo 2 — Capacidades Agénticas](./modulo-2-agente.md)

# Módulo 6 — Caso Real y Cierre

**Duración:** 60 min | **Tipo:** Demo + Q&A

## Objetivos

- Ver el CLI aplicado a un caso real end-to-end
- Consolidar los aprendizajes del día
- Calibrar cuándo usar CLI vs IDE Copilot vs Claude Code

---

## Demo — Caso real end-to-end

Elige el escenario que sea más relevante para tu contexto:

### Opción A — Feature completa desde issue a PR

```bash
> Tenemos el issue #7: "Implementar rate limiting en el endpoint
  de login para prevenir brute force". Implementa la solución
  completa: código, tests, documentación y PR.
```

### Opción B — Migración de código legacy

```bash
> En src/legacy/ hay código JavaScript antiguo sin tipos.
  Migra todos los archivos a TypeScript estricto, agrega los
  tipos correctos basándote en cómo se usan las funciones,
  y asegúrate de que los tests pasen.
```

### Opción C — Integración API externa

```bash
> Necesito integrar la API de SendGrid para enviar emails
  transaccionales. Crea el módulo de email, las funciones
  de envío, las variables de entorno necesarias y tests con mocks.
```

---

## ¿Cuándo usar qué herramienta?

```
COPILOT CLI → cuando tu flujo es terminal-first
  ✅ Full workflow: código + git + GitHub sin salir del terminal
  ✅ Automatización y scripting (modo -p)
  ✅ Exploración de repos desconocidos rápido
  ✅ Tareas end-to-end: issue → código → test → PR

COPILOT EN IDE (VS Code, JetBrains) → cuando estás editando
  ✅ Autocomplete mientras escribes
  ✅ Ediciones en archivos específicos con contexto del editor
  ✅ Chat lateral mientras programas

CLAUDE CODE → cuando necesitas más poder agéntico
  ✅ Proyectos muy complejos con mucho contexto
  ✅ Integración con MCP servers custom avanzados
  ✅ Cuando el modelo Claude es crítico para el resultado

COPILOT AGENT (cloud) → para tareas asíncronas
  ✅ "Hacer esto mientras yo trabajo en otra cosa"
  ✅ Tasks que toman mucho tiempo
  ✅ Asignar issues a Copilot como si fuera un dev del equipo
```

---

## Entregables para llevar

- ✅ `AGENTS.md` que creaste en el Lab 3 — úsalo en tus repos reales
- ✅ [Cheatsheet](./cheatsheet.md) de comandos
- ✅ `scripts/ai-review.sh` adaptado a tu proyecto
- ✅ Este repo para repasar ejercicios

---

## Preguntas de retrospectiva

1. ¿Cuál fue la funcionalidad que más te sorprendió?
2. ¿En qué proyecto actual podrías usar el CLI esta semana?
3. ¿Qué te genera dudas o incomodidad sobre usar un agente que modifica archivos?
4. ¿Cómo cambiaría tu workflow si usaras el CLI todos los días?

# 🧑‍🏫 Guía del Instructor — Workshop Técnico: GitHub Copilot CLI
**CleverIT Group · Formato: Presencial 1 día · Audiencia: Developers**

> **Versión del documento:** Abril 2025  
> **Duración total:** 7–8 horas (incluye breaks y labs)  
> **Prerrequisitos para participantes:** Git básico, familiaridad con terminal, cuenta GitHub activa

---

## 📋 Índice

1. [Resumen del día](#resumen-del-día)
2. [Setup previo al workshop](#setup-previo-al-workshop)
3. [Módulo 0 — Contexto y Setup del Entorno](#módulo-0--contexto-y-setup-del-entorno-45-min)
4. [Módulo 1 — Modo Interactivo: Fundamentos](#módulo-1--modo-interactivo-fundamentos-60-min)
5. [Módulo 2 — Capacidades Agénticas Core](#módulo-2--capacidades-agénticas-core-75-min)
6. [Módulo 3 — MCP y Extensibilidad](#módulo-3--mcp-y-extensibilidad-60-min)
7. [Módulo 4 — Workflows Avanzados y Automatización](#módulo-4--workflows-avanzados-y-automatización-60-min)
8. [Módulo 5 — Seguridad y Governance](#módulo-5--seguridad-y-governance-30-min)
9. [Módulo 6 — Caso Real y Cierre](#módulo-6--caso-real-y-cierre-60-min)
10. [Cheatsheet del instructor](#cheatsheet-del-instructor)
11. [FAQ y troubleshooting](#faq-y-troubleshooting)

---

## Resumen del día

| Bloque | Módulo | Duración | Tipo |
|--------|--------|----------|------|
| 09:00 | Bienvenida + M0: Setup | 45 min | Teoría + lab |
| 09:45 | M1: Modo Interactivo | 60 min | Teoría + lab |
| 10:45 | ☕ Break | 15 min | — |
| 11:00 | M2: Agente Core | 75 min | Demo + lab |
| 12:15 | 🍽️ Almuerzo | 60 min | — |
| 13:15 | M3: MCP y Extensibilidad | 60 min | Demo + lab |
| 14:15 | M4: Automatización | 60 min | Lab intensivo |
| 15:15 | ☕ Break | 15 min | — |
| 15:30 | M5: Seguridad | 30 min | Discusión guiada |
| 16:00 | M6: Caso Real + Cierre | 60 min | Demo + Q&A |
| 17:00 | Fin | — | — |

---

## Setup previo al workshop

> **⚠️ Hacer esto 24–48 horas antes. No el día del evento.**

### Checklist del instructor

- [ ] Repo de práctica clonado localmente: `git clone https://github.com/cleveritgroup/copilot-cli-workshop`
- [ ] `copilot` CLI instalado y autenticado en tu máquina de demo
- [ ] Cuenta GitHub con plan que incluya Copilot (Free mínimo)
- [ ] MCP server de demo configurado (ver Módulo 3)
- [ ] Terminal configurada para proyección (fuente ≥ 18pt, tema oscuro)
- [ ] Repo de práctica para participantes creado con issues de ejemplo
- [ ] Acceso a copilot.cleveritgroup.ai funcionando

### Checklist por participante (enviar por email con antelación)

```
Antes del workshop, por favor asegúrate de:

1. Tener cuenta GitHub activa (cualquier plan, Free funciona)
2. Tener Node.js >= 18 instalado: node --version
3. Tener Git instalado: git --version
4. Terminal de tu preferencia (bash, zsh, PowerShell)
5. Clonar el repo del workshop: 
   git clone https://github.com/cleveritgroup/copilot-cli-workshop
6. Un editor de texto (VS Code recomendado, pero no obligatorio)
```

---

## Módulo 0 — Contexto y Setup del Entorno *(45 min)*

### 🎯 Objetivos del módulo
- Entender la evolución de `gh copilot` al nuevo `copilot` CLI
- Tener el entorno instalado y autenticado
- Comprender el modelo de seguridad desde el inicio

### 🗣️ Teoría (15 min)

#### El elefante en la sala: hay DOS herramientas

Abrir con esto. Los participantes pueden estar confundidos porque hay documentación de ambas versiones en internet.

```
ANTES (deprecated 25 octubre 2025):
  gh copilot suggest "instalar git"   → te sugería un string de texto
  gh copilot explain "traceroute x"   → te explicaba un comando
  
  Era un helper. TÚ ejecutabas todo.

AHORA (copilot CLI standalone):
  copilot                              → agente que ACTÚA
  
  Puede leer archivos, modificarlos, ejecutar comandos,
  abrir PRs, crear issues, todo en lenguaje natural.
```

**Analogía útil para explicar el salto:** Es la diferencia entre un GPS que te dice el camino vs. un conductor autónomo. Mismo destino, diferente nivel de delegación.

#### Qué planes incluyen el CLI

| Plan | ¿Incluye Copilot CLI? | Notas |
|------|----------------------|-------|
| GitHub Free | ✅ Sí | Con límite de premium requests |
| Pro / Pro+ | ✅ Sí | Mayor límite |
| Business | ✅ Sí | Admin puede deshabilitarlo por org |
| Enterprise | ✅ Sí | Idem, con más controles |

> **Nota para instructor:** Si algún participante tiene Copilot via su organización, verificar que el admin no haya deshabilitado el CLI en la configuración de la org.

### 🔧 Lab 0 — Instalación y primera sesión *(30 min)*

#### Paso 1: Instalación

**macOS / Linux:**
```bash
curl -fsSL https://gh.io/copilot-install | bash
```

O via npm:
```bash
npm install -g @github/copilot
```

Verificar:
```bash
copilot --version
```

**Windows:**
```powershell
# Via npm (recomendado en Windows)
npm install -g @github/copilot

# O instalar el .msi desde la documentación oficial
```

> **Tip para instructor:** Si alguien tiene problemas con PATH, el binario queda en `~/.local/bin` (Linux no-root) o `/usr/local/bin` (con sudo). Pedir que verifiquen su PATH.

#### Paso 2: Autenticación

**Método 1 — OAuth (recomendado, interactivo):**
```bash
copilot /login
```
Esto abre el browser, muestran un device code, aprueban en GitHub. Simple.

**Método 2 — PAT (para entornos automatizados):**
1. Ir a GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained
2. Crear token con permiso: `Copilot Requests` (Read and Write)
3. Exportar variable:
```bash
export GH_TOKEN=ghp_tutoken123
# O en .zshrc / .bashrc para persistir
```

#### Paso 3: Primera interacción — el trust model

Navegar a un directorio de código (NO desde `~`):
```bash
cd ~/repos/copilot-cli-workshop
copilot
```

El CLI presentará el **trust prompt**:

```
⚠️  This directory and its subdirectories will be accessible to Copilot.
    The agent may read, modify, and execute files here.
    
    /home/user/repos/copilot-cli-workshop
    
    Do you trust this directory?
    
    > Yes, trust this directory
      Yes, trust all subdirectories too  
      No, exit
```

Explicar las tres opciones antes de que ellos las vean.

**¿Por qué existe esto?** El agente puede modificar archivos y ejecutar comandos. Necesita un sandbox declarado. Si lo lanzas desde `~/`, le estás dando acceso a TODO tu home, incluido `.ssh/`, `.aws/`, configs con secrets, etc.

**Regla de oro que deben recordar:**
```
✅ ~/repos/mi-proyecto
✅ ~/code/cliente/api
❌ ~
❌ /
❌ /etc
```

#### Verificación exitosa

Al terminar el lab, cada participante debe poder ver el prompt interactivo del copilot CLI ejecutándose en el directorio del workshop:

```
╭─ GitHub Copilot CLI ──────────────────────────╮
│  Powered by Claude Sonnet 4.5                  │
│  /help for commands · Shift+Tab for autopilot  │
╰────────────────────────────────────────────────╯

>
```

---

## Módulo 1 — Modo Interactivo: Fundamentos *(60 min)*

### 🎯 Objetivos del módulo
- Dominar los slash commands más usados
- Entender los tres modos de operación
- Saber seleccionar y cambiar modelos
- Adjuntar contexto (archivos, imágenes, documentos)

### 🗣️ Teoría + Demo Guiada (30 min)

#### Anatomía del CLI interactivo

```
┌─────────────────────────────────────────────────────┐
│  GitHub Copilot CLI                                  │
│                                                      │
│  > aquí escribes en lenguaje natural                 │
│                                                      │
│  Modos: Normal → Plan → Autopilot (Shift+Tab cicla) │
│  Modelo activo: auto / claude-sonnet-4.5 / gpt-5    │
└─────────────────────────────────────────────────────┘
```

#### Slash commands esenciales

Hacer demo en vivo de cada uno mientras se explica:

| Comando | Qué hace | Ejemplo |
|---------|----------|---------|
| `/help` | Lista todos los comandos disponibles | `/help` |
| `/model` | Ver o cambiar el modelo LLM activo | `/model gpt-5` |
| `/plan` | Entrar en modo planificación | `/plan` |
| `/session` | Ver info de la sesión actual | `/session` |
| `/share` | Guardar sesión como Markdown o Gist | `/share` |
| `/feedback` | Enviar feedback a GitHub | `/feedback` |
| `/experimental` | Activar features en preview | `/experimental` |
| `/login` | Autenticar o re-autenticar | `/login` |
| `/changelog` | Ver últimas novedades del CLI | `/changelog` |

**Demo en vivo — secuencia sugerida:**
```bash
# 1. Explorar un codebase desconocido
> ¿Qué hace este proyecto? Dame un resumen de la arquitectura.

# 2. Ver qué modelo está activo
/model

# 3. Cambiar a auto y ver diferencia
/model auto

# 4. Pedir algo simple de código
> Crea una función en TypeScript que valide un email

# 5. Compartir la sesión
/share
```

#### Los tres modos de operación

**Modo Normal (default):**
- El agente propone acciones, pide aprobación en cada paso
- Bueno para: tareas donde quieres control total
- El agente pregunta antes de ejecutar cualquier comando o modificar archivos

**Modo Plan (Shift+Tab una vez desde Normal):**
- El agente primero hace un outline del plan completo
- Tú apruebas el plan antes de que empiece a ejecutar
- Bueno para: tareas complejas multi-paso, entender scope antes de comprometerse
- Demo:
```
> /plan
> Necesito refactorizar el módulo de autenticación para usar JWT
```

**Modo Autopilot (Shift+Tab dos veces desde Normal):**
- El agente trabaja de forma autónoma hasta completar la tarea
- Mínima interrupción, máxima velocidad
- **⚠️ Advertencia al grupo:** En autopilot, el agente puede hacer muchos cambios sin pedirte confirmación. Útil en repos de práctica, con cuidado en producción.
- Demo en el repo del workshop:
```
# Entrar a autopilot con Shift+Tab x2
> Agrega tests unitarios para todas las funciones en src/utils.ts
```

#### Selección de modelos

```bash
/model              # Ver modelo actual
/model auto         # Deja que Copilot elija el mejor para cada tarea
/model claude-sonnet-4.5    # Default del CLI
/model gpt-5        # Alternativa (disponibilidad según plan)
```

**¿Cuándo importa el modelo?**
- Para tareas de código puro: `auto` funciona bien
- Para razonamiento complejo o arquitectura: probar ambos y comparar
- Para contextos muy largos de código: Claude Sonnet suele manejar mejor windows grandes

#### Adjuntar contexto

```bash
# Adjuntar un archivo con @
> @README.md ¿cuáles son los endpoints expuestos?

# Adjuntar múltiples archivos
> @src/api/users.ts @src/api/auth.ts ¿hay inconsistencias entre estos módulos?

# Imágenes (pegar o drag-and-drop al terminal)
> [pegar screenshot de un error] ¿qué está fallando?

# Documentos (PDF, txt, etc.)
> @architecture-spec.pdf implementa lo que describe el documento
```

### 🧪 Lab 1 — Exploración de codebase *(30 min)*

Los participantes trabajan en el repo del workshop. El repo tiene:
- Una API REST en Node.js/TypeScript con bugs deliberados
- Tests incompletos
- Sin documentación

**Ejercicios guiados:**

```bash
# 1. Entender el proyecto
> ¿Qué hace este proyecto? Describe los módulos principales.

# 2. Encontrar problemas
> ¿Hay algún bug evidente en el código? Explícame los que encuentres.

# 3. Pedir documentación
> Genera un README.md completo para este proyecto.

# 4. Cambiar modo y comparar
# Modo Normal:
> Explica el flujo de autenticación paso a paso

# Modo Plan:
# Shift+Tab
> Agrega manejo de errores consistente en todos los endpoints
```

**Checkpoint:** Cada participante debe haber generado algo (README, análisis de bugs, documentación de función) antes de continuar.

---

## Módulo 2 — Capacidades Agénticas Core *(75 min)*

### 🎯 Objetivos del módulo
- Entender el flujo de aprobación del agente
- Usar `--allow-tool` y `--deny-tool` para control granular
- Ejecutar tareas que involucran Git (commits, branches, PRs)
- Interactuar con GitHub.com desde el terminal

### 🗣️ Teoría (20 min)

#### El paradigma agéntico: de sugerir a ejecutar

Diagrama en pizarra:

```
BEFORE (gh copilot, deprecated):
  Dev → "instala git" → Copilot → "aquí está el comando" → Dev copia y pega → Dev ejecuta

NOW (copilot CLI):
  Dev → "instala git en el sistema" → Copilot → (ejecuta brew install git) → Done
                                               ↑
                                         con tu aprobación
                                         (a menos que uses autopilot)
```

#### Las herramientas del agente

El agente tiene acceso a un conjunto de "tools" internos:

| Tool | Qué puede hacer |
|------|----------------|
| `shell` | Ejecutar comandos de terminal |
| `write` | Leer y modificar archivos |
| `git` | Comandos git (commit, branch, etc.) |
| `gh` | Comandos GitHub CLI (issues, PRs) |
| MCP servers | Tools externos configurados |

#### Control de permisos con flags

**Sintaxis:**
```bash
copilot --allow-tool='TOOL'           # Permitir sin confirmación
copilot --deny-tool='TOOL'            # Bloquear completamente
copilot --deny-tool='TOOL(subcomando)' # Bloquear subcomando específico
```

**Ejemplos prácticos:**

```bash
# Permitir shell sin pedir confirmación en cada comando
copilot --allow-tool='shell'

# Nunca ejecutar rm (útil en demos/producción)
copilot --deny-tool='shell(rm)'

# Permitir modificar archivos sin confirmación
copilot --allow-tool='write'

# Bloquear git push (revisas el diff antes de subir)
copilot --deny-tool='git(push)'

# Combinaciones (se pueden encadenar)
copilot --allow-tool='shell' --deny-tool='shell(rm)' --deny-tool='git(push)'
```

**Tip para instructor:** Mostrar en vivo el efecto de `--deny-tool='shell(rm)'`. El agente recibirá un error si intenta usar ese comando y tendrá que buscar una alternativa.

#### Integración Git nativa

```bash
# Desde el CLI, el agente puede:
> Crea una rama feature/auth-refactor y muévete a ella
> Haz commit de los cambios con un mensaje descriptivo
> Abre un pull request contra main con un summary del cambio
```

El agente ejecuta los `git` y `gh` commands reales, con tu aprobación en cada paso.

### 🎬 Demo 2A — Git workflow completo en lenguaje natural *(15 min)*

Instructor hace esto en vivo en el repo del workshop:

```bash
cd ~/repos/copilot-cli-workshop
copilot

# En el CLI:
> Hay un bug en la función validateEmail en src/utils.ts que no valida 
  correctamente emails con subdominios. Corrígelo, crea una rama con 
  el fix y abre un pull request con una descripción clara del cambio.
```

El agente debería:
1. Leer el archivo `src/utils.ts`
2. Identificar y corregir el bug
3. Crear rama `fix/validate-email-subdomain`
4. Hacer commit con mensaje descriptivo
5. Ejecutar `gh pr create` con title y body generados

Mostrar el PR resultante en GitHub.com.

### 🧪 Lab 2 — Workflow agéntico real *(40 min)*

**Ejercicio 1 — Fix + PR (20 min):**

El repo tiene tres bugs documentados en los issues de GitHub. Cada participante elige uno:

```bash
# Ver los issues desde el CLI
> ¿Qué issues abiertos tiene este repositorio?

# Elegir un issue y resolverlo
> Resuelve el issue #2: el endpoint GET /users no maneja el caso 
  de lista vacía. Crea rama, fix, commit y PR.
```

**Ejercicio 2 — Tests automáticos (20 min):**

```bash
# Con --allow-tool='shell' para no aprobar cada test run
copilot --allow-tool='shell' --deny-tool='shell(rm)'

> Revisa los tests existentes en __tests__/, identifica qué funciones 
  del src/ no tienen cobertura y escribe los tests que faltan. 
  Ejecuta los tests para verificar que pasan.
```

**Checkpoint:** Cada participante debe tener al menos un PR abierto en el repo del workshop.

---

## Módulo 3 — MCP y Extensibilidad *(60 min)*

### 🎯 Objetivos del módulo
- Entender qué es MCP y por qué importa
- Usar el MCP server nativo de GitHub
- Configurar un MCP server externo
- Definir `AGENTS.md` para comportamiento consistente en repos

### 🗣️ Teoría (20 min)

#### ¿Qué es MCP en este contexto?

**MCP = Model Context Protocol** — un estándar abierto para que agentes de IA se conecten a herramientas y servicios externos.

```
Sin MCP:
  copilot ←→ [solo tu filesystem + GitHub API básica]

Con MCP:
  copilot ←→ [filesystem]
           ←→ [GitHub issues, PRs, branches]  ← nativo
           ←→ [Jira, Linear, Asana]            ← servers externos
           ←→ [Slack, Teams]                   ← servers externos
           ←→ [tus propias APIs]               ← puedes buildear
```

El MCP de GitHub está **built-in** en el CLI. Para servidores externos, necesitas configuración adicional.

#### MCP server nativo de GitHub

Acceso automático a:
- Issues (listar, crear, comentar, cerrar)
- Pull requests (crear, revisar, mergear)
- Branches (listar, crear)
- Repositorios (buscar, info)
- Actions/Workflows (ver status)

Todo en lenguaje natural, sin salir del terminal.

**Demo rápida:**
```bash
> Muéstrame todos los issues abiertos asignados a mí
> ¿Cuántos PRs tienen más de 5 días sin revisión?
> Crea un issue titulado "Mejorar manejo de errores en auth" con label "enhancement"
```

#### Configurar MCP servers externos

Los servidores MCP se configuran en `~/.config/github-copilot/mcp.json` (o equivalente según OS):

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

**Ecosistema de MCP servers disponibles:**
- Jira, Linear (gestión de proyectos)
- Slack, Teams (comunicación)
- Postgres, MongoDB (bases de datos)
- AWS, GCP (cloud)
- Figma (diseño)
- Muchos más en el marketplace de GitHub

#### AGENTS.md — instrucciones persistentes por repo

El archivo `AGENTS.md` en la raíz del repo define:
- Qué tools puede usar el agente en este repo
- Estilo de código esperado
- Reglas de negocio que el agente debe respetar
- Convenciones de naming, commits, branches

```markdown
# AGENTS.md

## Instrucciones para el agente

### Estilo de código
- TypeScript estricto, sin `any`
- Naming: camelCase para funciones, PascalCase para clases
- Siempre agregar JSDoc a funciones públicas

### Git
- Branches: feature/, fix/, chore/, docs/
- Commits: Conventional Commits (feat:, fix:, chore:)
- NUNCA hacer push directo a main

### Tests
- Cada función nueva debe tener test unitario
- Usar Jest + describe/it pattern
- Coverage mínimo: 80%

### Seguridad
- No commitear secrets ni API keys
- Variables de entorno siempre en .env (no en código)

### Restricciones
- No modificar archivos en /migrations sin aprobación explícita
- No ejecutar scripts que afecten la base de datos sin confirmar
```

**Por qué es poderoso:** Este archivo viaja con el repo. Cualquier desarrollador del equipo que use el CLI en este repo tendrá el mismo comportamiento del agente, sin configuración adicional.

### 🧪 Lab 3 — MCP + AGENTS.md *(40 min)*

**Ejercicio 1 — Explorar MCP nativo (15 min):**

```bash
> Muéstrame el estado de todos los issues de este repo

> Asigna el issue #3 a mi usuario de GitHub

> ¿Algún PR tiene conflictos con main actualmente?
```

**Ejercicio 2 — Crear AGENTS.md para el repo del workshop (25 min):**

Cada participante crea su propio `AGENTS.md`. Guiar con estas preguntas:

- ¿Qué convenciones de commits usa tu equipo?
- ¿Hay archivos que NUNCA deben modificarse sin revisión humana?
- ¿Qué estilo de código quieres que el agente siga?
- ¿Qué herramientas externas usa tu proyecto?

```bash
# Truco: pedirle al agente que genere el AGENTS.md
> Analiza este proyecto y genera un AGENTS.md apropiado basado 
  en las convenciones que observas en el código existente.
  
# Luego refinarlo manualmente
```

Probar que el `AGENTS.md` funciona:
```bash
# Sin AGENTS.md: el agente hace commits sin formato
# Con AGENTS.md: los commits deben seguir Conventional Commits

> Crea una función de utilidad para formatear fechas y haz commit
```

---

## Módulo 4 — Workflows Avanzados y Automatización *(60 min)*

### 🎯 Objetivos del módulo
- Usar el modo headless/programático para pipelines CI/CD
- Entender `/fleet` y ejecución paralela
- Gestionar sesiones y compartir contexto
- Conocer los límites de uso y cómo gestionarlos

### 🗣️ Teoría (20 min)

#### Modo programático (`-p` flag)

El modo programático (headless) permite usar el CLI en scripts, CI/CD pipelines y automatizaciones:

```bash
# Sin interactividad, output estándar, exit codes semánticos
copilot -p "Revisa si hay vulnerabilidades de seguridad en src/"

# Con exit code para scripting
copilot -p "¿Pasan todos los tests?" && echo "OK" || echo "FALLO"

# Combinado con flags de herramientas
copilot -p --allow-tool='shell' "Ejecuta los tests y dame un reporte"
```

**Exit codes en modo `-p`:**
- `0`: Tarea completada sin errores
- `1`: Error de permisos o comunicación
- `2`: Tarea completada con advertencias

**Caso de uso CI/CD:**
```yaml
# .github/workflows/ai-review.yml
- name: AI Code Review
  run: |
    copilot -p --deny-tool='write' \
    "Revisa los archivos modificados en este PR y reporta 
     cualquier problema de seguridad o buenas prácticas"
```

#### `/fleet` — Subagentes en paralelo

Feature experimental (requiere `/experimental` activado):

```bash
/fleet
```

Permite ejecutar múltiples subagentes en paralelo, cada uno con su propia tarea. Útil para:
- Ejecutar la misma tarea con diferentes modelos y comparar
- Dividir un task grande en subtareas paralelas
- Explorar múltiples soluciones simultáneamente

> **Nota para instructor:** Fleet consume más premium requests. Mencionarlo antes del lab.

#### `/share` — Persistir y compartir sesiones

```bash
/share
```

Opciones:
- Guardar como archivo Markdown local
- Subir como GitHub Gist (privado o público)
- Obtener URL para compartir con el equipo

**Casos de uso:**
- Documentar una sesión de debug compleja
- Compartir con el equipo cómo se resolvió un problema
- Crear tutoriales a partir de sesiones reales
- Guardar el contexto para continuar luego con `--connect`

#### Límites de uso

```
Avisos automáticos del CLI:
  75% del límite semanal → warning amarillo
  90% del límite semanal → warning rojo

/session → muestra uso actual
```

| Plan | Premium requests/mes |
|------|---------------------|
| Free | 50 |
| Pro | 300 |
| Business | 1,000 por asiento |

**`auto` mode** selecciona modelos más eficientes cuando está cerca del límite.

#### `--connect` — Retomar sesiones remotas

```bash
# Obtener ID de sesión actual
/session

# Desde otra máquina o terminal
copilot --connect SESSION_ID_AQUI
```

Útil para: pair programming, handoff de contexto entre turnos, continuar trabajo en otro dispositivo.

### 🧪 Lab 4 — Automatización *(40 min)*

**Ejercicio 1 — Script de análisis automático (20 min):**

Crear un script bash que use el CLI en modo `-p` para automatizar una tarea repetitiva:

```bash
# crear archivo: scripts/ai-review.sh
#!/bin/bash

echo "🤖 Iniciando revisión AI del PR..."

# Revisión de seguridad
copilot -p --deny-tool='write' \
  "Revisa los archivos TypeScript en src/ y lista cualquier 
   problema de seguridad: injection, datos expuestos, auth faltante"

# Revisión de calidad
copilot -p --deny-tool='write' \
  "¿Hay funciones con complejidad ciclomática alta? Lista las 3 peores."

echo "✅ Revisión completada"
```

```bash
chmod +x scripts/ai-review.sh
./scripts/ai-review.sh
```

**Ejercicio 2 — Sesión compartida (10 min):**

```bash
# Generar un Gist con la sesión de trabajo del día
/share

# Compartir la URL con el compañero de al lado
# El compañero debe poder ver el contexto completo de lo que hiciste
```

**Ejercicio 3 — Fleet comparison (10 min, solo si hay tiempo):**

```bash
# Activar experimental
/experimental

# Usar fleet para comparar dos enfoques
/fleet
> Propón dos implementaciones diferentes del sistema de caché 
  para esta API: una con Redis y otra in-memory. Compáralas.
```

---

## Módulo 5 — Seguridad y Governance *(30 min)*

### 🎯 Objetivos del módulo
- Internalizar el trust model de directorios
- Saber configurar restricciones para uso en clientes
- Entender qué queda registrado (auditoría)
- Políticas a nivel org/enterprise

### 🗣️ Discusión guiada (30 min)

Este módulo es principalmente discusión. El instructor facilita con preguntas.

#### Los riesgos reales

**Riesgo 1: Lanzar desde directorio incorrecto**

```bash
# ❌ MAL: lanzar desde home
cd ~
copilot
# El agente tiene acceso a .ssh/, .aws/, .env files, todo

# ✅ BIEN: lanzar solo desde el proyecto
cd ~/repos/mi-proyecto
copilot
```

**Pregunta al grupo:** ¿Qué pasa si tienes un `.env` con secrets en tu home y el agente lo encuentra?

**Riesgo 2: Autopilot sin restricciones en repos sensibles**

```bash
# En modo autopilot, el agente puede:
# - Modificar múltiples archivos sin confirmación
# - Ejecutar comandos sin pedir permiso (si tienes --allow-tool='shell')
# - Hacer commits y PRs automáticamente

# Para repos sensibles, usar siempre modo Normal
# o combinar con --deny-tool para lo más crítico
```

**Riesgo 3: MCP servers con permisos excesivos**

```bash
# Un MCP server de base de datos mal configurado podría
# dejar al agente ejecutar DELETE sin confirmación

# Buena práctica: usar --deny-tool='mcp-server-name(delete)'
# o configurar el MCP server con permisos de solo lectura por default
```

#### Configuración segura para uso en cliente

Plantilla de comando seguro para proyectos de cliente:

```bash
copilot \
  --deny-tool='shell(rm)' \
  --deny-tool='shell(sudo)' \
  --deny-tool='git(push)' \
  --deny-tool='gh(pr merge)' \
  --deny-tool='gh(issue delete)'
```

O definir un alias en `.zshrc`:
```bash
alias copilot-safe='copilot \
  --deny-tool="shell(rm)" \
  --deny-tool="shell(sudo)" \
  --deny-tool="git(push)" \
  --deny-tool="gh(pr merge)"'
```

#### Políticas en org/enterprise

Si la empresa tiene GitHub Copilot Business o Enterprise:
- El admin puede **deshabilitar el CLI completamente** para toda la org
- Las políticas de la org **se aplican automáticamente** cuando el usuario está autenticado
- Considerar: quién puede usar autopilot, qué MCP servers están permitidos

**Pregunta al grupo:** ¿Tienen política de uso de IA en sus empresas/clientes? ¿Cómo encaja el CLI?

#### ¿Qué queda registrado?

- GitHub **sí registra** las solicitudes para billing/auditoría
- El contenido de las conversaciones: revisar la política de privacidad de GitHub Copilot
- Las acciones en GitHub (issues creados, PRs abiertos): aparecen en el activity log normal
- Los archivos locales que el agente lee/modifica: **no se transmiten a GitHub** excepto como contexto para el modelo

**Recomendación:** Para proyectos con código muy sensible o bajo NDA estricto, revisar la política de datos de GitHub Copilot con el cliente antes de usar el CLI en ese repo.

---

## Módulo 6 — Caso Real y Cierre *(60 min)*

### 🎯 Objetivos del módulo
- Ver el CLI aplicado a un caso real end-to-end
- Consolidar aprendizajes
- Calibrar cuándo usar CLI vs IDE vs Claude Code

### 🎬 Demo final — Caso real CleverIT *(25 min)*

El instructor hace una demo end-to-end de un caso cercano al trabajo real del equipo. Opciones sugeridas (elegir la más relevante para la audiencia):

**Opción A — Feature completa desde issue a PR:**
```bash
> Tenemos el issue #7: "Implementar rate limiting en el endpoint 
  de login para prevenir brute force". Implementa la solución 
  completa: código, tests, documentación y PR.
```

**Opción B — Migración de código legacy:**
```bash
> En src/legacy/ hay código JavaScript antiguo sin tipos.
  Migra todos los archivos a TypeScript estricto, agrega los 
  tipos correctos basándote en cómo se usan las funciones,
  y asegúrate de que los tests pasen.
```

**Opción C — Integración API externa:**
```bash
> Necesito integrar la API de SendGrid para enviar emails 
  transaccionales. Crea el módulo de email, las funciones 
  de envío, variables de entorno necesarias y tests con mocks.
```

Durante la demo, mostrar en vivo:
- Cómo el agente razona antes de actuar
- El flujo de aprobación en cada paso
- Cómo refinar prompts cuando el resultado no es exactamente lo esperado
- El PR final en GitHub

### 🗣️ Cuándo usar qué *(10 min)*

Discusión rápida con el grupo:

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
  ✅ Copilot Edits para cambios multi-archivo en el IDE

CLAUDE CODE → cuando necesitas más poder agéntico
  ✅ Proyectos muy complejos con mucho contexto
  ✅ Integración con MCP servers custom avanzados
  ✅ Cuando el modelo Claude es crítico para el resultado
  ✅ Uso de skills/CLAUDE.md para prompts altamente customizados

COPILOT AGENT (cloud) → para tareas asíncronas
  ✅ "Hacer esto mientras yo trabajo en otra cosa"
  ✅ Tasks que toman mucho tiempo
  ✅ Asignar issues a Copilot como si fuera un dev del equipo
```

### 🎯 Retrospectiva y Q&A *(25 min)*

**Preguntas para facilitar la retrospectiva:**

1. ¿Cuál fue la funcionalidad que más te sorprendió? ¿Por qué?
2. ¿En qué proyecto actual podrías usar el CLI esta semana?
3. ¿Qué te genera dudas o incomodidad sobre usar un agente que modifica archivos?
4. ¿Cómo cambiaría tu workflow si usaras el CLI todos los días?

**Entregables para llevar:**
- Link al repo del workshop para repasar ejercicios
- AGENTS.md creado durante el lab (pueden usar en sus repos reales)
- Cheatsheet de comandos (ver sección siguiente)
- Link a la guía del instructor (disponible en copilot.cleveritgroup.ai)

---

## Cheatsheet del instructor

> *Imprimir o proyectar durante los labs. También entregar a participantes.*

### Instalación y auth
```bash
curl -fsSL https://gh.io/copilot-install | bash   # Instalar
npm install -g @github/copilot                      # Alternativa npm
copilot --version                                   # Verificar
copilot /login                                      # Auth OAuth
export GH_TOKEN=ghp_xxx                             # Auth PAT
```

### Lanzar el CLI
```bash
copilot                                             # Interactivo básico
copilot -p "tarea aquí"                             # Modo headless
copilot --allow-tool='shell'                        # Sin confirmación en shell
copilot --deny-tool='shell(rm)'                     # Bloquear rm
copilot --deny-tool='git(push)'                     # Bloquear git push
copilot --connect SESSION_ID                        # Retomar sesión
copilot --experimental                              # Activar preview features
```

### Slash commands
```bash
/help          # Lista de comandos
/model         # Ver modelo
/model auto    # Cambiar a auto
/plan          # Entrar en modo plan
/session       # Info de sesión y uso
/share         # Compartir sesión (Markdown/Gist)
/fleet         # Subagentes paralelos (experimental)
/login         # Re-autenticar
/changelog     # Últimas novedades
/experimental  # Toggle features preview
/feedback      # Enviar feedback a GitHub
```

### Modos (ciclar con Shift+Tab)
```
Normal → Plan → Autopilot → Normal
```

### Adjuntar contexto
```bash
@archivo.ts              # Adjuntar archivo
@dir/archivo.json        # Ruta relativa
[drag & drop imagen]     # Imagen al terminal
[Ctrl+V imagen]          # Pegar imagen
```

### Seguridad: configuración para cliente
```bash
copilot \
  --deny-tool='shell(rm)' \
  --deny-tool='shell(sudo)' \
  --deny-tool='git(push)' \
  --deny-tool='gh(pr merge)'
```

### AGENTS.md mínimo viable
```markdown
# AGENTS.md

## Commits
- Usar Conventional Commits: feat:, fix:, chore:, docs:
- NUNCA push directo a main

## Código
- TypeScript estricto, sin `any`
- Tests obligatorios para funciones nuevas

## Restricciones
- No modificar /migrations sin confirmación explícita
- No ejecutar comandos que afecten DB en producción
```

---

## FAQ y troubleshooting

### "No se pide el trust prompt al lanzar copilot"
El directorio ya fue confiado anteriormente. Para ver y gestionar directorios confiados:
```bash
# Ver config del CLI
cat ~/.config/github-copilot/config.json
```

### "Error: Copilot CLI disabled for your organization"
El admin de la org deshabilitó el CLI. El participante necesita usar una cuenta personal o pedirle al admin que lo habilite en Settings → Copilot → CLI.

### "copilot: command not found"
El binario no está en el PATH. Según el método de instalación:
```bash
# Si se instaló como non-root:
export PATH="$HOME/.local/bin:$PATH"

# Si se instaló via npm:
export PATH="$HOME/.npm-global/bin:$PATH"
# o
npm install -g @github/copilot  # Con permisos correctos
```

### "Rate limit / premium request warning"
El participante llegó al límite de su plan. Opciones:
- Cambiar a `/model auto` que usa modelos más eficientes
- Usar modo `-p` más específico para no desperdiciar tokens
- Continuar con el ejercicio al día siguiente

### El agente hace algo inesperado en Autopilot
Presionar `Ctrl+C` interrumpe la ejecución. El agente detiene lo que está haciendo. Revisar los cambios con `git status` y `git diff` antes de continuar.

### "El agente no encontró el archivo que pedí"
Verificar que:
1. El CLI fue lanzado desde el directorio correcto
2. El archivo existe y tiene el path relativo correcto
3. El archivo no está en `.gitignore` (algunos contextos lo respetan)

### "No veo el `/fleet` command"
Fleet es experimental. Activar primero:
```bash
/experimental
# o lanzar con:
copilot --experimental
```

### Windows: problemas con PowerShell
```powershell
# Si los alias no funcionan en PowerShell
copilot alias | Invoke-Expression

# Si hay problemas con caracteres especiales en prompts
copilot -p "prompt entre comillas dobles"
```

---

*Guía generada para CleverIT Group · Workshop Técnico GitHub Copilot CLI*  
*Abril 2025 · Mantener actualizada con cada release del CLI (`/changelog`)*
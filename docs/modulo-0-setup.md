# Módulo 0 — Setup del Entorno

**Duración:** 45 min | **Tipo:** Lab guiado

## Objetivos

- Instalar y autenticar el Copilot CLI
- Entender la diferencia entre `gh copilot` (deprecated) y el nuevo `copilot` CLI
- Comprender el modelo de seguridad antes de empezar a usar el agente

---

## El nuevo Copilot CLI

Hay **dos herramientas** con nombres parecidos. Es importante saber cuál es cuál:

```
ANTES — gh copilot (deprecated desde Oct 2025):
  gh copilot suggest "instalar git"   → sugería un string de texto
  gh copilot explain "traceroute x"   → explicaba un comando
  Era un helper. TÚ ejecutabas todo.

AHORA — copilot CLI standalone:
  copilot                              → agente que ACTÚA
  Puede leer archivos, modificarlos, ejecutar comandos,
  abrir PRs, crear issues — todo en lenguaje natural.
```

**Analogía:** Es la diferencia entre un GPS que te dice el camino vs. un conductor autónomo.

---

## Lab — Instalación y primera sesión

### Paso 1: Instalar

**macOS / Linux:**
```bash
curl -fsSL https://gh.io/copilot-install | bash
# o via npm:
npm install -g @github/copilot
```

**Windows:**
```powershell
npm install -g @github/copilot
```

Verificar:
```bash
copilot --version
```

### Paso 2: Autenticar

```bash
copilot /login
```

Esto abre el browser con un device code. Apruébalo en GitHub. Simple.

**Alternativa con PAT** (para entornos sin browser):
```bash
# GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained
# Permiso necesario: Copilot Requests (Read and Write)
export GH_TOKEN=ghp_tutoken123
```

### Paso 3: El trust model — MUY IMPORTANTE

Navega al repo del workshop antes de lanzar el CLI:

```bash
cd ~/ruta/a/dev10to100
copilot
```

Verás este prompt:

```
⚠️  This directory and its subdirectories will be accessible to Copilot.
    The agent may read, modify, and execute files here.

    Do you trust this directory?

    > Yes, trust this directory
      Yes, trust all subdirectories too
      No, exit
```

**¿Por qué existe esto?** El agente puede modificar archivos y ejecutar comandos. Necesita un sandbox declarado.

```
✅ ~/repos/dev10to100
✅ ~/code/cliente/api
❌ ~              (da acceso a .ssh/, .aws/, configs con secrets)
❌ /
❌ /etc
```

**Regla de oro:** Lanzar siempre desde el directorio específico del proyecto, nunca desde `~` o `/`.

### Verificación exitosa

Deberías ver el prompt interactivo:

```
╭─ GitHub Copilot CLI ──────────────────────────╮
│  Powered by Claude Sonnet 4.5                  │
│  /help for commands · Shift+Tab for autopilot  │
╰────────────────────────────────────────────────╯

>
```

Prueba: `> ¿Qué hace este proyecto?`

---

## ¿Qué planes incluyen el CLI?

| Plan       | ¿Incluye CLI? | Nota                                      |
|------------|--------------|-------------------------------------------|
| Free       | ✅ Sí        | Con límite de premium requests            |
| Pro / Pro+ | ✅ Sí        | Mayor límite                              |
| Business   | ✅ Sí        | Admin puede deshabilitarlo para la org    |
| Enterprise | ✅ Sí        | Ídem, con más controles                   |

> Si tienes Copilot via tu organización y el CLI no funciona, el admin puede haberlo deshabilitado. Pídele que lo habilite en Settings → Copilot → CLI.

---

➡️ Siguiente: [Módulo 1 — Modo Interactivo](./modulo-1-interactivo.md)

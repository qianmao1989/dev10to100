#!/bin/bash
# scripts/ai-review.sh
# Revisión automática de código usando Copilot CLI en modo headless (-p).
# Uso: ./scripts/ai-review.sh
# Requiere: copilot CLI autenticado, ejecutar desde la raíz del proyecto.

set -e

echo "🤖 Iniciando revisión AI del proyecto..."
echo "==========================================="

echo ""
echo "🔒 Revisión de seguridad..."
copilot -p --deny-tool='write' \
  "Revisa los archivos TypeScript en src/ y lista cualquier problema de seguridad: \
   injection, datos expuestos, autenticación faltante o débil. \
   Sé específico con el archivo y número de línea."

echo ""
echo "🧪 Cobertura de tests..."
copilot -p --deny-tool='write' \
  "Analiza src/ y __tests__/. ¿Qué funciones públicas de src/ NO tienen tests? \
   Lista solo las que faltan, ordenadas por prioridad."

echo ""
echo "📊 Complejidad..."
copilot -p --deny-tool='write' \
  "¿Hay funciones en src/ con lógica compleja o difícil de mantener? \
   Lista las 3 que más se beneficiarían de refactoring."

echo ""
echo "✅ Revisión completada."

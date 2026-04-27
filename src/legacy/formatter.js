/**
 * Legacy JavaScript formatter — sin tipos.
 * Ejercicio del Módulo 6: migrar a TypeScript estricto.
 */

function formatCurrency(amount, currency, locale) {
  locale = locale || 'es-MX';
  currency = currency || 'MXN';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

function formatDate(date, format) {
  var d = new Date(date);
  var day = String(d.getDate()).padStart(2, '0');
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var year = d.getFullYear();

  if (format === 'DD/MM/YYYY') return day + '/' + month + '/' + year;
  if (format === 'YYYY-MM-DD') return year + '-' + month + '-' + day;
  return day + '/' + month + '/' + year;
}

function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = { formatCurrency, formatDate, truncate, capitalize };

/**
 * Legacy JavaScript helpers — sin tipos, sin módulos ES.
 * Ejercicio del Módulo 6: migrar a TypeScript estricto.
 */

function calculateDiscount(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Invalid discount');
  }
  return price - (price * discountPercent) / 100;
}

function groupBy(array, key) {
  return array.reduce(function (acc, item) {
    var group = item[key];
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});
}

function debounce(fn, delay) {
  var timer;
  return function () {
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

function parseCSV(csvString) {
  var lines = csvString.split('\n');
  var headers = lines[0].split(',');
  return lines.slice(1).map(function (line) {
    var values = line.split(',');
    var obj = {};
    headers.forEach(function (header, index) {
      obj[header.trim()] = values[index] ? values[index].trim() : '';
    });
    return obj;
  });
}

module.exports = { calculateDiscount, groupBy, debounce, parseCSV };

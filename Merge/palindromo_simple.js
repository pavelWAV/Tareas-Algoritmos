/**
 * Palindromo(x)
 * input:  un número entero
 * output: true si es palíndromo, false si no
 *
 * Condiciones: no convertir a cadena y los negativos no cuentan.
 */

function palindromo(x) {
  // Paso 1: los negativos no son palíndromos
  if (x < 0) {
    return false;
  }

  // Paso 2: guardar el original y preparar el invertido
  const original = x;
  let inv = 0;

  // Paso 3: ir sacando dígitos y armando el número al revés
  while (x > 0) {
    const r = x % 10; // último dígito
    inv = inv * 10 + r; // lo agregamos al final de inv
    x = Math.floor(x / 10); // división entera (x // 10 en pseudocódigo)
  }

  // Paso 4: comparar
  return inv === original;
}

//Pruebas
const casos = [121, 123, 0, 7, 10, 1221, 12321, -121];
for (const n of casos) {
  console.log(`palindromo(${n}) -> ${palindromo(n)}`);
}
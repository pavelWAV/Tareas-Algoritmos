// Merge
// input:  A y B, arreglos ya ordenados
// output: arreglo C ordenado con todos los elementos
function merge(A, B, n, m) {
  let i = 0;                      // índice de A
  let j = 0;                      // índice de B
  let k = 0;                      // índice de C
  const C = new Array(n + m);     // C ← [0 .. n+m-1]

  while (k <= n + m - 1) {
    // Se toma de A si todavía quedan elementos en A
    // y (B ya se acabó o A[i] es menor que B[j])
    if (i < n && (j >= m || A[i] < B[j])) {
      C[k] = A[i];
      i++;
    } else {
      C[k] = B[j];
      j++;
    }
    k++;
  }

  return C;
}

// Pruebas de los arreglos A y B vistos en el pizarron
const A = [11, 22, 23, 70];
const B = [15, 17, 33, 42, 102];

console.log("A:", A);
console.log("B:", B);
console.log("C:", merge(A, B, A.length, B.length));

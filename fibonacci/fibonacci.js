// Fibo(n):
// input: el termino "n" a calcular
// salida: el enesimo termino de la serie de Fibonacci
function fibo(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  let res = fibo(n - 1) + fibo(n - 2);

  // return res
  return res;
}

// Pruebas
console.log("Término 1:", fibo(1));
console.log("Término 2:", fibo(2));
console.log("Término 3:", fibo(3));
console.log("Término 4:", fibo(4)); 
console.log("Término 5:", fibo(5)); 
console.log("Término 10:", fibo(10));
// Pila (stack): estructura LIFO -> el último en entrar es el primero en salir
class Pila {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

function invertirVocales(S) {
  const P = new Pila();

  for (let i = 0; i < S.length; i++) {
    const c = S[i].toLowerCase();
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      P.push(c);
    }
  }
  let X = "";
  while (!P.isEmpty()) {
    X += P.pop();
  }
  return X;
}

// Pruebas (ejemplos vistos en clase)
console.log(invertirVocales("Icecream"));   // aeei
console.log(invertirVocales("TylerTheCreator")); // eeie
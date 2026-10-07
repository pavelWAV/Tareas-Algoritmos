const readline = require("readline");

function esPalindromo(str) {

    let n = str.length;
    let inv = "";

    for (let i = n - 1; i >= 0; i--) {
        inv = inv + str[i];
    }

    if (inv === str) {
        return true;
    } else {
        return false;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe una palabra: ", function(str) {

    let resultado = esPalindromo(str);

    if (resultado === true) {
        console.log("Es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }

    rl.close();
});
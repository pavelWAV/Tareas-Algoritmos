const readline = require("readline");

function esPalindromo(str) {

    let n = str.length;

    for (let i = 0, j = n - 1; i < n / 2; i++, j--) {

        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
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
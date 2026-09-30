// 1. Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
const numero1 = Number(prompt("Ingrese el primer numero"));
const numero2 = Number(prompt("Ingresa el segundo numero"));
const numero3 = Number(prompt("Ingresa el tercer numero"));

// 2. Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// lo mas dificil, realmente:
let mayor, centro, menor;

if (numero1 >= numero2 && numero2 >= numero3) {
    mayor = numero1;
    if (numero2 >= numero3) {
        centro = numero2;
        menor = numero3;
    } else {
        centro = numero3;
        menor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
    if (numero1 >= numero3) {
        centro = numero1;
        menor = numero3;
    } else {
        centro = numero3;
        menor = numero1;
    }
} else if (numero3 >= numero2 && numero3 >= numero1) {
    mayor = numero3
    if (numero1 >= numero2) {
        centro = numero1
        menor = numero2;
    } else {
        centro = numero2;
        menor = numero1;
    }
}
// 3. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
console.log('de mayor a menor:', mayor, centro, menor);
console.log('De menor a mayor:', menor, centro, mayor);

//4. Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
if (numero1 === numero2 && numero2 === numero3) {
    console.log('Los tres son iguales: ', numero1, numero2, numero3);
}

// 5. Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
// Entradas:
// 4, 4, 2.
// Salida:
// 4, 4, 2.
// 2, 4, 4.
// Entradas:
// 4, 2, 4.
// Salida:
// 4, 4, 2.
// 2, 4, 4.
// Entradas:
// 2, 4, 4.
// Salida:
// 4, 4, 2.
// 2, 4, 4.

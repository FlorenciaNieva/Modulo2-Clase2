// Consigna:
// Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es
// Ejemplos:
// aceptaDeposito(440) // true
// aceptaDeposito(123) // false
// aceptaDeposito(500.50) // false
// aceptaDeposito(1000) // true

const aceptaDeposito = (monto) => {
    return Boolean(Number(monto % 10 == 0));
}

console.log(aceptaDeposito(440));
console.log(aceptaDeposito(123));
console.log(aceptaDeposito(500.50));
console.log(aceptaDeposito(1000));
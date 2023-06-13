// Consigna:
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

//Ejemplos:
// esPar(2) // true
// esPar(3) // false

const esPar = (numero) => {
    return Boolean(Number(numero % 2 == 0));
}

console.log(esPar(2));
console.log(esPar(3));
// Consigna:
// Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos
//Ejemplos:
// restar(3, 2) // 1
// restar(10, 5.5) // 4.5
// restar(3, 5) // -2

const restar = (a, b) => {
    return Number(a - b);
}

console.log(restar(3,2));
console.log(restar(10, 5.5));
console.log(restar(3,5));
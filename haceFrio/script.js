// Consigna:
// Crear una función haceFrio que tome como argumento un número temperatura y devuelva true si hace frio (12 grados o menos) o false de lo contrario
// Ejemplos:
// haceFrio(12) // true
// haceFrio(22) // false
// haceFrio(3) // true
// haceFrio(-2) // true

const haceFrio = (temperatura) => {
    return Boolean(Number((temperatura < 13)));
}

console.log(haceFrio(12));
console.log(haceFrio(22));
console.log(haceFrio(3));
console.log(haceFrio(-2));
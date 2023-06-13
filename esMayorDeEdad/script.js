// Consigna:
// Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario
// Ejemplos:
// esMayorDeEdad(15) // false
// esMayorDeEdad(18) // true
// esMayorDeEdad(27) // true

const esMayorDeEdad = (edad) => {
    return Boolean(Number((edad > 17)));
}

console.log(esMayorDeEdad(15) );
console.log(esMayorDeEdad(18));
console.log(esMayorDeEdad(27));
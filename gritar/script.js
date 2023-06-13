// Consigna:
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

//Ejemplo:
// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!

const gritar = (str) => {
    return(`¡${str}!`) 
}

console.log(gritar('hola'));
console.log(gritar('aaaaaa'));

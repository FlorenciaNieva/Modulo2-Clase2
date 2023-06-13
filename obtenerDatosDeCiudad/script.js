//Consigna:
// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS.

let city = prompt ('Ingrese su ciudad');
let population = prompt ('Ingrese la cantidad de habitantes');
let country = prompt ('Ingrese en que país se encuentra');

const obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
    return (`La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}.`)
}

console.log(obtenerDatosDeCiudad(city, population, country));
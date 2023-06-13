// Consigna:
// Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas
//Ejemplos:
// convertirHorasEnSegundos(1) // 3600
// convertirHorasEnSegundos(3) // 10800
// convertirHorasEnSegundos(4.5) // 16200

const convertirHorasEnSegundos = (horas) => {
    return Number((horas * 3600));
}

console.log(convertirHorasEnSegundos(1));
console.log(convertirHorasEnSegundos(3));
console.log(convertirHorasEnSegundos(4.5));
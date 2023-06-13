// Consigna:
// Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número
// Ejemplos:
// calcularPorcentaje(100, 15) // 15
// calcularPorcentaje(10, 50) // 5
// calcularPorcentaje(200, 10) // 20

const calcularPorcentaje = (numero, porcentaje) => {
    return Number(numero * porcentaje / 100);
}

console.log(calcularPorcentaje(100, 15));
console.log(calcularPorcentaje(10, 50));
console.log(calcularPorcentaje(200, 10));
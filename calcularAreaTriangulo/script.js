// Consigna:
// Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo
// Ejemplos:
// calcularAreaTriangulo(3, 4) // 6
// calcularAreaTriangulo(5, 6) // 15

const calcularAreaTriangulo = (base, altura) => {
    return Number((base * altura / 2));
}

console.log(calcularAreaTriangulo(3, 4));
console.log(calcularAreaTriangulo(5, 6));
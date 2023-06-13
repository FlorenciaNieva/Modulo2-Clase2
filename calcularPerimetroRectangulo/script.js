// Consigna:
// Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro
// Ejemplos:
// calcularPerimetroRectangulo(3.2, 5) // 16.4
// calcularPerimetroRectangulo(10, 20) // 60

const calcularPerimetroRectangulo = (ancho, altura) => {
    return Number(ancho * 2 + altura *2);
}

console.log(calcularPerimetroRectangulo(3.2, 5));
console.log(calcularPerimetroRectangulo(10, 20));
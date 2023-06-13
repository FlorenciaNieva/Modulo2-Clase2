// Consigna:
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:
// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

// Ejemplos:
// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40

const calcularPuntaje = (facil, normal, dificil) => {
    let puntajeFacil = Number(facil * 3);
    let puntajeNormal = Number(normal * 5);
    let puntajeDificil = Number(dificil * 10);
    return Number(puntajeFacil + puntajeNormal + puntajeDificil);
}

console.log(calcularPuntaje(3, 0, 0));
console.log(calcularPuntaje(0, 2, 1));
console.log(calcularPuntaje(5, 1, 2));
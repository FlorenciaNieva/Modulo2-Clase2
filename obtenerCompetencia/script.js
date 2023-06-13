// Consigna:
// Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b
// Ejemplos:
// obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
// obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
// obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`

const obtenerCompetencia = (a, b) => {
    return (`${a} vs. ${b}`)
}

console.log(obtenerCompetencia('JavaScript', 'Python'));
console.log(obtenerCompetencia('Coca', 'Pepsi'));
console.log(obtenerCompetencia('Perros', 'Gatos'));
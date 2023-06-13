//Consigna:
//Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.
//Ejemplo:
//saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!

//TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante
//const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
// const saludo = saludar(nombreCompleto)
// const grito = gritar(saludo)
// console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!

//función obtenerNombreCompleto
const obtenerNombreCompleto = (nombre, apellido) => {
    return nombre + apellido;
}

//función gritar
const gritar = (str) => {
    return(`¡${str}!`) 
}

//Función saludar
const saludar = (nombre) => {
    return (`Hola ${nombre}, un gusto conocerte`)
}

console.log(gritar(saludar(obtenerNombreCompleto('Ada', 'Lovelance'))))
// Consigna:
// Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.
//Ejemplo:
// saludar('Ada') // 'Hola Ada, un gusto conocerte'

let name = prompt ('Ingrese su nombre');

const saludar = (nombre) => {
    return (`Hola ${nombre}, un gusto conocerte.`)
}

console.log(saludar('Ada'));
console.log(saludar(name)); 
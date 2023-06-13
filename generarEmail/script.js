// Consigna:
// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y que forme un string email con el formato usuario@dominio.com
//Ejemplo:
// generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'

const generarEmail = (usuario, dominio) => {
    return (`${usuario}@${dominio}.com`);
}

console.log(generarEmail('adalovelace', 'gmail'));
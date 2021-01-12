const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

console.log(saludar('William'));
console.log(saludar2('William'));
console.log(saludar3('William'));

const getUser = () => ({
    uid: 'ab01',
    username: 'Hola123'
});

console.log(getUser());

//Tarea
//1. Transformar a funcion flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

/*function getUsuarioactivo (nombre){
    return {
        uid: 'abc1234',
        username: nombre
    }
};*/

const getUsuarioactivo = (nombre) => ({
    uid: 'abc1234',
    username: nombre
})

const usuarioActivo = getUsuarioactivo('William');
console.log(usuarioActivo)
const personajes = ['goku', 'vegetta', 'trunks'];

//console.log(personajes[0])

const [ , , p3 ] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['abc', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer elementon se llamara nombre
//2. El segundo elemento debera llamarse setNombre y sera una funcion

const estado = (nombre) => {
    return [nombre, function setNombre(){console.log('hola mundo')}];
}

const [nombre, setNombre] = estado('Goku');

console.log(nombre);
setNombre();
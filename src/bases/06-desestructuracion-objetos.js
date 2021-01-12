const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({clave, nombre, edad}) => {
    //console.log(nombre, edad);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.123,
            lng: 14.235
        }
    }
}

const {nombreClave, anios, latlng} = retornaPersona(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);

import getHeroById from "./bases/08-imports-exports";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('2 segundos despues');
        const heroe = getHeroById(1);
        //console.log(heroe);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe) => {
    console.log('Then de la promesa', heroe);
})
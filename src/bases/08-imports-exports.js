import { heroes } from "../data/heroes";

//console.log(heroes);

const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroById(4));

const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(getHeroesByOwner("Marvel"));

export default getHeroById;
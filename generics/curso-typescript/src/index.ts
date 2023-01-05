// import { getPokemon } from "./generics/get-pokemon";



// getPokemon(11)
//   .then((pokemon) => {
//     const root: HTMLElement = document.getElementById("root") as HTMLElement;

//     root.innerHTML = `<img src="${pokemon?.sprites.front_default ?? 'https://picsum.photos/500/300?random=4' }"/><h1 style="color:#cc8400">${pokemon?.name ?? 'no name'}</h1>`
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("End of pokemon"));



////// DECORATORS
import { Pokemon } from "./decorators/pokemon-class";

const charmander: Pokemon = new Pokemon('Charmander')

charmander.publicApi= 'www.adan.com'
console.log(charmander)
 console.log(charmander.savePokemon(34))

// console.log(charmander.publicApi)





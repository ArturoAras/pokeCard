const pokeAPI = `https://pokeapi.co/api/v2/pokemon/`;

const infoPokemon = document.getElementById('div__infoPokemon')


let num = between(1, 905);

window.addEventListener('DOMContentLoaded', () => {
    pokeFetch(pokeAPI, num);
    nextPokemon(num)
    previousPokemon(num)
});


// console.log(n)

// const f = () => {return n = n + 1};
// f()

// console.log(n)

// const t = () => { return n = n - 1}
// t()

// console.log(n)
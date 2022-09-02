const pokeAPI = `https://pokeapi.co/api/v2/pokemon/`;

const infoPokemon = document.getElementById('div__infoPokemon')


let n = between(1, 905);

window.addEventListener('DOMContentLoaded', () => {
    pokeFetch(pokeAPI, n);
    nextPokemon(n)
    previousPokemon(n)
});


console.log(n)

const f = () => {return n = n + 1};
f()

console.log(n)

const t = () => { return n = n - 1}
t()

console.log(n)
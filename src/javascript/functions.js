const between = (min, max) => { //Devuelve un id random de un pokémon
    return Math.floor(Math.random() * (max - min) + min)
};

const pokeFetch = (link, param1) => {
    fetch(link + param1)
    .then( res => res.json())
    .then(res => {
        backgroundColor(res.types);
        pictureCard(res);
        goToPokedex(param1);
    })
    .catch( e => console.log('Error => ', e));
};

const backgroundColor = (types) => { //Da color al fondo de la ventana según el tipo de pokémon
    const div__containerPokemon = document.getElementById('div__containerPokemon');
    switch(types[0].type.name){
        case "grass":
            div__containerPokemon.style.backgroundColor = "#99FF66";
            break;
        case "fire":
            div__containerPokemon.style.backgroundColor = "#FF7F00";
            break;
        case "water":
            div__containerPokemon.style.backgroundColor = "#B0E2FF";
            break;
        case "bug":
            div__containerPokemon.style.backgroundColor = "#99CC33";
            break;
        case "normal":
            if(types[1] == undefined){
                div__containerPokemon.style.backgroundColor = '#DDCCAA'
                break
            }else{
                let tipo2 = [types[1]]
                backgroundColor(tipo2)
                break;
            }
        case "flying":
            div__containerPokemon.style.backgroundColor = "#BAAAFF";
            break;
        case "poison":
            div__containerPokemon.style.backgroundColor = "#CC88BB";
            break;
        case "electric":
            div__containerPokemon.style.backgroundColor = '#FFD700';
            break;
        case "ground":
            div__containerPokemon.style.backgroundColor = '#DEB887'
            break;
        case "fairy":
            div__containerPokemon.style.backgroundColor = '#FFB0FF'
            break;
        case "fighting":
            div__containerPokemon.style.backgroundColor = '#FF6A6A'
            break;
        case "psychic":
            div__containerPokemon.style.backgroundColor = '#FFB5C5'
            break;
        case "rock":
            div__containerPokemon.style.backgroundColor = '#CD853F'
            break;
        case "ghost":
            div__containerPokemon.style.backgroundColor = '#778899'
            break;
        case "ice":
            div__containerPokemon.style.backgroundColor = "#ADD8E6";
            break;
        case 'dragon':
            div__containerPokemon.style.backgroundColor = '#AB82FF';
            break;
        case 'dark':
            div__containerPokemon.style.backgroundColor = '#A9A9A9';
            break;
        case 'steel':
            div__containerPokemon.style.backgroundColor = '#CCCCCC'
    }
};

const pictureCard = (information) => {//Pinta los objetos en la mitad superior de la card
    const boderImgPokemon = document.getElementById('div__imgPokemon');

    const info = Object.values(information.sprites.other);
    const img = info[2].front_default;
    
    boderImgPokemon.innerHTML = `
        <h1 class="title__namePokemon">${information.name}</h1>
        <div class="div__borderImgPokemon" id="div__borderImgPokemon">
            <div class="div__boxProfilePokemon">
                <img class="img__profilePokemon" src="${img}"/>
            </div>
        </div>
    `
};

const goToPokedex = (id) => {//Te dirije a la pokedex oficial de Pokémon
    const a = document.getElementById('a__goPokedex');
    a.setAttribute('href', `https://www.pokemon.com/us/pokedex/${id}`)
};

const nextPokemon = (id) => {
    document.getElementById('btn__nextPokemon').addEventListener('click', (ev) => {
        ev.preventDefault();
        if(id == 905){
            pokeFetch('https://pokeapi.co/api/v2/pokemon/', 1)
            return n = 1;
        }else{
            id = id + 1;
            pokeFetch(`https://pokeapi.co/api/v2/pokemon/`, id)
            console.log(id);
            return n = id;
        }
    })
}

const previousPokemon = (id) => {
    document.getElementById('btn__previousPokemon').addEventListener('click', (ev) => {
        ev.preventDefault();
        if(id == 1){
            pokeFetch('https://pokeapi.co/api/v2/pokemon/', 905)
            return n = 905;
        }else{
            id = id - 1;
            pokeFetch(`https://pokeapi.co/api/v2/pokemon/`, id);
            return n = id;
        }
    })
}

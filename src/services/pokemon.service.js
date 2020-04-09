import fetch from 'node-fetch';

const urlPokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=21';

export const getAllPokemons = async () => {
    return await fetch(`${urlPokeApi}`)
        .then(res => {
            return res.json();
        })
        .catch(err => console.log('Error call Pokemon backend - ' + err));
};

export const getPokemonsData = async pokemon => {
    let url = pokemon.url;
    return await fetch(url)
        .then(res => {
            return res.json();
        })
        .catch(err => console.log('Error call Pokemon Data backend - ' + err));
};

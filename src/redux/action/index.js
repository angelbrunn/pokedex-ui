import { v4 as uuidv4 } from 'uuid';
import { ADD_POKEMON, UPDATE_POKEMON, DELETE_POKEMON } from './action';

export const createPokemon = pokemon => ({
    type: ADD_POKEMON,
    payload: {
        id: uuidv4(),
        pokemon: pokemon
    }
});

export const updatePokemon = pokemon => ({
    type: UPDATE_POKEMON,
    payload: {
        id: uuidv4(),
        pokemon: pokemon
    }
});

export const deletePokemon = id => ({
    type: DELETE_POKEMON,
    payload: {
        id
    }
});

import { ADD_POKEMON, UPDATE_POKEMON, DELETE_POKEMON } from '../action/action';

export const initialState = [
    {
        id: 0,
        pokemon: []
    }
];

export default function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POKEMON:
            return [...state, action.payload];
        case UPDATE_POKEMON:
            state[0].pokemon = action.payload.pokemon;
            return [...state];
        case DELETE_POKEMON:
            return state.filter(pokemon => pokemon.id !== action.payload.id);
        default:
            return state;
    }
}

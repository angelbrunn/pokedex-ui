import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import rootReducer from '../../redux/reducers';
import { initialState } from '../../redux/reducers/pokemonsReducer';
import { Home } from './Home';

afterEach(cleanup);

initialState.push({
    id: 0,
    pokemon: [
        {
            id: 1,
            name: 'bulbasaur',
            abilities: [
                { ability: { name: 'chlorophyll' } },
                { ability: { name: 'overgrow' } }
            ]
        }
    ]
});

const renderWithRedux = (
    ui,
    { initialState, store = createStore(rootReducer) } = {}
) => {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store
    };
};

// EXAMPLE WITH REACT TEST LIBRARY
test('Home Component - Can render with redux with defaults', async () => {
    const { getByTestId, getByText } = renderWithRedux(<Home />);
});

import React, { Suspense } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ListItem } from './ListItem';

afterEach(cleanup);

const poke = {
    id: 1,
    name: 'bulbasaur',
    abilities: [
        { ability: { name: 'chlorophyll' } },
        { ability: { name: 'overgrow' } }
    ]
};

// EXAMPLE WITH REACT TEST LIBRARY
test('ListItem Component - Render and Check values', () => {
    const { getByTestId, getByText } = render(<ListItem poke={poke} key={1} />);

    expect(getByTestId('list-item-data')).toHaveTextContent('bulbasaur');
    expect(getByTestId('modal-title')).toHaveTextContent(
        'modal_title_firts bulbasaur modal_title_second'
    );
});

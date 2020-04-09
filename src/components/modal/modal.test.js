import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal } from './Modal';

afterEach(cleanup);

const modalMock = {
    id: 1,
    name: 'bulbasaur',
    abilities: [
        { ability: { name: 'chlorophyll' } },
        { ability: { name: 'overgrow' } }
    ]
};

// EXAMPLE WITH ENZYME/JEST
describe('Generate Snapshot', () => {
    it('renders the Modal component', () => {
        const container = render(<Modal metaData={modalMock} />);
        expect(container).toMatchSnapshot();
    });
});

// EXAMPLE WITH REACT TEST LIBRARY
test('Modal Component - Render and Check values', () => {
    const { getByTestId, getByText } = render(<Modal metaData={modalMock} />);

    expect(getByTestId('modal-title')).toHaveTextContent('bulbasaur');
    expect(getByTestId('modal-helper')).toHaveTextContent('modal_helper');
});

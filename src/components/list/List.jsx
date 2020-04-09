import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListItem } from '../listItem/ListItem';

export const List = () => {
    const storepokemon = useSelector(state => state.pokemons);

    useEffect(() => {
        console.log('storepokemon', storepokemon);
    }, []);

    return (
        <div className="List-Conteiner">
            {storepokemon[0].pokemon.map((poke, index) => (
                <ListItem data-testid="list-item" poke={poke} key={index} />
            ))}
        </div>
    );
};

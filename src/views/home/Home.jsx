import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../../components/list/List';
import { LanguageSelector } from '../../components/languageSelector/LanguageSelector';
import Paginator from 'react-hooks-paginator';
import {
    getAllPokemons,
    getPokemonsData
} from '../../services/pokemon.service';
import { createPokemon, updatePokemon } from '../../redux/action/index';
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const { t } = useTranslation();
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const storepokemon = useSelector(state => state.pokemons);
    const dispatch = useDispatch();
    const pageLimit = 5;
    let AllDataPoke = [];

    useEffect(() => {
        // GET ALL DATA POKEMONS
        if (pokemons.length <= 0) {
            getAllPokemons().then(response => {
                setPokemons(response.results);
            });
        }
        // GET SPECIFIC DATA FOR EACH POKEMON
        if (pokemons.length > 0) {
            pokemons.map(element => {
                getPokemonsData(element).then(resp => {
                    AllDataPoke.push(resp);
                    if (pokemons.length === AllDataPoke.length) {
                        setData(AllDataPoke);
                        setIsLoading(false);
                    }
                });
            });
        }
    }, [pokemons, isLoading]);

    useEffect(() => {
        setCurrentData(data.slice(offset, offset + pageLimit));
        dispatch(updatePokemon(data.slice(offset, offset + pageLimit)));
    }, [offset, data]);

    return (
        <div className="Home-Conteiner">
            <div className="Language">
                <LanguageSelector />
            </div>
            <div className="Pokemons">
                {isLoading ? (
                    <div
                        className="Pokemons-Loading"
                        data-testid="Pokemons-Loading"
                    >
                        {t('home_loading')}
                    </div>
                ) : (
                    <List />
                )}
            </div>
            <div className="Paginator">
            <Paginator
                totalRecords={data.length}
                pageLimit={pageLimit}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            </div>
        </div>
    );
};

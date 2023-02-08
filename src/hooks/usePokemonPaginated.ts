/* eslint-disable prettier/prettier */
import { useRef, useState } from 'react';
import { IPokemon, IPokemonDetails, IPokemonResponse } from '../interfaces/IPokemonResponse';
import pokeApi from '../api/pokeApi';
import React from 'react';

const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<IPokemonDetails[]>(
    [],
  );
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon');

  const mapPokemonList = React.useCallback((pokemonList: IPokemon[]) => {
    const newPokemonList: IPokemonDetails[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, picture, name };
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
  }, [simplePokemonList]);

  const loadPokemons = React.useCallback(async () => {
    if (nextPageUrl.current === null) {
      return [];
    }

    const resp = await pokeApi.get<IPokemonResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp?.data?.results);
  }, [mapPokemonList]);


  React.useEffect(() => {
    loadPokemons();
  }, [loadPokemons, simplePokemonList]);

  return {
    simplePokemonList,
    loadPokemons,
  };
};

export default usePokemonPaginated;

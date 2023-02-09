import React, {useState} from 'react';
import pokeApi from '../api/pokeApi';
import {ISinglePokemon} from '../interfaces/IPokemonResponse';

const usePokemon = (pokemonId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [singlePokemon, setSinglePokemon] = useState<ISinglePokemon>(
    {} as ISinglePokemon,
  );

  const loadPokemon = React.useCallback(async () => {
    const singlePokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const resp = await pokeApi.get<ISinglePokemon>(singlePokemonUrl);
    setSinglePokemon(resp?.data ?? {});
    setIsLoading(false);
  }, [pokemonId]);

  React.useEffect(() => {
    if (pokemonId === '') {
      return;
    }

    loadPokemon();
  }, [loadPokemon, pokemonId]);

  return {
    isLoading,
    singlePokemon,
  };
};

export default usePokemon;

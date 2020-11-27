import { Pokemon } from '../../typings/pokemon';
import PropTypes from 'prop-types';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { readOnePokemon } from '../../store/pokemon';
import { Card, Image, Name, Number, Type } from './PokemonCard.constants';

const propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

type PokemonCardProps = PropTypes.InferProps<typeof propTypes>;

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ name, number }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const dispatch = useDispatch<AppDispatch>();
  const allPokemon = useSelector((state: RootState) => state.pokemon.allPokemon);

  const [pokemon, setPokemon] = useState<Pokemon>();

  const pokemonName = useMemo(() => (!pokemon ? name : pokemon.name), [name, pokemon]);
  const pokemonTypes = useMemo(() => (!pokemon ? [] : [...pokemon.types].sort((a, b) => a.slot - b.slot)), [pokemon]);

  /**
   * Use a side-effect to:
   *  - Handle some behaviour
   */
  useEffect(() => {
    if (pokemon) return;

    if (inView) {
      dispatch(readOnePokemon(number));
    }
  }, [dispatch, inView, number, pokemon]);

  /**
   * Use a side-effect to:
   *  - Set the pokemon, if it is found in the pokemon list
   */
  useEffect(() => {
    if (pokemon) return;

    const matchedPokemon = allPokemon[number];

    if (matchedPokemon) {
      setPokemon(matchedPokemon);
    }
  }, [allPokemon, number, pokemon]);

  return (
    <Card ref={ref}>
      <Number>{number}</Number>
      <Name>{pokemonName}</Name>
      {!pokemon ? (
        'Loading...'
      ) : (
        <>
          <Image>
            <img src={pokemon.sprites.front_default || ''} alt="" />
          </Image>
          <Type>{pokemonTypes.map(({ type }) => type.name).join(', ')}</Type>
        </>
      )}
    </Card>
  );
};

export default PokemonCard;

import { PropsWithClassName } from '../../typings/common';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMeasure, useWindowSize } from 'react-use';
import { FixedSizeGrid } from 'react-window';
import styled from 'styled-components';

import { mediaQueries, screenSizes } from '../../config/styles';
import { AppDispatch, RootState } from '../../store';
import { readAvailablePokemon } from '../../store/pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import { cardGaps } from '../PokemonCard/PokemonCard.constants';
import { ListItem } from './PokemonList.constants';

const propTypes = {};

type PokemonListProps = PropsWithClassName<PropTypes.InferProps<typeof propTypes>>;

const PokemonList: FunctionComponent<PokemonListProps> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const availablePokemon = useSelector((state: RootState) => state.pokemon.availablePokemon);
  const { width: windowWidth } = useWindowSize();

  const [gridRef, { width: gridWidth }] = useMeasure<HTMLDivElement>();

  const itemsPerRow = useMemo(() => {
    if (windowWidth < screenSizes.desktopMin) {
      return 3;
    }

    return 4;
  }, [windowWidth]);

  const itemHeight = useMemo(() => gridWidth / itemsPerRow, [gridWidth, itemsPerRow]);

  /**
   * Use a side-effect to:
   *  - Fetch the root pokemon list
   */
  useEffect(() => {
    dispatch(readAvailablePokemon());
  }, [dispatch]);

  return (
    <div className={className} ref={gridRef}>
      <FixedSizeGrid
        columnCount={itemsPerRow}
        columnWidth={gridWidth / itemsPerRow}
        height={Math.ceil(availablePokemon.length / itemsPerRow) * itemHeight}
        rowCount={Math.ceil(availablePokemon.length / itemsPerRow)}
        rowHeight={itemHeight}
        width={gridWidth}
        innerElementType="ul"
        style={{ overflow: 'visible' }}
      >
        {({ columnIndex, rowIndex, style }) => {
          const pokemonId = columnIndex + 1 + rowIndex * itemsPerRow;
          const { name } = availablePokemon[pokemonId - 1] || {};

          return (
            <ListItem key={`pokemon--${pokemonId}`} style={style}>
              <PokemonCard number={pokemonId} name={name} />
            </ListItem>
          );
        }}
      </FixedSizeGrid>
    </div>
  );
};

PokemonList.propTypes = propTypes;

export default styled(PokemonList)`
  margin: 0 ${rem(-cardGaps.mobile)};

  @media ${mediaQueries.desktop} {
    margin: 0 ${rem(-cardGaps.desktop)};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

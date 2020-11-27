import { Pokemon } from '../typings/pokemon';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

const sliceName = 'pokemon';

type AvailablePokemon = { name: string; url: string };

type PokemonState = {
  availablePokemon: AvailablePokemon[];
  allPokemon: { [key: number]: Pokemon | undefined };
};

export const initialState: PokemonState = {
  availablePokemon: [],
  allPokemon: {},
};

// Async thunks
export const readAvailablePokemon = createAsyncThunk<AvailablePokemon[]>(
  `${sliceName}/readAvailablePokemon`,
  async () => {
    const limit = process.env.NODE_ENV === 'development' ? 252 : 1050;
    const {
      data: { results },
    } = await Axios.get<{ results: AvailablePokemon[] }>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);

    return results;
  },
);

export const readOnePokemon = createAsyncThunk<Pokemon, number>(`${sliceName}/readOnePokemon`, async (number) => {
  const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);

  return data;
});

// State slice
const stateSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // readAvailablePokemon
    builder.addCase(readAvailablePokemon.fulfilled, (state, { payload }) => ({
      ...state,
      availablePokemon: payload,
    }));
    // readOnePokemon
    builder.addCase(readOnePokemon.fulfilled, (state, { payload, meta: { arg: pokemonId } }) => ({
      ...state,
      allPokemon: {
        ...state.allPokemon,
        ...(!!payload && {
          [pokemonId]: payload,
        }),
      },
    }));
  },
});

export default stateSlice.reducer;

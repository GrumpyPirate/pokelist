import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import pokemon, { initialState as initialPokemonState } from './pokemon';

export const rootReducer = combineReducers({
  pokemon,
});

export type RootState = ReturnType<typeof rootReducer>;

export const initialState: RootState = {
  pokemon: initialPokemonState,
};

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
  });

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

export default createStore();

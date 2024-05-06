import { Action, Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: Middleware = (store) => {
  return (next) => (action) => {
    next(action);

    const { type } = action as Action;

    if (type === "pokemons/toggleFavorite") {
      const { pokemons } = store.getState() as RootState;

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(pokemons.favorites)
      );
      return;
    }

    return;
  };
};

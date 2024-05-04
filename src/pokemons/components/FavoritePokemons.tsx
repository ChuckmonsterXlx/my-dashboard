"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = Object.values(
    useAppSelector((state) => state.pokemons)
  );

  const [pokemons, setPokemons] = useState(favoritePokemons);

  return (
    <>
      {pokemons.length ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh]  items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>There are no favorites</span>
    </div>
  );
};

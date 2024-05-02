"use client";

import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="overflow-hidden bg-white rounded shadow-lg">
        <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            style={{ width: "auto", height: "150px" }}
            width={0}
            height={0}
            alt={name}
            key={id}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="px-4 py-2 text-xs font-semibold text-gray-100 border rounded-full"
            >
              More information
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                {isFavorite ? "Favorite" : "Not favorite"}
              </p>
              <p className="text-xs text-gray-500">
                {isFavorite ? "Click to remove" : "Click to add"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

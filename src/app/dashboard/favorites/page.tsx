import { FavoritePokemons, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pokemon favorite",
    description: "List of favorite pokemon",
  };
}

export default async function PokemonsPage() {
  const pokemons: SimplePokemon[] = [];

  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        Pokemon favorite - <small className="text-blue-500">Global state</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}

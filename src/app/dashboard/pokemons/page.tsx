import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemos = async (
  limit: number = 500,
  offset: number = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemos();

  return (
    <div className="flex flex-col">
      <h1>Pokemons Page</h1>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {pokemons.map((pokemon) => (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
}

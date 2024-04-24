import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

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
      <span className="my-2 text-5xl">
        <small>Static</small> list of pokemons
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

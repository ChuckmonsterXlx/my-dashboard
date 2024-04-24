import { Pokemon } from "@/pokemons";

interface Props {
  params: {
    id: string;
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <>
      <h1>Pokemon ID: {params.id}</h1>
      {JSON.stringify(pokemon)}
    </>
  );
}

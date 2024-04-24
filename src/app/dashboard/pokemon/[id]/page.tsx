import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `${name} page`,
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
      <h1>Pokemon: {pokemon.name}</h1>
    </>
  );
}

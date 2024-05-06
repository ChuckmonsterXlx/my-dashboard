import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

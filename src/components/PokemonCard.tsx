import Link from "next/link";
import { SimplePokemon } from "../pokemons/interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

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
          <Link
            href="/dashboard/main"
            className="flex items-center px-4 py-2 hover:bg-gray-100"
          >
            <div className="text-green-600">
              <IoHeartOutline className="text-red-600" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                Not favorite
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

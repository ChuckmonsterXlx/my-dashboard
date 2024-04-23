const getPokemos = async (limit: number = 20, offset: number = 0) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  return data;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemos();

  return (
    <>
      <h1>Pokemons Page</h1>
      {JSON.stringify(pokemons)}
    </>
  );
}

export async function load({ params }) {
  const { pokeId, page } = params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  const json = await res.json();
  const pokemon = {
    id: json.id,
    name: json.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`,
    weight: json.weight,
    height: json.height,
    types: json.types.map((type) => type.type.name),
    abilities: json.abilities.map((ability) => ability.ability.name),
    stats: json.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
  };
  return {
    pokemon,
  };
}
